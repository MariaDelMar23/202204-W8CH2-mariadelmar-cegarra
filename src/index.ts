import { addRobotNotRepeated, createRobot } from "./utils/robotUtils";

const robots = [
  createRobot("Cleaner"),
  createRobot("Developer"),
  createRobot("Waiter"),
];
console.log(addRobotNotRepeated("Developer", robots));
const robot1 = createRobot("Developer");
robots[1].work();

setTimeout(() => {
  robot1.work();
  console.log("Robot is dead, it won't work");
}, 17000);

setTimeout(() => {
  robots[2].reset();
  console.log(robots[2]);
}, 7000);
