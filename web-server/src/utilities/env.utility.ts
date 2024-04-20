export function isDevelopment() {
    if (process.env.ENVIRONMENT === 'development') return true
    return false
}
