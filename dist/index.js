"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robot_1 = require("./types/robot");
const paca = new robot_1.default("Cleaner");
console.log(paca);
paca.work();
