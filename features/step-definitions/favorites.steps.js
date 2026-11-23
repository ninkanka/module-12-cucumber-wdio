import { When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import ProductPage from '../../src/pages/product.page.js';
import FavoritesPage from '../../src/pages/favorites.page.js';
import HeaderComponent from '../../src/components/header.js';
import { state } from '../../src/utils/scenarioState.js';

When('the user clicks on the "Add to favorites" button', async () => {
    await ProductPage.addToFavorites();
});

When('the user opens the account drop-down menu', async () => {
    await HeaderComponent.openUserMenu();
});

When('the user selects "My favorites" from the menu', async () => {
    await HeaderComponent.clickMyFavorites();
});

Then('the user should see the selected product in the favorites list', async () => {
    await FavoritesPage.waitForFavorite(state.productTitle);
    expect(await FavoritesPage.favoriteNames()).to.include(state.productTitle);
});
