const toggleButton = document.getElementById("toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleButton.textContent = "تفعيل وضع الليل";
  } else {
    body.classList.add("dark");
    toggleButton.textContent = "تفعيل وضع النهار";
  }
});