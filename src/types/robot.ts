type Type = "Cleaner" | "Waiter" | "Developer";

class Robot {
  name: string;
  battery: number;

  constructor(public type: Type) {
    this.name = this.generateName();
    this.battery = 100;
    this.decreaseBattery();
  }

  public work() {
    if (this.battery > 0) {
      switch (this.type) {
        case "Cleaner":
          console.log("Larala larita, I clean my little house");
          break;

        case "Waiter":
          console.log("Do you feel like a mini of fuet?");
          break;

        case "Developer":
          console.log(
            "JavaScript is cool - I develop with JavaScript -> I'm cool"
          );
          break;

        default:
          console.log("I don't know what I am :c");
          break;
      }
    }
  }

  public reset() {
    this.battery = 100;
    this.name = this.generateName();
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
    let name: string = "";

    const chars: string = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const numbers: string = "0123456789";

    for (let letter: number = 0; letter < 3; letter++) {
      name += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    for (let number: number = 0; number < 2; number++) {
      name += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return name;
  }
}

export default Robot;
