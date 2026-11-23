import { When, Then } from '@wdio/cucumber-framework';
import { assert, expect } from 'chai';
import HomePage from '../../src/pages/home.page.js';
import ProductPage from '../../src/pages/product.page.js';
import FilterSidebar from '../../src/components/filter-sidebar.js';
import { BUTTONS } from '../../src/utils/testData.js';
import { state } from '../../src/utils/scenarioState.js';

const BUTTON_TEST_IDS = {
    'Add to cart': BUTTONS.addToCart,
    'Add to favourites': BUTTONS.addToFavorites,
    Compare: BUTTONS.compare,
};

When('the user searches for {string}', async (term) => {
    state.fullCatalogCount = await HomePage.productCount();
    await HomePage.searchFor(term);
});

Then('the search results should be narrowed to products matching {string}', async (term) => {
    const names = await HomePage.productNames();
    assert.isAbove(names.length, 0, 'search returned no products');
    assert.isBelow(
        names.length,
        state.fullCatalogCount,
        'results should be fewer than full catalog'
    );
    names.forEach((name) => assert.include(name.toLowerCase(), term.toLowerCase()));
});

When('the user clicks on a product card', async () => {
    await HomePage.openFirstProduct();
});

Then('the product main details should be displayed', async () => {
    const details = await ProductPage.getDetails();
    expect(details.title).to.not.be.empty;
    expect(details.price).to.match(/\d/);
    expect(details.image).to.be.true;
    expect(details.specs).to.not.be.empty;
    expect(details.description).to.not.be.empty;
});

Then(
    'the action buttons {string}, {string}, and {string} should be available',
    async (first, second, third) => {
        const testIds = [first, second, third].map((label) => BUTTON_TEST_IDS[label]);
        expect(await ProductPage.actionButtonsDisplayed(testIds)).to.deep.equal([true, true, true]);
    }
);

When('the user selects filter {string} from filter sidebar', async (name) => {
    await HomePage.waitForListUpdate(() => FilterSidebar.selectFilter(name));
});

When('the user sorts {string} products using the drop-down menu', async (option) => {
    await HomePage.waitForListUpdate(() => FilterSidebar.sortBy(option));
});

Then(
    'products should be displayed according to the selected filter and sorting option',
    async () => {
        const prices = await HomePage.productPrices();
        expect(prices, 'list should not be empty').to.not.be.empty;
        expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    }
);

Then('all products should belong to the brand {string}', async (brand) => {
    const links = await HomePage.productLinks();
    expect(links, 'filtered list should not be empty').to.not.be.empty;
    for (const link of links) {
        await ProductPage.open(link);
        expect(await ProductPage.getBrand()).to.equal(brand);
    }
});
