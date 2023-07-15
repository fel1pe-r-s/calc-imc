import { AlertError } from "./alertError.js";
import { inputHeight, inputWeight } from "./element.js";
import { Modal } from "./model.js";

export function notNumber(value) {
  return isNaN(value) || value === "";
}

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function displayResultMessage(imcResult) {
  Modal.open();
  Modal.message.innerText = `${Modal.message.innerText}  ${imcResult}`;
}
export function onInputEvent() {
  inputWeight.oninput = () => AlertError.close();
  inputHeight.oninput = () => AlertError.close();
}
