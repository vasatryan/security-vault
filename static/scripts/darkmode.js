document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  
  try {
    
  let footer_texts = document.querySelectorAll(".nav-link");
  let footer_info = document.querySelector(".copyright");
  let footer_line = document.querySelector(".nav");
  let logo_text = document.querySelector(".logo h4");
  let menu_header = document.querySelectorAll(".menu li a");
  let backtranslator = document.querySelector(".dropdown-content");
  if (document.querySelector(".joins")) {
    var joinsColor = document.querySelector(".joins");
  }
  if (document.querySelector(".join")) {
    var joinColor = document.querySelector(".join");
  }
  if (document.querySelector(".dropdown-content-profile")) {
    var backAcc = document.querySelector(".dropdown-content-profile");
  }
  

  const toggle = document.getElementById("toggle");

  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      footer_info.style.color = "";
      footer_line.style.borderColor = "";
      logo_text.style.color = "";
      backtranslator.style.background = "";

      if (document.querySelector(".dropdown-content-profile")) {
        backAcc.style.background = "";
      }

      if (document.querySelector(".joins")) {
        joinsColor.style.background = "";
        joinsColor.style.color = "";
      }

      if (document.querySelector(".join")) {
        joinColor.style.background = "";
        joinColor.style.color = "";
      }

      for (let i = footer_texts.length - 1; i >= 0; i--) {
        footer_texts[i].style.color = "";
        footer_texts[i].style.fontFamily = "";
      }

      for (let i = menu_header.length - 1; i >= 0; i--) {
        menu_header[i].style.color = "";
        menu_header[i].onmouseover = function () {
          menu_header[i].style.color = "";
        };
        menu_header[i].onmouseout = function () {
          menu_header[i].style.color = "";
        };
      }

      toggle.checked = true;
    } else {
      footer_info.style.color = "black";
      footer_line.style.borderColor = "#0D0D0D80";
      logo_text.style.color = "#0D0D0D";
      backtranslator.style.background = "#273375CC";

      if (document.querySelector(".dropdown-content-profile")) {
        backAcc.style.background = "#273375CC";
      }

      if (document.querySelector(".joins")) {
        joinsColor.style.background = "#090F25";
        joinsColor.style.color = "white";
      }

      if (document.querySelector(".join")) {
        joinColor.style.background = "#090F25";
        joinColor.style.color = "white";
      }

      for (let i = footer_texts.length - 1; i >= 0; i--) {
        footer_texts[i].style.color = "#0D0D0DCC";
        footer_texts[i].style.fontFamily = "sans-serif";
      }

      for (let i = menu_header.length - 1; i >= 0; i--) {
        menu_header[i].style.color = "#0D0D0DCC";
        menu_header[i].onmouseover = function () {
          menu_header[i].style.color = "white";
        };
        menu_header[i].onmouseout = function () {
          menu_header[i].style.color = "#0D0D0DCC";
        };
      }

      toggle.checked = false;
    }
  }
  } finally {
    const body = document.getElementById("body");

    const toggle = document.getElementById("toggle");

    function applyTheme6(isDarkMode) {
      if (isDarkMode) {
        body.style.background = "";
      
        toggle.checked = true;

      } else {
        body.style.background =
        "linear-gradient(252.44deg, rgba(246, 166, 254, 0.63) 0%, rgba(78, 191, 255, 0.6) 20%, #4EBFFF 40%, #4EBFFF 60%, rgba(78, 191, 255, 0.6) 80%, rgba(246, 166, 254, 0.63) 100%)";

        toggle.checked = false;
        
      }
  }
}

  if (
    location.pathname === "/en" ||
    location.pathname === "/fr" ||
    location.pathname === "/ge" ||
    location.pathname === "/ru" 
    // location.pathname === "/" 
  ) {
    let backslide = document.querySelectorAll(".card_wrap");
    let infoSlide = document.querySelectorAll(".info");
    let cardName = document.querySelectorAll(".card_name");
    let cardText = document.querySelectorAll(".card_price");
    let cardText2 = document.querySelectorAll(".card ul li");
    let welcomeText = document.querySelector(".welcome p");
    let securityCheck = document.querySelector(".securityCheck h1");
    let discoverUs = document.querySelector(".discoverUs");
    let aboutButton = document.querySelector(".aboutButton");

    const toggle = document.getElementById("toggle");

    function applyTheme1(isDarkMode) {
      if (isDarkMode) {
        welcomeText.style.color = "";
        securityCheck.style.color = "";
        discoverUs.style.background = "";
        discoverUs.style.color = "";
        aboutButton.style.color = "";
        aboutButton.style.border = "";

        aboutButton.onmouseover = function () {
          aboutButton.style.background = "";
        };
        aboutButton.onmouseout = function () {
          aboutButton.style.background = "";
        };

        discoverUs.onmouseover = function () {
          discoverUs.style.background = "";
        };
        discoverUs.onmouseout = function () {
          discoverUs.style.background = "";
        };

        for (let i = cardText.length - 1; i >= 0; i--) {
          cardText[i].style.color = "";
        }
        for (let i = cardText2.length - 1; i >= 0; i--) {
          cardText2[i].style.color = "";
        }
        for (let i = cardName.length - 1; i >= 0; i--) {
          cardName[i].style.color = "";
        }
        for (let i = backslide.length - 1; i >= 0; i--) {
          backslide[i].style.background = "";
        }

        toggle.checked = true;
      } else {
        welcomeText.style.color = "#0D0D0D";
        securityCheck.style.color = "#0D0D0D";
        discoverUs.style.background = "#090F25";
        discoverUs.style.color = "white";
        aboutButton.style.color = "#0D0D0D";
        aboutButton.style.border = "0.5px solid #0D0D0D";

        aboutButton.onmouseover = function () {
          aboutButton.style.background = "#4ebfff";
        };
        aboutButton.onmouseout = function () {
          aboutButton.style.background = "";
        };

        discoverUs.onmouseover = function () {
          discoverUs.style.background = "#3B0C40";
        };
        discoverUs.onmouseout = function () {
          discoverUs.style.background = "#090F25";
        };

        for (let i = infoSlide.length - 1; i >= 0; i--) {
          infoSlide[i].style.color = "#0D0D0D";
        }
        for (let i = cardText2.length - 1; i >= 0; i--) {
          cardText2[i].style.color = "#0D0D0D";
        }
        for (let i = cardText.length - 1; i >= 0; i--) {
          cardText[i].style.color = "#0D0D0D";
        }
        for (let i = backslide.length - 1; i >= 0; i--) {
          backslide[i].style.background = "rgb(75 159 183)";
        }
        for (let i = cardName.length - 1; i >= 0; i--) {
          cardName[i].style.color = "white";
        }

        toggle.checked = false;
      }
    }
  }

  if (
    location.pathname === "/en/purchase" ||
    location.pathname === "/fr/purchase" ||
    location.pathname === "/ge/purchase" ||
    location.pathname === "/ru/purchase"
  ) {
    let productBackground = document.querySelectorAll(".product");
    let productTitle = document.querySelectorAll(".product-info h3");
    let productText = document.querySelectorAll(".product-info p");
    let total = document.querySelector(".total");
    let totalP = document.querySelector(".total p");
    let totalSpan = document.querySelector(".total span");

    function applyTheme2(isDarkMode) {
      if (isDarkMode) {
        total.style.background = "";
        totalP.style.color = "";
        totalSpan.style.color = "";
        total.style.border = "";
        for (let i = productBackground.length - 1; i >= 0; i--) {
          productBackground[i].style.background = "";
          productBackground[i].style.border = "";
        }
        for (let i = productText.length - 1; i >= 0; i--) {
          productText[i].style.color = "";
        }
        for (let i = productTitle.length - 1; i >= 0; i--) {
          productTitle[i].style.color = "";
        }
      } else {
        total.style.background = "rgba(255, 255, 255, 0.8)";
        totalP.style.color = "#0D0D0D";
        totalSpan.style.color = "#0D0D0D";
        total.style.border = "1px solid #0D0D0D";
        for (let i = productBackground.length - 1; i >= 0; i--) {
          productBackground[i].style.background = "#83b4c2";
          productBackground[i].style.border = "1px solid #0D0D0D";
        }
        for (let i = productTitle.length - 1; i >= 0; i--) {
          productTitle[i].style.color = "rgba(13, 13, 13, 1)";
        }
        for (let i = productText.length - 1; i >= 0; i--) {
          productText[i].style.color = "rgba(13, 13, 13, 1)";
        }
      }
    }
  }

  if (
    location.pathname === "/en/contact_us" ||
    location.pathname === "/fr/contact_us" ||
    location.pathname === "/ge/contact_us" ||
    location.pathname === "/ru/contact_us"
  ) {
    let contactH2 = document.querySelectorAll(".contact-h2");
    let preAbout = document.querySelector(".pre-about");
    let about = document.querySelector(".about");
    let contactTop = document.querySelector(".contact-top");
    let contactEmail = document.querySelector(".contact-email");
    let contactButton = document.querySelector(".contact-button");
    let contactInput = document.querySelectorAll(".contact-input");

    const toggle = document.getElementById("toggle");

    function applyTheme3(isDarkMode) {
      if (isDarkMode) {
        for (let i = contactH2.length - 1; i >= 0; i--) {
          contactH2[i].style.color = "";
        }
        for (let i = contactInput.length - 1; i >= 0; i--) {
          contactInput[i].style.border = "";
        }
        preAbout.style.color = "";
        about.style.color = "";
        contactTop.style.background = "";
        contactTop.style.border = "";
        contactEmail.style.color = "";
        contactButton.style.background = "";
        contactButton.style.color = "";

        toggle.checked = true;
      } else {
        for (let i = contactH2.length - 1; i >= 0; i--) {
          contactH2[i].style.color = "black";
        }
        for (let i = contactInput.length - 1; i >= 0; i--) {
          contactInput[i].style.border = "1px solid black";
        }
        preAbout.style.color = "black";
        about.style.color = "black";
        contactTop.style.background = "rgba(238, 191, 243, 0.5)";
        contactTop.style.border = "1px solid #EEBFF3";
        contactEmail.style.color = "black";
        contactButton.style.background = "rgba(9, 15, 37, 1)";
        contactButton.style.color = "white";

        toggle.checked = false;
      }
    }
  }

  if (
    location.pathname === "/en/about" ||
    location.pathname === "/fr/about" ||
    location.pathname === "/ge/about" ||
    location.pathname === "/ru/about"
  ) {
    let backAbout = document.querySelector(".container");
    let aboutHeading = document.querySelectorAll(".about-heading");
    let aboutParagraph = document.querySelectorAll(".about-paragraph");
    let memberFullname = document.querySelectorAll(".member-fullname");
    let memberPosition = document.querySelectorAll(".member-position");

    const toggle = document.getElementById("toggle");

    function applyTheme4(isDarkMode) {
      if (isDarkMode) {
        backAbout.style.background = "";

        for (let i = aboutHeading.length - 1; i >= 0; i--) {
          aboutHeading[i].style.color = "";
        }

        for (let i = aboutParagraph.length - 1; i >= 0; i--) {
          aboutParagraph[i].style.color = "";
        }

        for (let i = memberFullname.length - 1; i >= 0; i--) {
          memberFullname[i].style.color = "";
        }

        for (let i = memberPosition.length - 1; i >= 0; i--) {
          memberPosition[i].style.color = "";
        }

        toggle.checked = true;
      } else {
        backAbout.style.background = "#EEBFF338";

        for (let i = aboutHeading.length - 1; i >= 0; i--) {
          aboutHeading[i].style.color = "#0D0D0D";
        }

        for (let i = aboutParagraph.length - 1; i >= 0; i--) {
          aboutParagraph[i].style.color = "#0D0D0D";
        }

        for (let i = memberFullname.length - 1; i >= 0; i--) {
          memberFullname[i].style.color = "#0D0D0D";
        }

        for (let i = memberPosition.length - 1; i >= 0; i--) {
          memberPosition[i].style.color = "#0D0D0D";
        }

        toggle.checked = false;
      }
    }
  }

  if (
    location.pathname === "/en/faq" ||
    location.pathname === "/fr/faq" ||
    location.pathname === "/ge/faq" ||
    location.pathname === "/ru/faq"
  ) {
    let questionContainer = document.querySelectorAll(".question-details");
    let questionText = document.querySelectorAll(".question-summary");
    let expandMore = document.querySelectorAll(".expand-more");
    let answerP = document.querySelectorAll(".question-details div");

    const toggle = document.getElementById("toggle");

    function applyTheme5(isDarkMode) {
      if (isDarkMode) {
        for (let i = questionContainer.length - 1; i >= 0; i--) {
          questionContainer[i].style.background = "";
          questionContainer[i].style.border = "";
        }

        for (let i = questionText.length - 1; i >= 0; i--) {
          questionText[i].style.color = "";
        }
        for (let i = expandMore.length - 1; i >= 0; i--) {
          expandMore[i].style.color = "";
        }
        for (let i = answerP.length - 1; i >= 0; i--) {
          answerP[i].style.color = "";
        }

        toggle.checked = true;
      } else {
        for (let i = questionContainer.length - 1; i >= 0; i--) {
          questionContainer[i].style.background = "#EEBFF380";
          questionContainer[i].style.border = "1px solid #0D0D0D";
        }

        for (let i = questionText.length - 1; i >= 0; i--) {
          questionText[i].style.color = "#0D0D0D";
        }
        for (let i = expandMore.length - 1; i >= 0; i--) {
          expandMore[i].style.color = "#0D0D0D";
        }
        for (let i = answerP.length - 1; i >= 0; i--) {
          answerP[i].style.color = "#0D0D0D";
        }

        toggle.checked = false;
      }
    }
  }



  if (savedTheme === "dark" || savedTheme === null) {
    try {
      applyTheme(true);
    } catch {

    }

    applyTheme6(true);


    if (
      location.pathname === "/en" ||
      location.pathname === "/fr" ||
      location.pathname === "/ge" ||
      location.pathname === "/ru"
    ) {
      applyTheme1(true);
    }

    if (
      location.pathname === "/en/contact_us" ||
      location.pathname === "/fr/contact_us" ||
      location.pathname === "/ge/contact_us" ||
      location.pathname === "/ru/contact_us"
    ) {
      applyTheme3(true);
    }

    if (
      location.pathname === "/en/about" ||
      location.pathname === "/fr/about" ||
      location.pathname === "/ge/about" ||
      location.pathname === "/ru/about"
    ) {
      applyTheme4(true);
    }

    if (
      location.pathname === "/en/faq" ||
      location.pathname === "/fr/faq" ||
      location.pathname === "/ge/faq" ||
      location.pathname === "/ru/faq"
    ) {
      applyTheme5(true);
    }

    if (
      location.pathname === "/en/purchase" ||
      location.pathname === "/fr/purchase" ||
      location.pathname === "/ge/purchase" ||
      location.pathname === "/ru/purchase"
    ) {
      applyTheme2(true);
    }
  } else {
    try {
      applyTheme(false);
    } catch {

    }

    applyTheme6(false);

    if (
      location.pathname === "/en" ||
      location.pathname === "/fr" ||
      location.pathname === "/ge" ||
      location.pathname === "/ru"
    ) {
      applyTheme1(false);
    }

    if (
      location.pathname === "/en/contact_us" ||
      location.pathname === "/fr/contact_us" ||
      location.pathname === "/ge/contact_us" ||
      location.pathname === "/ru/contact_us"
    ) {
      applyTheme3(false);
    }

    if (
      location.pathname === "/en/about" ||
      location.pathname === "/fr/about" ||
      location.pathname === "/ge/about" ||
      location.pathname === "/ru/about"
    ) {
      applyTheme4(false);
    }

    if (
      location.pathname === "/en/faq" ||
      location.pathname === "/fr/faq" ||
      location.pathname === "/ge/faq" ||
      location.pathname === "/ru/faq"
    ) {
      applyTheme5(false);
    }

    if (
      location.pathname === "/en/purchase" ||
      location.pathname === "/fr/purchase" ||
      location.pathname === "/ge/purchase" ||
      location.pathname === "/ru/purchase"
    ) {
      applyTheme2(false);
    }
  }

  toggle.addEventListener("change", function () {
    const isDarkMode = toggle.checked;

    try{
      applyTheme(isDarkMode);
    } catch {
      
    }

    applyTheme6(isDarkMode);

    if (
      location.pathname === "/en" ||
      location.pathname === "/fr" ||
      location.pathname === "/ge" ||
      location.pathname === "/ru"
    ) {
      applyTheme1(isDarkMode);
    }

    if (
      location.pathname === "/en/contact_us" ||
      location.pathname === "/fr/contact_us" ||
      location.pathname === "/ge/contact_us" ||
      location.pathname === "/ru/contact_us"
    ) {
      applyTheme3(isDarkMode);
    }

    if (
      location.pathname === "/en/about" ||
      location.pathname === "/fr/about" ||
      location.pathname === "/ge/about" ||
      location.pathname === "/ru/about"
    ) {
      applyTheme4(isDarkMode);
    }

    if (
      location.pathname === "/en/faq" ||
      location.pathname === "/fr/faq" ||
      location.pathname === "/ge/faq" ||
      location.pathname === "/ru/faq"
    ) {
      applyTheme5(isDarkMode);
    }

    if (
      location.pathname === "/en/purchase" ||
      location.pathname === "/fr/purchase" ||
      location.pathname === "/ge/purchase" ||
      location.pathname === "/ru/purchase"
    ) {
      applyTheme2(isDarkMode);
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
