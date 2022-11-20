async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}



function addUser() {
    users.push('John');
    backend.setItem('users', JSON.stringify(users));
}



function addUser() {
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')




    users.push({ name: name.value, email: email.value, password: password.value })
    // await saveToBackendSignUps();
    backend.setItem('users', JSON.stringify(users));
    window.location.href = 'login.html?msg=You have successfully registered'
}