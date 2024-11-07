// Function to toggle the language bar display
// Dropdown example
function toggleDropdown() {
  let dropdownContent = document.getElementById("dropdownContent");
  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "block";
    document.addEventListener("click", closeDropdownOnClickOutside);
  } else {
    dropdownContent.style.display = "none";
    document.removeEventListener("click", closeDropdownOnClickOutside);
  }
}

// Close the dropdown if the user clicks outside of it
function closeDropdownOnClickOutside(event) {
  let dropdownContent = document.getElementById("dropdownContent");
  let dropdown = document.getElementById("languageDropdown");
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = "none";
    document.removeEventListener("click", closeDropdownOnClickOutside);
  }
}
// End Dropdown example

function translateTo(language) {
  let currentUrl = window.location.href;
  currentUrl = currentUrl.split("/");
  // Check if the URL has the language part
  if (currentUrl.length > 3) {
    currentUrl[3] = language;
  }
  // Join the modified URL parts back together
  currentUrl = currentUrl.join("/");

  window.location.href = currentUrl;
}
