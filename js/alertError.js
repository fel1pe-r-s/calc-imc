export const AlertError = {
  element: document.querySelector(".alert-error"),

  open() {
    AlertError.element.classList.add("open");
    setTimeout(() => {
      this.close();
    }, 2000);
  },
  close() {
    AlertError.element.classList.remove("open");
  }
};
