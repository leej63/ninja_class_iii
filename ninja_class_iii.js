class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My Ninja name is ${this.name}!`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`You have gained 10 health, total health is now ${this.health}!`)
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    // function in the child class
    speakWisdom() { 
        // by using super, we call the parent method of drinkSake            
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}

const sensei1 = new Sensei("Jonathan");
sensei1.speakWisdom();
sensei1.showStats();