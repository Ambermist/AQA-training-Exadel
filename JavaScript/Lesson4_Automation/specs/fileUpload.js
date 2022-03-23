const { Page } = require('../src/PO/page.js');
const { Upload } = require('../src/PO/uploadPage.js');
const path = require('path');
describe('Upload Page', function () {
    it('should have correct fields', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Upload Files');
        const pageTitle = await Page.pageTitle.getText();
        expect(pageTitle).toEqual('File Upload');
        await expect(Upload.fileInput).toHaveValue('');
        const filepath = path.join(__dirname + '\\forCheck.txt');
        await Upload.fileInput.setValue(filepath);
        await expect(Upload.fileInput).toHaveValue('C:\\fakepath\\forCheck.txt');
        await expect(Upload.uploadButton).toHaveText('Upload File');
        let headersValues = [];
        const headers = await Upload.headers;
        for (const head of headers){
            const headText = await head.getText();
            headersValues.push(headText);
        }
        expect(headersValues).toEqual(['File Name', 'Action']);
    })

    it('should upload file', async function () {
        await Upload.fileInput.clearValue();
        const filepath = path.join(__dirname + '\\forUpload.txt');
        await Upload.fileInput.setValue(filepath);
        await Upload.uploadButton.click();
        const uploadedCells = await Upload.getCells(await Upload.rows[0]);
        expect(await uploadedCells[0].getText()).toEqual('forUpload.txt');             
    })
    it('should delete file', async function () {
        const testRow = await Upload.rows[0];
        const uploadedCells = await Upload.getCells(await Upload.rows[0]);
        Upload.delete(uploadedCells[1]);
        expect(testRow).not.toExist();              
    })
})

