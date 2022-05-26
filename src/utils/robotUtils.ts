import { Robot, Type } from "../types/robot";

export const createRobot = (type: Type): Robot => {
  return new Robot(type);
};

export const checkRobotRepeated = (
  newRobot: Robot,
  robots: Robot[]
): boolean => {
  const repeatedRobot = robots.filter((robot) => newRobot.name === robot.name);
  return repeatedRobot === [] ? false : true;
};

export const addRobotNotRepeated = (type: Type, robots: Robot[]): Robot[] => {
  let newRobot = createRobot(type);
  while (!checkRobotRepeated(newRobot, robots)) {
    newRobot = createRobot(type);
  }
  robots.push(newRobot);
  return robots;
};
