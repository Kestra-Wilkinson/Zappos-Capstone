const getDriver = require('./setup');
const HomePage = require('../pages/HomePage');
const SearchPage = require('../pages/SearchPage');

describe('Zappos Search Tests', function () {
  this.timeout(60000);
  let driver, home, search;

  const terms = ["Sports", "Sun Glasses", "Mules", "Hiking"];

  before(async () => {
    driver = getDriver();
    home = new HomePage(driver);
    search = new SearchPage(driver);
    await home.open();
  });

  terms.forEach(term => {
    it(`should return results for "${term}"`, async () => {
      await search.performSearch(term);
    });
  });

  after(async () => {
    await driver.quit();
  });
});