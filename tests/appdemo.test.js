import { expect } from 'chai';

describe('API Demo Testing', () => {
    it('Should open the App', async () => {
        console.log('Aplikasi terbuka');
        expect(true).to.equal(true);
    });

    it('Should entered value', async () => {
        const appMenu = await $(`//android.widget.TextView[@content-desc="App"]`)
        await appMenu.waitForDisplayed({ timeout: 20000});
        const isVisible = await appMenu.isDisplayed();
        expect(isVisible).to.be.true;
        const appAlertDialog = await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`)
        const appTextEntryDialog = await $(`//android.widget.Button[@content-desc="Text Entry dialog"]`)
        await appMenu.click();
        await appAlertDialog.click();
        await appTextEntryDialog.click();

        const fieldNama = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]`)
        const fieldPass = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]`)
        await fieldNama.setValue('naya_testing_appium');
        await fieldPass.setValue('naya1234');
    });
});