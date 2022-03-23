const { Page } = require('../src/PO/page.js');
describe('Main Header', function () {
    it('should have correct header items', async function () {
        Page.open('http://localhost:3000/');
        const headerText = await Page.headerTitle.getText();
        expect(headerText).toEqual('ExcerTracker');
        let headerItems = [];
        for (const item of await Page.navigation){
            await item.moveTo();            
            const itemText = await item.getText();
            headerItems.push(itemText);
            browser.pause(800);
        }
        expect(headerItems).toEqual(['Exercises', 'Create Exercise Log', 'Create User', 'Upload Files', 'Download Files']);
    })
})