import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import HomePage from '../../src/pages/home.page.js';
import ProductPage from '../../src/pages/product.page.js';
import CartPage from '../../src/pages/cart.page.js';
import HeaderComponent from '../../src/components/header.js';
import { state } from '../../src/utils/scenarioState.js';

Given('the user is on the shopping cart page', async () => {
    await HomePage.open();
    await HomePage.openFirstProduct();
    await ProductPage.addToCart();
    await HeaderComponent.openCart();
});

Given('the user has at least one product in the shopping cart', async () => {
    expect(await CartPage.itemCount()).to.be.above(0);
});

When('the user clicks on the "Add to cart" button', async () => {
    await ProductPage.addToCart();
});

Then('the user should see the product on the shopping cart page', async () => {
    await HeaderComponent.openCart();
    const names = await CartPage.itemNames();
    expect(names.join(' ')).to.include(state.productTitle);
});

When('the user clicks on the delete button', async () => {
    await CartPage.deleteFirstItem();
});

Then('the user should see the empty shopping cart', async () => {
    expect(await CartPage.isEmpty()).to.be.true;
});
