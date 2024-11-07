var board = document.getElementById("board");
var isScrolling;
// Event listener for scrolling
window.addEventListener("scroll", function () {
  clearTimeout(isScrolling);
  board.style.display = "none"; // Hide the board
  // Set a timeout to show the board after 500 milliseconds if the user doesn't scroll again
  isScrolling = setTimeout(function () {
    board.style.display = "block"; // Show the board
  }, 600); // Adjust the time as needed
});
// Event listener for mouse down on the document
document.addEventListener("mousedown", function () {
  clearTimeout(isScrolling);
  board.style.display = "block"; // Show the board when the user interacts with the scrollbar
});
// Show the board initially when the page loads
document.addEventListener("DOMContentLoaded", function () {
  board.style.display = "block";
});

function payment() {
    window.location.href = "payment_page.html"
}




