class Exercises {    
    get headers(){
        return $$("//thead/tr/th");
    }
    get rows(){
        return $$("//tbody/tr");
    }
    async getCells(row){
        return await row.$$('td');
    }
    async edit(cell){
        await cell.$("./a[text()='edit']").click();
    }
    async delete(cell){
        await cell.$("./a[text()='delete']").click();
    }
    async findTestCells(){
        for(const row of await this.rows){
            const rowCells = await this.getCells(row);
            const userCell = rowCells[0];
            const userCellText = await userCell.getText();
            console.log(userCellText);
            if(userCellText === 'Polina'){
                await row.scrollIntoView();
                return row;                
            }            
        }
    }       
}

module.exports = { Exercises: new Exercises() };