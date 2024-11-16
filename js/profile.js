console.clear();

const checkbox = document.querySelector(`[data-js="toggle"]`);
const body = document.body;
const toggleHeading = document.querySelector(`[data-js="toggle-heading"]`);

checkbox.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleHeading.textContent = "Light mode";
  } else {
    toggleHeading.textContent = "Dark mode";
  }
});
