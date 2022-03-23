const { Page } = require('../src/PO/page.js');
const { Log } = require('../src/PO/exerciseLogPage.js');
const { formatDate } = require('./formatDate.js');
describe('Exercise Creation Page', function () {
    it('should have correct fields', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Create Exercise Log');
        const pageTitle = await Page.pageTitle.getText();
        expect(pageTitle).toEqual('Create New Exercise');
        await expect(Log.userLabel).toExist();
        const defaultOption = await Log.selectUser.$('option').getText();
        await expect(Log.selectUser).toHaveValue(defaultOption);
        await expect(Log.descriptionLabel).toExist();
        await expect(Log.descriptionInput).toHaveValue('');
        await expect(Log.durationLabel).toExist();
        await expect(Log.durationInput).toHaveValue('0');
        await expect(Log.dateLabel).toExist();
        const defaultDate = formatDate(new Date(), 'mm/dd/yyyy');
        await expect(Log.dateInput).toHaveValue(defaultDate);
        await expect(Log.exerciseSubmit).toBeEnabled();
        await expect(Log.exerciseSubmit).toHaveValue('Create Exercise Log');
    })
    it('should create exercise', async function () {
        await Log.selectUser.selectByAttribute('value', 'Polina');
        await Log.descriptionInput.setValue('descr'+Math.floor(Math.random()*1000));
        await Log.durationInput.setValue('3');
        await Log.dateInput.click();
        await Log.buttonL.click();
        await $("//div[@aria-label='Choose Tuesday, February 22nd, 2022']").click();
        await Log.exerciseSubmit.click();
    })
})