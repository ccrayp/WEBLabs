function check() {
    let k = 0
    answers = document.querySelectorAll('input[type="radio"]:checked').forEach((btn) => { 
        if (btn.id == 'right') k++
    })
    document.getElementById('answQ').innerHTML = k
}

function reset() {
    document.querySelectorAll('input[type="radio"]').forEach(btn => {
        btn.checked = false;
    })
    
    document.getElementById('answQ').innerHTML = 0
}