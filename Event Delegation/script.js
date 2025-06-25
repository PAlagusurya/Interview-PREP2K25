const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const spanEl = e.target.closest("SPAN");
  if (spanEl) {
    window.location.href = "/" + spanEl.classList[0];
  }
});

const containerEl = document.querySelector(".modalContainer");
const modalButton = document.querySelector(".modalButton");
modalButton.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(status) {
  containerEl.style.display = status ? "flex" : "none";
}

containerEl.addEventListener("click", (e) => {
  if (e.target.className === "modalContainer") toggleModal(false);
});
