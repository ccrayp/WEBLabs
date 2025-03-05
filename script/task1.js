function checkPassword() {
    const pass1 = document.getElementById('pass1')
    const pass2 = document.getElementById('pass2')
    const pass2mark = document.getElementById('pass2mark')

    if (pass1.value === pass2.value && pass1.value != '' && pass2.value != '') {
        pass1.setAttribute("style", "background-color: rgb(214, 255, 214);border-color: rgb(105, 240, 105);")
        pass2.setAttribute("style", "background-color: rgb(214, 255, 214);border-color: rgb(105, 240, 105);")
        pass2mark.innerHTML = "&#10004"
    }
    else {
        pass1.setAttribute("style", "background-color: rgb(255, 225, 225);border-color: rgb(255, 98, 98);")
        pass2.setAttribute("style", "background-color: rgb(255, 225, 225);border-color: rgb(255, 98, 98);")
        pass2mark.innerHTML = "&#10060"
    }
}

function checkLogin() {
    const login = document.getElementById('login')
    if (login.value !== '') {
        login.setAttribute("style", "background-color: rgb(214, 255, 214);border-color: rgb(105, 240, 105);")
    }
    else {
        login.setAttribute("style", "background-color: rgb(255, 225, 225);border-color: rgb(255, 98, 98);")
    }
}