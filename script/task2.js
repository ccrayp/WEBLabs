function ClickSt(star) {
    const array = document.querySelectorAll('.st')
    const index = Array.prototype.indexOf.call(array, star)
    array.forEach((st) => {
        if(Array.prototype.indexOf.call(array, st) <= index)
            st.classList.add('selected')
        else 
            st.classList.remove('selected')
    })
}

function showWindow() {
    document.getElementById('rating').style.display = 'block'
    document.getElementById('show').style.display = 'none'
    document.getElementById('hide').style.display = 'block'

}

function hideWindow() {
    document.getElementById('rating').style.display = 'none'
    document.getElementById('show').style.display = 'block'
    document.getElementById('hide').style.display = 'none'
    resetStars()
}

function resetStars() {
    const array = document.querySelectorAll('.st')
    array.forEach((st) => { 
        st.classList.remove('selected')
    })
}