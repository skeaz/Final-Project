let dropbtn = document.getElementById("dropbtn");
let dropdown = document.getElementById("dropdown-content2");
let isOpen = false;

dropbtn.addEventListener("click", () => {
  if (isOpen === true) {
    dropdown.style.display = "none"; // Close the dropdown
  } else {
    dropdown.style.display = "block"; // Open the dropdown
  }
  isOpen = !isOpen; // Toggle the isOpen flag
});