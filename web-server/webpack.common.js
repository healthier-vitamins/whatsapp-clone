const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const buildPath = resolve(__dirname, 'build')
const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    // Get the root path (assuming your webpack config is in the root of your project!)
    const currentPath = path.join(__dirname)

    // Create the fallback path (the production .env)
    const basePath = currentPath + '/.env'

    // We're concatenating the environment name to our filename to specify the correct env file!
    const envPath = basePath + '.' + env.ENVIRONMENT

    // Check if the file exists, otherwise fall back to the production .env
    const finalPath = fs.existsSync(envPath) ? envPath : basePath

    // Set the path parameter in the dotenv config
    const fileEnv = dotenv.config({ path: finalPath }).parsed

    // reduce it to an object, the same as before (but with the variables from the file)
    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
        return prev
    }, {})

    return {
        entry: './src/index.tsx',
        output: {
            path: buildPath,
            filename: 'bundle.[fullhash].js',
            publicPath: '/'
        },
        resolve: {
            modules: [
                resolve('./src'),
                resolve('./node_modules')
                // join(__dirname, 'js/helpers')
            ],
            extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json']
            // fallback: {
            //     buffer: require.resolve('buffer'),
            //     crypto: require.resolve('crypto-browserify'),
            //     stream: require.resolve('stream-browserify')
            // }
        },

        externals: [
            {
                './cptable': 'var cptable'
            },
            {
                './jszip': 'jszip'
            }
        ],
        node: {
            global: true
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['build']
            }),
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({
                template: './src/index.html'
                // favicon: "./src/images/logo.ico",
            }),

            new MiniCssExtractPlugin({
                filename: 'bundle.[fullhash].css',
                chunkFilename: 'bundle.[fullhash].css'
            }),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer']
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser'
            })
        ],
        optimization: {
            // only removes the unused exports in production, not in development
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.jsx/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        configFile: resolve('babel.config.js')
                    },
                    include: [resolve('node_modules/strip-ansi')]
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: './'
                            }
                        },
                        'css-loader',
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2?|mp3)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: './fonts/[name]/[name].[ext]',
                        outputPath: 'fonts/'
                    }
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]?[fullhash]'
                    }
                }
            ]
        }
    }
}
