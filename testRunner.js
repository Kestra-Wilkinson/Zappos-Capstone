const Mocha = require('mocha');
const mocha = new Mocha({ timeout: 120000 });

mocha.addFile('./tests/search.test.js');
mocha.addFile('./tests/navigation.test.js');
mocha.addFile('./tests/heroImage.test.js');

mocha.run(function (failures) {
  process.exitCode = failures ? 1 : 0;
});