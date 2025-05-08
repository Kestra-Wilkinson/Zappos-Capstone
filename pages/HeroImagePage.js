
const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class HeroImagePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async openHomePage() {
    await this.driver.get('https://www.zappos.com/');
    await this.driver.wait(until.elementLocated(By.css('img')), 10000);
  }

  async verifyHeroImageLoaded() {
    const heroImg = await this.driver.wait(
      until.elementLocated(By.css('img')),
      10000
    );
    const isDisplayed = await heroImg.isDisplayed();
    const naturalWidth = await this.driver.executeScript(
      'return arguments[0].naturalWidth', heroImg
    );

    if (!isDisplayed || naturalWidth === 0) {
      throw new Error('Hero image failed to load properly');
    }
  }
}

module.exports = HeroImagePage;
