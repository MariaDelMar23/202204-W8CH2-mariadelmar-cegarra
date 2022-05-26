"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRobotNotRepeated = exports.checkRobotRepeated = exports.createRobot = void 0;
const robot_1 = require("../types/robot");
const createRobot = (type) => {
    return new robot_1.Robot(type);
};
exports.createRobot = createRobot;
const checkRobotRepeated = (newRobot, robots) => {
    const repeatedRobot = robots.filter((robot) => newRobot.name === robot.name);
    return repeatedRobot === [] ? false : true;
};
exports.checkRobotRepeated = checkRobotRepeated;
const addRobotNotRepeated = (type, robots) => {
    let newRobot = (0, exports.createRobot)(type);
    while (!(0, exports.checkRobotRepeated)(newRobot, robots)) {
        newRobot = (0, exports.createRobot)(type);
    }
    robots.push(newRobot);
    return robots;
};
exports.addRobotNotRepeated = addRobotNotRepeated;
