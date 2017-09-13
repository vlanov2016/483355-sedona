var link = document.querySelector(".button-form-status");
var popup = document.querySelector(".modal-search");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-close")) {
    popup.classList.remove("modal-close");
    popup.classList.add("modal-show");
  }
  else {
    popup.classList.add("modal-close");
  };
});
