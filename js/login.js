
const urlParams = new URLSearchParams(window.location.search)
const msg = urlParams.get('msg');
const msgBox = document.getElementById('msg')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkBox = document.getElementById('accept')
const forgotbtn = document.getElementById('forgotPasswordLink')
// let UserEmail = '';
// let UserPassword = '';

forgotbtn.addEventListener('click', function () {
  window.location.href = "../html/forgot-password.html"
})



if (msg) {
  msgBox.innerHTML = msg;
} else {
  msgBox.classList.add('d-none')
}

async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem('users')) || [];
}

// Checks if the Conditions are true when its true it will safe the data in the form
if (localStorage.userEmail && localStorage.userPassword && localStorage.checkBox !== "") {
  checkBox.setAttribute("checked", "checked");
  email.value = localStorage.userEmail
  password.value = localStorage.userPassword
}


// const rememberUser = function () {
//   let savedUser = JSON.stringify(UserEmail);
//   let savedPassword = JSON.stringify(UserPassword)
//   localStorage.setItem.toString('UserEmail', savedUser)
//   localStorage.setItem.toString('UserPassword', savedPassword)
//   email.value = savedUser;
//   password.value = savedPassword;
// }

function login() {

  let user = users.find(u => u.email == email.value && u.password == password.value)
  if (user) {
    console.log('User Gefunden')
    window.location.href = '../html/summary.html'
    if (checkBox.checked) {
      localStorage.userEmail = email.value
      localStorage.userPassword = password.value
      localStorage.checkbox = checkBox.value;
      // UserEmail.push(email.value)
      // UserPassword.push(password.value)
      // rememberUser(UserEmail, UserPassword)
    } else {
      localStorage.clear()
    }
  }
}



