const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async open() {
    await this.driver.get('https://www.zappos.com/');
    await this.driver.wait(until.elementLocated(By.css('a[origin="www.zappos.com"][href="/running"]')), 10000);
  }
}

module.exports = HomePage;