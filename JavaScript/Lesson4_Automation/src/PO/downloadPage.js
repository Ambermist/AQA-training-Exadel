class Download {    
    
    get downloadButton(){
        return $("//button[@data-ta='downloadUsers']");
    }    
}
   
module.exports = { Download: new Download() };