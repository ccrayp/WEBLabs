function check() {
    const task1 = document.querySelectorAll('input[name="root"]')
    const task2 = document.querySelectorAll('input[name="points"]')

    let k = 0
    if (task1[0].checked) k++
    if (task2[0].checked) k++

    document.getElementById('answQ').innerHTML = k
}

function reset() {
    document.querySelectorAll('input[type="radio"]').forEach(btn => {
        btn.checked = false;
    })
    
    document.getElementById('answQ').innerHTML = 0
}