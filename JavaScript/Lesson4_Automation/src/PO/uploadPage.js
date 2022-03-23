class Upload {    
    get fileInput(){
        return $("#upload");
    }
    get uploadButton(){
        return $("//button[@data-ta='upload_file_btn']");
    }
    get headers(){
        return $$("//thead/tr/th");
    }
    get rows(){
        return $$("//tbody/tr");
    }
    async getCells(row){
        return await row.$$('td');
    }
    async delete(cell){
        await cell.$("./a[text()='delete']").click();
    }
}
   
module.exports = { Upload: new Upload() };