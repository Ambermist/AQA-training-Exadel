class Log { 
    get userLabel(){
        return $("//label[text()='Username']");
    }   
    get selectUser(){
        return $("//select[@data-ta='selectUser']");
    }
    get descriptionLabel(){
        return $("//label[text()='Description: ']");
    }
    get descriptionInput(){
        return $("//input[@data-ta='description']");
    }
    get durationLabel(){
        return $("//label[text()='Duration (in minutes): ']");
    }
    get durationInput(){
        return $("//input[@data-ta='duration']");
    }
    get dateLabel(){
        return $("//label[text()='Date: ']");
    }
    get dateInput(){
        return $("//div[@data-ta='date']//input");
    }
    get datePicker(){
        return $(".react-datepicker-popper");
    }
    get buttonL(){
        return $("//button[@aria-label='Previous Month']")
    }
    get buttonR(){
        return $("//button[@aria-label='Next Month']")
    }
    get exerciseSubmit(){
        return $("//input[@data-ta='submitExercise']");
    }
}

module.exports = { Log: new Log() };