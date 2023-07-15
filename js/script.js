import { AlertError } from "./alertError.js";
import { inputWeight, forms, inputHeight, submit } from "./element.js";
import {
  calculateIMC,
  displayResultMessage,
  notNumber,
  onInputEvent
} from "./utils.js";

onInputEvent();
forms.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  const imcResult = calculateIMC(weight, height);
  displayResultMessage(imcResult);

  submit.setAttribute("disabled", "disabled");
};
