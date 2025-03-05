function checkAnswer(variant, index, questionClass) {
    const array = document.querySelectorAll(questionClass)
    reset(array)
    variant.classList.remove('none')
    if (array[index] === variant) {
        variant.classList.add('right')
    }
    else {
        variant.classList.add('wrong')
    }
}

function reset(array) {
    array.forEach((el) => {
        el.classList.remove('right')
        el.classList.remove('wrong')
        el.classList.add('none')
    });
}

function resetAll() {
    const array1 = document.querySelectorAll('.q1')
    reset(array1)
    const array2 = document.querySelectorAll('.q2')
    reset(array2)
}