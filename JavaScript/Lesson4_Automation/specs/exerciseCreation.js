const { Page } = require('../src/PO/page.js');
const { Log } = require('../src/PO/exerciseLogPage.js');
const { formatDate } = require('../utils/formatDate.js');
describe('Exercise Creation Page', function () {
    it('should have correct fields', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Create Exercise Log');
        Log.selectUser.waitForDisplayed({timeout:3000});
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
        const existingDate = await Log.dateInput.getValue();
        const dateLength = existingDate.length;
        let keysArr = new Array(dateLength).fill("\uE003");
        await browser.keys(keysArr);
        await Log.dateInput.setValue(formatDate(new Date('December 17, 2021 03:24:00'), 'mm/dd/yyyy'));
        await Log.durationInput.click();        
        await Log.exerciseSubmit.click();
    })
})