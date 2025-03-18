const products = [
    { id: 1, title: 'Samsung Galaxy', price: 50, image: '../images/gala.jpg' },
    { id: 2, title: 'iPhone 12', price: 80, image: '../images/iphone.png' },
    { id: 3, title: 'Huawei P30', price: 60, image: '../images/huawei.jpg' },
    { id: 4, title: 'Xiaomi Redmi', price: 30, image: '../images/xiaomi.jpg' }

];

const productList = document.getElementById('product-list');
const card_storage=document.getElementById('my_cart');

window.onload = function () {
    const item = JSON.parse(localStorage.getItem('cart'));
        // Проверяем, существует ли item и не является ли он пустой строкой
        if (item.length !== 0) {  
            card_storage.classList.replace('icon-remove_shopping_cart', 'icon-shopping_cart');
            card_storage.innerHTML = cart.length;
        } 
        else{
            card_storage.classList.replace('icon-shopping_cart', 'icon-remove_shopping_cart');
            card_storage.innerHTML = ''
        }        
};

function createProductCards(products) {
    productList.innerHTML = ''; // Очищаем список перед выводом
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'img-fluid';
        img.src = product.image;
        img.alt = product.title;
        img.style = 'height:20rem';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const itemTitle = document.createElement('h5');
        itemTitle.className = 'card-title';
        itemTitle.textContent = product.title;

        const itemPrice = document.createElement('p');
        itemPrice.className = 'card-text';
        itemPrice.innerHTML = `Цена: <strong>${product.price}$</strong>`;

        const addButton = document.createElement('button');
        addButton.className = 'btn btn-primary';
        addButton.setAttribute('data-id', product.id);

        const isInCart = JSON.parse(localStorage.getItem('cart')).some(el => el.id === product.id);
        if (isInCart) {
            addButton.textContent = 'Убрать из корзины';
            addButton.onclick = () => removeFromCart(addButton, product);
        } else {
            addButton.textContent = 'Добавить в корзину';
            addButton.onclick = () => addToCart(addButton, product);
        }

        card.appendChild(img);
        cardBody.appendChild(itemTitle);
        cardBody.appendChild(itemPrice);
        cardBody.appendChild(addButton);
        card.appendChild(cardBody);
        col.appendChild(card);

        productList.appendChild(col);
  });
}

function addToCart(btn, product) {
    btn.textContent = 'Убрать из корзины';
    btn.onclick = () => removeFromCart(btn, product);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    //alert(`Товар "${product.title}" добавлен в корзину!`);

    if (card_storage.classList.contains('icon-remove_shopping_cart')) {
        card_storage.classList.replace('icon-remove_shopping_cart', 'icon-shopping_cart');
    }
    card_storage.innerHTML = cart.length;
}

function removeFromCart(btn, product) {
    btn.textContent = 'Добавить в корзину';
    btn.onclick = () => addToCart(btn, product);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    //alert(`Товар "${product.title}" удален из корзины!`);
    if (cart.length === 0) {
        card_storage.classList.replace('icon-shopping_cart', 'icon-remove_shopping_cart');
    }
    if(cart.length)
        card_storage.innerHTML = cart.length;
    else
        card_storage.innerHTML = ''
}
 
createProductCards(products);