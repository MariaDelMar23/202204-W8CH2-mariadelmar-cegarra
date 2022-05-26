"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
class Robot {
    constructor(type) {
        this.type = type;
        this.name = this.generateName();
        this.battery = 100;
        this.decreaseBattery();
    }
    reset() {
        this.battery = 100;
        this.name = this.generateName();
    }
    work() {
        if (this.battery > 0) {
            switch (this.type) {
                case "Cleaner":
                    console.log("Larala larita, I clean my little house");
                    break;
                case "Waiter":
                    console.log("Do you feel like a mini of fuet?");
                    break;
                case "Developer":
                    console.log("JavaScript is cool - I develop with JavaScript -> I'm cool");
                    break;
                default:
                    console.log("I don't know what I am :c");
                    break;
            }
        }
    }
    decreaseBattery() {
        let intervalID = setInterval(() => {
            if (this.battery > 0) {
                this.battery--;
            }
            if (this.battery === 10) {
                console.log("I'm running out of battery");
            }
            if (this.battery === 0) {
                console.log("I'm dead");
                clearInterval(intervalID);
            }
        }, 1000);
    }
    generateName() {
        let name = "";
        const chars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
        const numbers = "0123456789";
        for (let letter = 0; letter < 3; letter++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let number = 0; number < 2; number++) {
            name += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return name;
    }
}
exports.Robot = Robot;
