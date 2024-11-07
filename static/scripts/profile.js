// document.addEventListener('DOMContentLoaded', function () {
//        loadUserInfo();

//      document.querySelector('button[onclick="editUserInfo"]').addEventListener('click', editUserInfo);
//     document.querySelector('button[onclick="saveUserInfo"]').addEventListener('click', saveUserInfo);
// });

document.addEventListener('DOMContentLoaded', function () {
    // Load user info when the DOM is fully loaded
    loadUserInfo();

    // Add event listeners for edit and save buttons
    const editButton = document.querySelector('.edit');
    const saveButton = document.querySelector('.save');
    
    if (editButton && saveButton) {
        editButton.addEventListener('click', editUserInfo);
        saveButton.addEventListener('click', saveUserInfo);
    } else {
        console.error('Edit or save button not found.');
    }
});

function loadUserInfo() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedCardNumber = localStorage.getItem('cardnumber');

    document.getElementById('username').value = storedUsername || 'Name';
    document.getElementById('email').value = storedEmail || 'Name@mail.ru';
    document.getElementById('cardnumber').value = storedCardNumber || '1234567890000000';
}

function editUserInfo() {
    document.querySelectorAll('#userInfoForm input').forEach(input => {
        input.removeAttribute('readonly');
        input.readOnly = false;
    });
    document.getElementById('username').focus();
    document.getElementById('username').select();
    document.querySelector('button[onclick="editUserInfo"]').style.display = 'none';
    document.querySelector('button[onclick="saveUserInfo"]').style.display = 'block';
}

function saveUserInfo() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardnumber').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('cardnumber', cardNumber);

    document.querySelectorAll('#userInfoForm input').forEach(input => {
        input.readOnly = true;
    });
    document.querySelector('button[onclick="editUserInfo"]').style.display = 'block';
    document.querySelector('button[onclick="saveUserInfo"]').style.display = 'none';
    alert('Changes saved!');
} 
//load the new info after enter the page

loadUserInfo();

