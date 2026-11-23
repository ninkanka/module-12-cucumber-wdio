import { When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import HeaderComponent from '../../src/components/header.js';
import ContactPage from '../../src/pages/contact.page.js';

When('the user selects "Contact" from main menu', async () => {
    await HeaderComponent.openContact();
});

When('the user inputs the contact details', async (dataTable) => {
    const data = dataTable.rowsHash();
    await ContactPage.fillForm({
        firstName: data['first name'],
        lastName: data['last name'],
        email: data.email,
        subject: data.subject,
        message: data.message,
    });
});

When('the user clicks "Send" button', async () => {
    await ContactPage.send();
});

Then('a confirmation message should be displayed', async () => {
    expect(await ContactPage.isConfirmationDisplayed()).to.be.true;
});
