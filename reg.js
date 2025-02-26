function compare() {
    const firstPasswordField = document.getElementById("firstPassword")
    const secondPasswordField = document.getElementById("secondPassword")
    if (firstPasswordField.value == secondPasswordField.value) {
        firstPasswordField.setAttribute("style", "border-color: #4CAF50; background-color: #E8F5E9;")
        secondPasswordField.setAttribute("style", "border-color: #4CAF50; background-color: #E8F5E9;")
    }
    else {
        firstPasswordField.setAttribute("style", "border-color: #F44336; background-color: #FFEBEE;")
        secondPasswordField.setAttribute("style", "border-color: #F44336; background-color: #FFEBEE;")
    }
}