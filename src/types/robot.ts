export type Type = "Cleaner" | "Waiter" | "Developer";

export class Robot {
  name: string;
  battery: number;

  constructor(public type: Type) {
    this.name = this.generateName();
    this.battery = 15;
    this.decreaseBattery();
  }

  public reset() {
    this.battery = 15;
    this.name = this.generateName();
  }

  public work() {
    if (this.battery > 0) {
      switch (this.type) {
        case "Cleaner":
          console.log(`${this.name}: Larala larita, I clean my little house`);
          break;

        case "Waiter":
          console.log(`${this.name}: Do you feel like a mini of fuet?`);
          break;

        case "Developer":
          console.log(
            `${this.name}: JavaScript is cool - I develop with JavaScript -> I'm cool`
          );
          break;

        default:
          console.log(`${this.name}: I don't know what I am :c`);
          break;
      }
    } else {
      console.log(`Robot ${this.name} is dead, it won't work`);
    }
  }

  decreaseBattery() {
    let intervalID = setInterval(() => {
      if (this.battery > 0) {
        this.battery--;
      }
      if (this.battery === 10) {
        console.log(`${this.name}: I'm running out of battery`);
      }
      if (this.battery === 0) {
        console.log(`${this.name}: I'm dead`);
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
