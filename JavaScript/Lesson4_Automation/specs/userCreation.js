
const { Page } = require('../src/PO/page.js');
const { User } = require('../src/PO/userPage.js');
const { Log } = require('../src/PO/exerciseLogPage.js');
describe('User Creation Page', function () {
    it('should have correct fields', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Create User');
        const pageTitle = await Page.pageTitle.getText();
        expect(pageTitle).toEqual('Create New User');
        await expect(User.userLabel).toExist();
        await expect(User.userInput).toHaveValue('');
        await expect(User.userSubmit).toBeEnabled();
        await expect(User.userSubmit).toHaveValue('Create User');
    })
    it('should create user', async function () {
        await User.userInput.setValue('Polina');
        await User.userSubmit.click();
        Page.navigateTo('Create Exercise Log');
        const newOption = await Log.selectUser.$("//option[@value='Polina']");
        expect(newOption).toExist();
    })
})