const { Page } = require('../src/PO/page.js');
const { Download } = require('../src/PO/downloadPage.js');
const fs = require('fs');
describe('Download Page', function () {
    it('should have correct button', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Download Files');
        const pageTitle = await Page.pageTitle.getText();
        expect(pageTitle).toEqual('Download Files');
        await expect(Download.downloadButton).toHaveText('Download Users');
    })

    it('should download file', async function () {
        await Download.downloadButton.click();
        const data = fs.readFile(process.env.USERPROFILE + "/Downloads/download_users.json", 'utf8' , (err, data) => {
            if (err) {
              console.error(err);
              return
            }
            console.log(data);
            return data
          })
    })
})
