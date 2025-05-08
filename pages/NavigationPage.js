const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class NavigationPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async openMenMenu() {
    const menSelector = By.css('a[data-shyguy="navMen"]');
    const menu = await this.driver.wait(until.elementLocated(menSelector), 10000);
    await menu.click();
    await this.driver.sleep(1000);
  }

  async clickMenuOptionByText(linkText) {
    const link = await this.driver.wait(until.elementLocated(By.linkText(linkText)), 10000);
    await this.driver.wait(until.elementIsVisible(link), 10000);
    await link.click();
    await this.driver.sleep(2000); // Allow page to load

    // Check for presence of heading or result text that matches the intent
    const headingSelector = By.css('h1');
    const resultCountSelector = By.css('span.wt-z');

    try {
      const heading = await this.driver.wait(until.elementLocated(headingSelector), 10000);
      const headingText = await heading.getText();
      if (headingText.toLowerCase().includes(linkText.split(" ")[0].toLowerCase())) {
        return;
      }
    } catch (err) {}

    try {
      const resultCount = await this.driver.wait(until.elementLocated(resultCountSelector), 10000);
      const countText = await resultCount.getText();
      const match = countText.match(/(\d+)/);
      if (match && parseInt(match[1]) > 0) {
        return;
      }
    } catch (err) {}

    throw new Error(`Page validation failed for: ${linkText}`);
  }
}

module.exports = NavigationPage;