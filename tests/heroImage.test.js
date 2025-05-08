
const getDriver = require('./setup');
const HeroImagePage = require('../pages/HeroImagePage');
const assert = require('assert');

describe('Zappos Homepage Hero Image Test', function () {
  this.timeout(30000);
  let driver, hero;

  before(async () => {
    driver = getDriver();
    hero = new HeroImagePage(driver);
    await hero.openHomePage();
  });

  it('should load the hero image correctly', async () => {
    await hero.verifyHeroImageLoaded();
    assert.ok(true, '✅ Hero image is visible and properly loaded');
  });

  after(async () => {
    await driver.quit();
  });
});
