# Module 12: WebdriverIO + Cucumber

Automated UI tests for https://practicesoftwaretesting.com/ written in Gherkin (feature files) and executed by WebdriverIO with the Cucumber framework. The scenarios are based on Module 2.

## Run

1. `npm install`
2. `npm test` runs the whole suite
3. Run a group of scenarios by tag (see [Run by tags](#run-by-tags))

## Project structure

- `features/*.feature`: scenarios in Gherkin. They are executed by the tests.
- `features/step-definitions/*.js`: step implementations (Given / When / Then).
- `src/pages/`, `src/components/`: Page Object classes.
- `src/utils/testData.js`: technical and sensitive test data (users, paths, button ids).
- `src/utils/`: helpers (`elementHelper.js`, `sessionHelper.js`, `scenarioState.js`).

### Where test data lives

- **Business values** (product names, languages, filters, contact form fields) are written in the feature file, so the scenario can be read without opening the code.
- **Technical and sensitive data** (login credentials, URLs, button identifiers) is stored in `src/utils/testData.js`.

## Run by tags

| Command                  | Runs scenarios tagged |
| ------------------------ | --------------------- |
| `npm run test:smoke`     | `@smoke`              |
| `npm run test:auth`      | `@auth`               |
| `npm run test:cart`      | `@cart`               |
| `npm run test:contact`   | `@contact`            |
| `npm run test:favorites` | `@favorites`          |
| `npm run test:language`  | `@language`           |
| `npm run test:products`  | `@products`           |
| `npm run test:filters`   | `@filters`            |

## Reporters

- Spec reporter prints the results in the terminal.
- HTML report is written to `reports/html-reports/master-report.html`. It opens automatically, or run `start reports\html-reports\master-report.html` after the tests.
- Screenshots of failed scenarios are saved to `reports/screenshots/`.
- For the HTML report you need Chrome 157 or higher.

## Code Quality

This project uses **Prettier** for code formatting and **ESLint** for code quality checks.

### Tools

- **Prettier** formats code consistently (quotes, semicolons, indentation, line length). Configuration is in `.prettierrc`, ignored paths are in `.prettierignore`.
- **ESLint** finds potential errors and enforces coding rules. Configuration is in `eslint.config.mjs`.

### Available Scripts

`npm run lint` Run ESLint on the whole project (fails on any warning)
`npm run lint:fix` Run ESLint and fix auto-fixable issues
`npm run format` Format all files with Prettier
`npm run format:check` Check formatting without changing files

## Notes

- Login failed: account locked after too many failed attempts. Use another demo account and change the data in `USERS` in `src/utils/testData.js`:
    - Email: `customer2@practicesoftwaretesting.com` or `customer3@practicesoftwaretesting.com`
    - Password: `welcome01` or `pass123`
