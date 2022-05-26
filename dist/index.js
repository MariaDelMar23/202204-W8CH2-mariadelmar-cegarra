"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robotUtils_1 = require("./utils/robotUtils");
const robots = [
    (0, robotUtils_1.createRobot)("Cleaner"),
    (0, robotUtils_1.createRobot)("Developer"),
    (0, robotUtils_1.createRobot)("Waiter"),
];
console.log((0, robotUtils_1.addRobotNotRepeated)("Developer", robots));
const robot1 = (0, robotUtils_1.createRobot)("Developer");
robots[1].work();
setTimeout(() => {
    robots[2].reset();
    console.log(robots[2]);
}, 7000);
setTimeout(() => {
    robots[0].work();
}, 17000);
