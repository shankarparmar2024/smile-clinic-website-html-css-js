const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',

  timeout: 60000,

  expect: {
    timeout: 15000
  },

  fullyParallel: false,

  workers: 1,

  retries: 0,

  reporter: 'html',

  use: {
    baseURL: 'https://smile-clinic-website-html-css-js.vercel.app/',

    browserName: 'chromium',

    headless: true,

    actionTimeout: 15000,

    navigationTimeout: 60000,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
});