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
  robots[2].reset();
  console.log(robots[2]);
}, 7000);

setTimeout(() => {
  robots[0].work();
}, 110000);
