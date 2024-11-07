document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".question-details");

  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Close all other FAQ items except the clicked one
      faqItems.forEach(function (faq) {
        if (faq !== item && faq.open) {
          faq.open = false;
        }
      });
    });
  });
});
