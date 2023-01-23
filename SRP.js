//SINGLE RESPONSIBILITY PRINCIPLE
//a class should do one thing and therefore have one reason to change
// a self contained block of code eg a class, module or function should have one responsibilty

//incorrect way
//this class tracks calories and logs calorie surplus instead of doing one thing
class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories) {
            this.logCalorieSurplus();
        }
    }

    logCalorieSurplus() {
        console.log('Max calories exceeded');
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);


//correct way
//calorietrack class only tracks calories and logging is done using a separate function
class CalorieTrack {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories) {
            logMessage('Max calories exceeded');
        }
    }
}

function logMessage(message) {
    console.log(message);
}

const newCalorieTracker = new CalorieTrack(2000);
newCalorieTracker.trackCalories(500);
newCalorieTracker.trackCalories(1000);
newCalorieTracker.trackCalories(700);










