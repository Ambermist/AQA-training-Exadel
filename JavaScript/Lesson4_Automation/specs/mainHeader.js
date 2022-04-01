const { Page } = require('../src/PO/page.js');
describe('Main Header', function () {
    it('should have correct header items', async function () {
        browser.emulateDevice('iPhone X');
        Page.open('http://localhost:3000/');
        const headerText = await Page.headerTitle.getText();
        expect(headerText).toEqual('ExcerTracker');
        let headerItems = await Page.navigation.map((item)=>item.getText());
        expect(headerItems).toEqual(['Exercises', 'Create Exercise Log', 'Create User', 'Upload Files', 'Download Files']);
    })
})