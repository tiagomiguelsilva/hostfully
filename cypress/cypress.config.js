require('dotenv').config()

function getEnvPaths() {
  switch (process.env.ENVIRONMENT) {
    case 'local':
      return {
        ui: 'http://localhost:3000',
        api: 'http://localhost:3001',
      }
    case 'test':
      return {
        ui: 'https://test.hostfully.com',
        api: 'https://test.hostfully.com/api',
      }
    case 'staging':
      return {
        ui: 'https://staging.hostfully.com',
        api: 'https://staging.hostfully.com/api',
      }
    default:
      return {
        ui: 'https://computer-database.gatling.io/computers',
        api: 'http://localhost:3001',
      }
  }
}

module.exports = {
  chromeWebSecurity: false,
  defaultCommandTimeout: 20_000,
  experimentalStudio: true,
  video: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  // mac 11's default
  viewportHeight: 687,
  viewportWidth: 1440,
  e2e: {
    baseUrl: getEnvPaths().ui,
    env: {
      requestMode: true,
      apiUrl: getEnvPaths().api,
    },
  },
}
