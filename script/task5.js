const images = ['../img/task5_1.jpg', '../img/task5_2.jpg', '../img/task5_3.jpg', '../img/task5_4.jpg', '../img/task5_5.jpg']
let k = 0

function change() {
    document.getElementById('img0').src = images[k++ % 5]
}

change()
