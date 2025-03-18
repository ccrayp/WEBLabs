function greeting() {
    let username = findData('username');
    let password = findData('password');

    if (username) {
        document.querySelector('input[type=text]').value = username;
        if (password) {
            document.querySelector('input[type=password]').value = password;
        }
        document.getElementById("greeting").innerHTML = "Привет, " + username + "!";
    }
}

function setUsername() {
    const username = document.getElementById("username").value;
    console.log(username)
    const expires = new Date(Date.now() + 60 * 1000).toUTCString();

    document.cookie = `username=${username}; expires=${expires}; path=/`;
}

function setPassword() {
    const password = document.getElementById("password").value;
    console.log(password)
    const expires = new Date(Date.now() + 60 * 1000).toUTCString();

    document.cookie = `password=${password}; expires=${expires}; path=/`;
}

function findData(cookieName) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === cookieName) {
            return value;
        }
    }
    return null;
}
