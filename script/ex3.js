const cocktailList = document.getElementById('cocktail-list');
const orderList = document.getElementById('order-list');
const homePage = document.getElementById('home-page');
const orderPage = document.getElementById('order-page');
const backToHomeButton = document.getElementById('back-to-home');
const orderPageButton = document.getElementById('order-page-button');
const totalPriceElement = document.getElementById('total-price');
let order = JSON.parse(localStorage.getItem('order')) || [];

async function init() {
    let stored = localStorage.getItem('cocktails')
    if (!stored || stored === 'undefined' || stored === 'null') {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            const data = await response.json()
            localStorage.setItem('cocktails', JSON.stringify(data.drinks))
        }
        catch (error) {
            console.error(error.message);
        }
    }
    stored = localStorage.getItem('cocktails')
    if(stored !== 'undefined' && stored !== 'null')
        displayCocktails()
}

init()

// Функция для отображения коктейлей на главной странице
function displayCocktails() {
    cocktailList.innerHTML = '';
    const cocktails = JSON.parse(localStorage.getItem('cocktails'))
    cocktails.forEach(cocktail => {
        const card = document.createElement('div');
        card.className = 'col-lg-2 col-md-4 col-sm-6 cocktail-card';
        card.innerHTML = `
            <div class="card">
                <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="${cocktail.strDrink}">
                <div class="card-body">
                    <h5 class="card-title">${cocktail.strDrink}</h5>
                    <button class="btn btn-primary" onclick="addToOrder('${cocktail.idDrink}', '${cocktail.strDrink}', '${cocktail.strDrinkThumb}')">Заказать</button>
                    <button type="button" onclick="getProps(${cocktail.idDrink})" class="btn btn-primary mt-1" data-bs-toggle="modal" data-bs-target="#myModal">Подробнее</button>
                </div>
            </div>
        `;
        cocktailList.appendChild(card);
    });
}

// Функция для добавления коктейля в заказ
window.addToOrder = (id, name, image) => {
    if (!order.find(item => item.id === id)) {
        const price = Math.floor(Math.random() * 20) + 5;
        order.push({ id, name, image, price });
        localStorage.setItem('order', JSON.stringify(order));
        updateOrderPage();
    }
};

// Функция для обновления страницы заказа
function updateOrderPage() {
    orderList.innerHTML = '';
    let totalPrice = 0;
    order.forEach((item, index) => {
        totalPrice += item.price;
        const orderItem = document.createElement('div');
        orderItem.className = 'col-md-2 cocktail-card';
        orderItem.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Цена: $${item.price}</p>
                    <button class="btn btn-danger" onclick="removeFromOrder(${index})">Удалить</button>
                </div>
            </div>
        `;
        orderList.appendChild(orderItem);
    });
    totalPriceElement.textContent = totalPrice;
}

// Функция для удаления коктейля из заказа
window.removeFromOrder = (index) => {
    order.splice(index, 1);
    localStorage.setItem('order', JSON.stringify(order));
    updateOrderPage();
};

// Переключение между страницами
backToHomeButton.addEventListener('click', () => {
    homePage.style.display = 'block';
    orderPage.style.display = 'none';
});

orderPageButton.addEventListener('click', () => {
    homePage.style.display = 'none';
    orderPage.style.display = 'block';
    updateOrderPage();
});

async function getProps(id) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    let { drinks } = await response.json()
    drinks = drinks[0]
    //console.log(drinks)
    const modalBody = document.querySelector('#modal-body')
    let ingr = '<ul style="margin-left: 20px">'
    for (let i = 1; i <= 15; i++) {
        if(drinks[`strIngredient${i}`])
            ingr += `<li>${drinks[`strIngredient${i}`]} - ${drinks[`strMeasure${i}`]}</li>`
    }
    ingr += `</ul>`
    
    modalBody.innerHTML = `
        <div class="row"><img src="${drinks.strDrinkThumb}" alt="${drinks.strDrink}"></div>
        <div class="m-3">
            <div class="row nameOfCoctail"><h5>Название</h5><p>${drinks.strDrink}</5></div>
            <div class="row categoryOfCoctail"><h5>Категория</h5><p>${drinks.strCategory}</5></div>
            <div class="row typeOfCoctail"><h5>Тип</h5><p>${drinks.strAlcoholic}</5></div>
            <div class="row ingridientsOfCoctail"><h5>Ингридиенты</h5>${ingr}</div>
            <div class="row recieptOfCoctail"><h5>Рецепт</h5><p>${drinks.strInstructions}</p></div>
        </div>
    `
}

