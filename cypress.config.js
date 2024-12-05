require('dotenv').config()
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push('--disable-logging');
        }
        return launchOptions;
      });
    },
  },
  env: {
    MY_USE: process.env.EMAIL,                      // merge here with spread operator
    MY_PASS: process.env.SENHA                      // merge here with spread operator
  },
};
