function fill() {
    document.querySelector('#squareInPackage').value = Number(localStorage.getItem('squareInPackage'))
    document.querySelector('#direction').value = localStorage.getItem('direction')
}

function saveSquareInPackage() {
    localStorage.setItem('squareInPackage', document.querySelector('#squareInPackage').value)
}

function saveRoomSquare() {
    localStorage.setItem('roomSquare', document.querySelector('#roomSquare').value)
}

function saveRoomWidth() {
    localStorage.setItem('roomWidth', document.querySelector('#roomWidth').value)
}

function saveRoomLenght() {
    localStorage.setItem('roomLenght', document.querySelector('#roomLenght').value)
}

function saveDirection() {
    localStorage.setItem('direction', document.querySelector('#direction').value) 
}

function onSquareShow() {
    document.querySelector('#modal').innerHTML = `
    <div>
        <h3>Количество квадратных метров</h3>
        <input
        class="form-control"
        type="text"
        id="roomSquare"
        placeholder="Введите площадь"
        onblur="saveRoomSquare()"
        />
    </div>
    `
    document.querySelector('#roomSquare').value = localStorage.getItem('roomSquare')
}

function onSizeShow() {
    document.querySelector('#modal').innerHTML = `
    <div>
        <h3>Ширина помещения</h3>
        <input
        class="form-control"
        type="text"
        id="roomWidth"
        placeholder="Введите ширину"
        onblur="saveRoomWidth()"
        />
        <h3 class="mt-3">Длина помещения</h3>
        <input
        class="form-control"
        type="text"
        id="roomLenght"
        placeholder="Введите длину"
        onblur="saveRoomLenght()"
        />
    </div>
    `
    document.querySelector('#roomWidth').value = localStorage.getItem('roomWidth')
    document.querySelector('#roomLenght').value = localStorage.getItem('roomLenght')
}

function calculate() {
    let result = 0.0
    let roomSquare = 0.0
    if (document.querySelector('#onSize').checked)
        roomSquare = Number(document.querySelector('#roomWidth').value) * Number(document.querySelector('#roomLenght').value)
    else if (document.querySelector('#onSquare').checked)
        roomSquare = Number(document.querySelector('#roomSquare').value)

    const squareInPackage = Number(document.querySelector('#squareInPackage').value)
    result = roomSquare / squareInPackage 

    const method = document.querySelector('#direction').value
    if (method === 'По ширине комнаты' || method === 'По длине комнаты')
        result += result * 0.05
    else if (method === 'Под углом 45 градусов')
        result += result * 0.15


    document.querySelector('#result').innerHTML=`Вам потребуется ${result} упаковок`
}

// {      const selected= document.getElementsByName('paint');   
//       const inputFields = document.getElementById('inputFields');
//       const inputWals = document.getElementById('inputWals');
     
//       selected.forEach(choiceItem => {
//             choiceItem.addEventListener('click', () => show(choiceItem.value));
//         })
//         function  show(radio_value) { 
//             document.getElementById('result').innerText='';
//             inputFields.innerHTML = ''; // Очищаем предыдущие поля ввода
//             inputWals.innerHTML = '';
//        if (radio_value === 'ceiling') {
//         inputFields.innerHTML = `
//             <h2>Окраска потолка</h2>
//             <div class="form-group">
//             <label for="ceilingLength">Длина потолка (м):</label>
//             <input type="number" id="ceilingLength" min="0" required>
//             </div>
//             <div class="form-group mt-3">
//             <label for="ceilingWidth">Ширина потолка (м):</label>
//             <input type="number" id="ceilingWidth" min="0" required>
//             </div>
//         `;
//     } else {
//         inputFields.innerHTML = `
//             <h2>Окраска стен</h2>
//              <div class="form-group">
//             <label for="numberOfWalls">Количество стен:</label>
//             <input type="number" id="numberOfWalls" min="1" required onchange="calcWals(this.value);">
//             </div>
            
//         `;
//     }
// };

// function  calcWals(num){
    
//     var i=1;
//     for (var i = 1; i <= num; i++) {
//         inputWals.innerHTML = inputWals.innerHTML+`
//          <div class="form-group mt-3 pt-3"> 
//         <label for="wallLength">Длина стены ${i} (м):</label>
//         <input type="number" id="wallLength" min="0" required>
        
//         <label for="wallHeight">Высота стены ${i} (м):</label>
//         <input type="number" id="wallHeight" min="0" required>
//         </div>
//         `
//      }
// }

// document.getElementById('calculate').addEventListener('click', function() {
//     const paintType = document.querySelector('input[name="paint"]:checked').value;
//     const inputwallHeight = document.querySelectorAll('#wallHeight');
//     const inputwallLength = document.querySelectorAll('#wallLength');

//     let area=0;
//     let length=0;
//     let width=0;
//     if (paintType === 'ceiling') {
//         length = parseFloat(document.getElementById('ceilingLength').value);
//         width = parseFloat(document.getElementById('ceilingWidth').value);
//         area = length * width;
//     } else { 
//         inputwallHeight.forEach((choiceItem) => width+=parseFloat(choiceItem.value));
//         inputwallLength.forEach((choiceItem) => length+=parseFloat(choiceItem.value))   
       
       

//        // const numberOfWalls = parseInt(document.getElementById('numberOfWalls').value);
//        // const wallLength = parseFloat(document.getElementById('wallLength').value);
//        // const wallHeight = parseFloat(document.getElementById('wallHeight').value);
//        // area = numberOfWalls * wallLength * wallHeight;
//     }
//     area = length * width;
//     if (Number.isNaN(area)) {
//     document.getElementById('result').innerText = `Не корректные данные`
//     } else {
//      document.getElementById('result').innerText = `Площадь для окраски: ${area} м²`;
//     }
   
// })