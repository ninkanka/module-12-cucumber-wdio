import { Given } from '@wdio/cucumber-framework';
import HomePage from '../../src/pages/home.page.js';
import LoginPage from '../../src/pages/login.page.js';
import ProductPage from '../../src/pages/product.page.js';
import { state } from '../../src/utils/scenarioState.js';
import { USERS } from '../../src/utils/testData.js';

const openFirstProductPage = async () => {
    await HomePage.open();
    await HomePage.openFirstProduct();
    state.productTitle = await ProductPage.getTitle();
};

Given('the user is on the home page', async () => {
    await HomePage.open();
});

Given('the user is on the product page', openFirstProductPage);
Given('the user is on the product details page', openFirstProductPage);

Given('the user is signed in', async () => {
    await LoginPage.open();
    await LoginPage.login(USERS.valid.email, USERS.valid.password);
});
