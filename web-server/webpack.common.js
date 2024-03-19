const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((accumulator, element) => {
    accumulator[`process.env.${element}`] = JSON.stringify(env[element])
}, {})

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.[fullhash].js',
        publicPath: '/'
    },
    resolve: {
        modules: [resolve('./src'), resolve('./node_modules')],
        extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx', '.json']
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new webpack.DefinePlugin(envKeys),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.[fullhash].css',
            chunkFilename: 'bundle.[fullhash].css'
        }),
        // new webpack.ProvidePlugin({
        //     Buffer: ['buffer', 'Buffer']
        // }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ],
    optimization: {
        // tree shaking
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
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    // this is selected by default, here for informational purposes
                    configFile: path.resolve(__dirname, './babel.config.json')
                },
                exclude: /node_modules/
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
                    // this is needed for sass relative path handling
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
                test: /\.(png|jpg|gif|mp3)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192
                    }
                },
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192
                    }
                },
                use: ['svgo-loader'] // optional: Use svgo loader to optimize svg files
            }
        ]
    }
}
