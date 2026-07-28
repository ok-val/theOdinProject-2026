// ## Single Repsonsibility

// From Web Dev Simplified: 
// https://www.youtube.com/watch?v=UQqY3_6Epbg&list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9&index=1


class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            CalorieLogger.logCalorieSurplus();
            // This could also be an entirely different module
        }
    }

    // logCalorieSurplus() {
    //     console.log('Max calories exceeded');   
    // }

    /**
     * Notice that the CalorieTracker actually also logCalorieSurplus
     * This infracts the Single Responsibility principle. 
     * So we want to move that to a different class
     */
}

class CalorieLogger {
    static logCalorieSurplus() {
        console.log('Max calories exceeded');
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);


