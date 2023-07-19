import {username, height, weight} from "./bmi_calculator.js";
import IMask from "/node_modules/imask/esm/index.js";

let maskOptions = {
  maskHeight: '0.00',
  maskWeight: '000'
};

let maskHeight = IMask(height, maskOptions.maskHeight);
let maskWeight = IMask(weight, maskOptions.maskWeight);
