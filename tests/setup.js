const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

function getDriver() {
  const options = new chrome.Options().addArguments('--start-maximized');
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

module.exports = getDriver;