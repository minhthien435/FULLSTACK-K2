// javascript module
// commonJs ==> Nodejs
// ES6 module
import {PI,add, getHeartRate, getHumi} from '../module/mathUtils.js'
console.log(add(5,PI));

import logInfo,{logError} from '../module/mathUtils.js'
logInfo("Don o dia chua ?");
logError("Khong co quyen truy cap vao o dia");

import * as Sensor from '../module/mathUtils.js'
console.log(Sensor.getHeartRate());
console.log(Sensor.getHumi());
console.log(Sensor.getTemp());