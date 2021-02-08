require('ts-node/register')

exports.config = {
  tests: './project/tests/*_test.ts',
  output: './project/output',
  helpers: {
    Playwright: {
      url: 'http://qainterview.pythonanywhere.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './project/steps/steps_file.js',
    factorialPage: "./project/page_objects/factorial_page.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'UrbantzTestProject',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}