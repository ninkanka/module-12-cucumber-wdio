import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import LoginPage from '../../src/pages/login.page.js';
import RegisterPage from '../../src/pages/register.page.js';
import HeaderComponent from '../../src/components/header.js';
import { PATHS, USERS } from '../../src/utils/testData.js';

Given('the user is on the login page', async () => {
    await LoginPage.open();
});

When('the user signs in with valid credentials', async () => {
    await LoginPage.login(USERS.valid.email, USERS.valid.password);
});

Then('the user menu should be displayed', async () => {
    assert.isTrue(
        await HeaderComponent.isUserMenuDisplayed(),
        'user menu should be visible after login'
    );
});

When('the user opens the registration form', async () => {
    await LoginPage.clickRegisterLink();
});

When('the user registers a new account', async () => {
    await RegisterPage.fillRegistrationForm(USERS.newUser);
    await RegisterPage.submitRegistration();
    await RegisterPage.waitForRegistrationToFinish();
});

Then('the user should leave the registration page', async () => {
    assert.notInclude(
        await browser.getUrl(),
        PATHS.register,
        'user should leave the registration page after registration'
    );
});

When('the user signs out from the account menu', async () => {
    await HeaderComponent.openUserMenu();
    await HeaderComponent.clickSignOut();
});

Then('the header should show {string} instead of the username', async (text) => {
    assert.equal(
        await HeaderComponent.signInLinkText(),
        text,
        'header should show Sign in after logout'
    );
});
