  const products = [
        { id: 1, title: 'Samsung Galaxy', price: 50, image: '../img/gala.jpg' },
        { id: 2, title: 'iPhone 12', price: 80, image: '../img/iphone.png' },
        { id: 3, title: 'Huawei P30', price: 60, image: '../img/huawei.jpg' },
        { id: 4, title: 'Xiaomi Redmi', price: 30, image: '../img/xiaomi.jpg' }

  ];

  const productList = document.getElementById('product-list');
  const card_storage=document.getElementById('my_cart');
   window.onload = function() {
    
    const item = localStorage.getItem('cart');
        // Проверяем, существует ли item и не является ли он пустой строкой
        if ((item != null || item != '')&&item.length>2) {
          
        card_storage.classList.replace('icon-remove_shopping_cart','icon-shopping_cart');
   } 
        else{
          card_storage.classList.replace('icon-shopping_cart','icon-remove_shopping_cart');
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
          itemPrice.innerHTML = `Цена: <strong>${product.price}</strong>$`;

          const addButton = document.createElement('button');
          addButton.className = 'btn btn-primary';
          addButton.setAttribute('data-id', product.id);
          addButton.textContent = 'Добавить в корзину';
          addButton.onclick = () => addToCart(product);

          card.appendChild(img);
          cardBody.appendChild(itemTitle);
          cardBody.appendChild(itemPrice);
          cardBody.appendChild(addButton);
          card.appendChild(cardBody);
          col.appendChild(card);

          productList.appendChild(col);
      });
  }

  // function addToCart(product) {
  //     let cart = JSON.parse(localStorage.getItem('cart')) || [];
  //     cart.push(product);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //     alert(`Товар "${product.title}" добавлен в корзину!`); 
     
  //     if (card_storage.classList.contains('icon-remove_shopping_cart') ){
  //       card_storage.classList.replace('icon-remove_shopping_cart','icon-shopping_cart');
  //     }
  //     }
     
createProductCards(products);

const apiKey = '54ffc59ecbe71312af8b118a117408b2';
const city = 'Velikiy Novgorod';

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    const data = await response.json();
    const weatherIcon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    return [data.main.temp, iconUrl]
    
  } catch (error) {
    console.error(error.message);
    return[null, null]
  }
}

async function displayWeather() {
  const [temp, icon] = await getWeather()
  const img = document.createElement('img');
  img.src = icon
  img.alt = 'Иконка погоды';
  img.style="width: 25pt;";
  
  const place = document.getElementById("weatherResult");
  place.appendChild(img);
  place.innerHTML += temp + '°C'
}

displayWeather()