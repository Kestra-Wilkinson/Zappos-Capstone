
const getDriver = require('./setup');
const HomePage = require('../pages/HomePage');
const NavigationPage = require('../pages/NavigationPage');

const itemsToTest = ["All Men's Shoes", 'Sneakers & Athletic', 'Boots', 'Loafers', 'Oxfords', 'Sandals', 'Slippers', 'Hiking', 'Work & Safety Sneakers', 'Work & Duty Boots', 'Adaptive', 'Wide', "All Men's Clothing", 'Shirts & Tops', 'Pants', 'Coats & Outerwear', 'Jeans', 'Hoodies & Sweatshirts', 'Shorts', 'Big & Tall', 'Activewear', 'Work & Duty Apparel', 'Sleepwear', "All Men's Accessories", 'Hats', 'Bags', 'Belts', 'Watches', 'Sunglasses & Eyewear', 'Wallets', 'Gloves', 'adidas', 'Birkenstock', 'Brooks', 'Converse', 'Hey Dude', 'Merrell', 'The North Face'];

describe('Zappos Men Menu Navigation', function () {
  this.timeout(120000);
  let driver, nav, home;

  before(async () => {
    driver = getDriver();
    nav = new NavigationPage(driver);
    home = new HomePage(driver);
    await home.open();
  });

  itemsToTest.forEach(linkText => {
    it(`should navigate to: ${linkText}`, async () => {
      await nav.openMenMenu();
      await nav.clickMenuOptionByText(linkText);
    });
  });

  after(async () => {
    await driver.quit();
  });
});
