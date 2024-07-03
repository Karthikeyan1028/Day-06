//written a class to calculate the uber price.
class UberPriceCalculator {
    constructor(distance, duration) {
        this.distance = distance;
        this.duration = duration;
        }
    calculateFare() {
            const distanceFare = this.distance * 1.5;
            const timeFare = this.duration * 0.5;
            const totalFare = 2.0 + distanceFare + timeFare;
            return totalFare;
        }   
    getDistance(){
            return this.distance;
        }    
    setDistance(distance) {
            this.distance = distance;
        }
    getDuration(){
            return this.duration;
        }    
    setDuration(duration) {
            this.duration = duration;        
        }
    toString() {
            return `[distance=${this.distance} miles, duration=${this.duration} minutes]`;
        }
    }
    const calculator = new UberPriceCalculator(6.5,20);
    console.log(calculator.toString());
    const fare = calculator.calculateFare();
    console.log(`Total Fare: $${fare}`);