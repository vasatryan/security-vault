// Event listener for scrolling
function validateAndSubmit() {
  let done = false;
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const date = document.getElementById("date").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const name = document.getElementById("name").value.trim();
  const payment_error = document.getElementById("payment_error");

  // Check for empty fields
  if (cardNumber === "" || date === "" || cvv === "" || name === "") {
    payment_error.textContent = "Please make sure to fill in all fields!";
    return;
  }

  // Check for valid card number
  const validCard = /^(?:\d{15}|\d{16})$/.test(cardNumber);
  if (!validCard) {
    payment_error.textContent = "Enter appropriate card number";
    return;
  }

  // Check for valid date
  const validDate = /^(0[1-9]|1[0-2])\/\d{4}$/.test(date);
  if (!validDate) {
    payment_error.textContent = "Enter appropriate date (MM/YYYY)";
    return;
  }

  // Reset error message
  payment_error.textContent = "";

  // If all validations pass, proceed with payment and redirect
  // alert('Payment is done!');
  done = true;
  const popup = document.getElementById("popup");
  const payment2 = document.getElementById("payment2");
  if (done) {
    popup.classList.remove("hidden");
    payment2.style.display = "none";
  }
  // window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", function () {
  const buyButton = document.getElementById("buyButton");
  buyButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the button
    openPopup(); // Call the openPopup() function instead
  });
});

function openPopup() {
  fetch("payment_page.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("popupContainer").innerHTML = html;
      document.getElementById("popupContainer").style.display = "block";
    });
}

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}



