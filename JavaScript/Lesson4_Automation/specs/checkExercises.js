const { Page } = require('../src/PO/page.js');
const { Exercises } = require('../src/PO/exercisesPage.js');
const { LogEdit } = require('../src/PO/exerciseLogPageEdit.js');
const { formatDate } = require('../utils/formatDate.js');
describe('Exercises Page', function () {
    it('should have correct cells data', async function () {
        Page.open('http://localhost:3000/');
        Page.header.waitForDisplayed({ timeout: 3000 });
        Page.navigateTo('Exercises');
        const pageTitle = await Page.pageTitle.getText();
        expect(pageTitle).toEqual('Logged Exercises');
        let headersValues = await Exercises.headers.map((item)=>item.getText());
        expect(headersValues).toEqual(['Username', 'Description', 'Duration', 'Date', 'Actions']);
        const tableRows = await Exercises.rows;
        const tableRow = tableRows[0];
        for(const cell of await Exercises.getCells(tableRow)){
            const fontSize = await cell.getCSSProperty('font-size');
            expect(fontSize.value).toEqual('16px');
            const fontFamily = await cell.getCSSProperty('font-family');
            expect(fontFamily.value).toEqual('system-ui');
        }
    })

    it('edit exercise', async function () {               
        let testCells = await Exercises.getCells(await Exercises.findTestCells());
        let testCellsValues = [];
        for(const cell of testCells){
            const cellText = await cell.getText();
            testCellsValues.push(cellText);
        }
        console.log(testCellsValues);
        Exercises.edit(testCells[4]);
        await browser.pause(500);

        await LogEdit.descriptionInput.clearValue();
        await LogEdit.descriptionInput.setValue('descr'+Math.floor(Math.random()*1000));        
        await LogEdit.durationInput.setValue('5');
        await LogEdit.dateInput.click();
        const existingDate = await LogEdit.dateInput.getValue();
        const dateLength = existingDate.length;
        let keysArr = new Array(dateLength).fill("\uE003");
        await browser.keys(keysArr);
        await LogEdit.dateInput.setValue(formatDate(new Date(), 'mm/dd/yyyy'));
        await LogEdit.durationInput.click();        
        await LogEdit.exerciseSubmit.click();
        await browser.pause(500);

        
        testCells = await Exercises.getCells(await Exercises.findTestCells());
        let newTestCellsValues = [];
        for(const cell of testCells){
            const cellText = await cell.getText();
            newTestCellsValues.push(cellText);
        }
        console.log(newTestCellsValues);
        expect(testCellsValues).not.toEqual(newTestCellsValues);
    })

    it('delete exercise', async function () {
        let testRow = await Exercises.findTestCells();            
        let testCells = await Exercises.getCells(testRow);
        Exercises.delete(testCells[4]);
        expect(testRow).not.toExist();
    })
})