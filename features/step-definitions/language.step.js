import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import HeaderComponent from '../../src/components/header.js';

When('the user selects language {string} from the drop-down menu', async (lang) => {
    await HeaderComponent.changeLanguage(lang);
});

Then('the page language attribute should be {string}', async (lang) => {
    assert.equal(
        await HeaderComponent.currentLanguage(),
        lang.toLowerCase(),
        'page language should match the selected one'
    );
});
