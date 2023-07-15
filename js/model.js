import { submit } from "./element.js";

export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  btnCloser: document.querySelector(".closer"),
  message: document.querySelector(".modal h2 span"),

  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
    this.message.innerText = "Seu IMC é de";
  }
};

Modal.btnCloser.onclick = () => {
  Modal.close();
  submit.removeAttribute("disabled", "disabled");
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.close();
  }
});
