class User {    
    get userLabel(){
        return $("//label[text()='Username: ']");
    }
    get userInput(){
        return $("//input[@data-ta='username']");
    }
    get userSubmit(){
        return $("//input[@data-ta='submit_username']");
    }
}

module.exports = { User: new User() };