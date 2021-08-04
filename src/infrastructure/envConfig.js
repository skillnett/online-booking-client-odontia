const isDevelopmentMode = process.env.NODE_ENV === 'development'

export const envConfig = {
    API_URL: isDevelopmentMode
        ? 'http://localhost:8000/api'
        : 'https://api.booking.dentalmedia.io/api',
}
