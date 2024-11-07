const retValue = document.cookie;
let cur = window.location.href;

function toggleDropdown1() {
  let dropdownContent1 = document.getElementById("dropdownContent1");
  if (
    dropdownContent1.style.display === "none" ||
    dropdownContent1.style.display === ""
  ) {
    dropdownContent1.style.display = "block";
    document.addEventListener("click", closeDropdownOnClickOutside1);
  } else {
    dropdownContent1.style.display = "none";
    document.removeEventListener("click", closeDropdownOnClickOutside1);
  }
}

// Close the dropdown if the user clicks outside of it
function closeDropdownOnClickOutside1(event) {
  let dropdownContent1 = document.getElementById("dropdownContent1");
  let dropdown = document.getElementById("settingDropdown");
  if (!dropdown.contains(event.target)) {
    dropdownContent1.style.display = "none";
    document.removeEventListener("click", closeDropdownOnClickOutside1);
  }
}

if (retValue) {
  const joinButton = document.getElementById("joinButton");
  let set = document.getElementById("set")
    // console.log(retValue);
    joinButton.innerHTML = "";
    if (cur.includes("/en")) {
      set.innerHTML = `
    <div id="settingDropdown" class="settingDropdown">
      <button class="joins" onclick="toggleDropdown1()">
        <i id="img" class="material-icons">account_circle</i>      
      </button>
      <div id="dropdownContent1" class="dropdown-content-profile">
          <button class="item" onclick="openHtml('profile')">Account</button>
          <button class="item" onclick="openHtml('purchase')">Purchase history</button>
          <button class="item item_for_a" onclick="logout()">Log out</button>
      </div>
    </div>
    `;
    }
    if (cur.includes("/fr")) {
      set.innerHTML = `
    <div id="settingDropdown" class="settingDropdown">
      <button class="joins" onclick="toggleDropdown1()">
        <i id="img" class="material-icons">account_circle</i>      
      </button>
      <div id="dropdownContent1" class="dropdown-content-profile">
          <button class="item" onclick="openHtml('profile')">Compte</button>
          <button class="item" onclick="openHtml('purchase')">Historique d'achat</button>
          <button class="item item_for_a" onclick="logout()">Se déconnecter</button>
      </div>
    </div>
    `;
    }
    if (cur.includes("/ge")) {
      set.innerHTML = `
    <div id="settingDropdown" class="settingDropdown">
      <button class="joins" onclick="toggleDropdown1()">
        <i id="img" class="material-icons">account_circle</i>      
      </button>
      <div id="dropdownContent1" class="dropdown-content-profile">
          <button class="item" onclick="openHtml('profile')">Konto</button>
          <button class="item" onclick="openHtml('purchase')">Kaufhistorie</button>
          <button class="item item_for_a" onclick="logout()">Ausloggen</button>
      </div>
    </div>
    `;
    }
    if (cur.includes("/ru")) {
      set.innerHTML = `
    <div id="settingDropdown" class="settingDropdown">
      <button class="joins" onclick="toggleDropdown1()">
        <i id="img" class="material-icons">account_circle</i>      
      </button>
      <div id="dropdownContent1" class="dropdown-content-profile">
          <button class="item" onclick="openHtml('profile')">Акаунт</button>
          <button class="item" onclick="openHtml('purchase')">История Покупок</button>
          <button class="item item_for_a" onclick="logout()">Выход</button>
      </div>
    </div>
    `;
    }
}

function logout() {
  let curloc = window.location.href;
  document.cookie += '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  // console.log(retValue);
  // curloc.split()
  let baseUrl = curloc.substring(0, curloc.lastIndexOf('/'));
  console.log(baseUrl);
  if (curloc.includes("profile.html") || curloc.includes("purchase.html")) {
    window.location.href = "index.html";
    return;
  } else {
    window.location.href = baseUrl;
  }
  // location.reload();
}

function openHtml(url) {
  window.location.href = url + ".html";
}
