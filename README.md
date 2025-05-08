# Zappos Capstone Test Suite

This project is an automated end-to-end test suite for [Zappos.com](https://www.zappos.com), built using **Selenium WebDriver**, **Mocha**, **Chai**, and **Mochawesome**. It validates core user journeys such as navigation, search, and promotional interactions like the homepage hero image modal.

## 📁 Project Structure

```
zappos-capstone/
├── tests/
│   ├── navigation.test.js         # Validates all subcategories under "Men" menu
│   ├── search.test.js             # Tests search terms for expected results
│   └── heroImageModal.test.js     # Tests homepage hero image modal behavior
│
├── pages/
│   ├── homePage.js                # Page object for homepage interactions
│   └── menMenuPage.js             # Page object for Men’s menu and subcategories
│
├── utils/
│   └── driverSetup.js             # Initializes and exports the WebDriver instance
│
├── mochawesome-report/           # Auto-generated test report folder
├── package.json                   # Test dependencies and NPM scripts
└── README.md                      # Project documentation
```

## 🧪 Tests Overview

### ✅ Navigation Tests (`navigation.test.js`)
- Dynamically loops through all subcategories in the **Men** menu
- Verifies page titles after navigation
- Uses `for...of` iteration with link text

### ✅ Search Tests (`search.test.js`)
- Iterates through predefined search terms
- Confirms that visible results appear for each term
- Uses `Array.forEach` for parameterized testing

### ✅ Hero Image Modal Test (`heroImageModal.test.js`)
- Clicks the homepage hero image
- Waits for modal appearance using explicit waits
- Verifies modal visibility and expected behavior

## 🚀 How to Run the Tests

### 1. Install Dependencies

```bash
npm install
```

### 2. Run All Tests

```bash
npm test
```

### 3. View the Mochawesome Report

After running the tests, open the generated HTML report:

```
mochawesome-report/mochawesome.html
```

## 🛠️ Tech Stack

- **JavaScript (Node.js)**
- **Selenium WebDriver**
- **Mocha** (test framework)
- **Chai** (assertion library)
- **Mochawesome** (HTML reporting)

## 📌 Notes

- The suite follows the **Page Object Model (POM)** pattern for maintainability and clarity.
- Tests are written to mimic real user behavior and validate key functional paths.
- Designed for easy extension as test coverage increases.

## 📬 Contact

For questions, feedback, or collaboration inquiries, contact **Kestra Wilkinson**.
