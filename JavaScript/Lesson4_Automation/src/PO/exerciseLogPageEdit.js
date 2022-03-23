class LogEdit { 
    get userLabel(){
        return $("//label[text()='Username']");
    }   
    get selectUser(){
        return $("//select[@data-ta='editExerciseUserInput']");
    }
    get descriptionLabel(){
        return $("//label[text()='Description: ']");
    }
    get descriptionInput(){
        return $("//input[@data-ta='editExerciseDescription']");
    }
    get durationLabel(){
        return $("//label[text()='Duration (in minutes): ']");
    }
    get durationInput(){
        return $("//input[@data-ta='editExerciseDuration']");
    }
    get dateLabel(){
        return $("//label[text()='Date: ']");
    }
    get dateInput(){
        return $("//div[@data-ta='editExerciseDatePicker']//input");
    }
    get buttonL(){
        return $("//button[@aria-label='Previous Month']")
    }
    get buttonR(){
        return $("//button[@aria-label='Next Month']")
    }
    get exerciseSubmit(){
        return $("//input[@data-ta='editExerciseFormSubmit']");
    }
}

module.exports = { LogEdit: new LogEdit() };