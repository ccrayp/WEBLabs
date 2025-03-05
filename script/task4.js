function check() {
    let k = 0
    if (document.querySelectorAll('input[name="root"]')[0].checked) k++
    if (document.querySelectorAll('input[name="points"]')[0].checked) k++

    document.getElementById('answQ').innerHTML = k
}

function reset() {
    document.querySelectorAll('input[type="radio"]').forEach(btn => {
        btn.checked = false;
    })
    
    document.getElementById('answQ').innerHTML = 0
}