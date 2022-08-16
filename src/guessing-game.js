class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.centralElement = 0;
    }
  
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
  
    guess() {
        this.centralElement = Math.round(this.min + (this.max - this.min)/2);
        return this.centralElement;
    }
  
    lower() {
        this.max = this.centralElement;
    }
  
    greater() {
        this.min = this.centralElement;
    }
  }
  
  module.exports = GuessingGame;
