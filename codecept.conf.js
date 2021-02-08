require('ts-node/register')

exports.config = {
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
    factorialPage: './project/page_objects/factorial_page.js'
  },
  mocha: {
    reporterOptions: {
        reportDir: "./project/output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './project/features/*.feature',
    steps: './project/features/step_definitions/*_steps.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './project/tests/*_test.ts',
  name: 'UrbantzTestProject'
}