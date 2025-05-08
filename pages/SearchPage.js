const { By, until, Key } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const assert = require('assert');

class SearchPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async performSearch(term) {
    const inputSelector = By.css('input[placeholder*="Search"]');
    await this.driver.wait(until.elementLocated(inputSelector), 10000);

    const input = await this.driver.findElement(inputSelector);
    await input.click();
    await input.sendKeys(Key.chord(Key.CONTROL, "a"), Key.DELETE);
    await input.sendKeys(term, Key.ENTER);

    await this.driver.wait(until.elementLocated(By.css('span.wt-z')), 10000);
    const countText = await this.driver.findElement(By.css('span.wt-z')).getText();
    const match = countText.match(/(\d+)/);
    const count = match ? parseInt(match[1]) : 0;
    assert(count > 0, `Expected results for "${term}", but found none`);
  }
}

module.exports = SearchPage;