document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    // Функция для загрузки данных о пользователях
    async function loadUsers() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=20'); // Загружаем пользователей
            if (!response.ok) {
                throw new Error('Ошибка при получении данных');
            }
            const { results } = await response.json();
            const users = results.filter(user => (user.dob.age > 25)); // Фильтруем пользователей старше 25 лет
            displayUsers(users); // Отображаем пользователей старше 25 лет
        } catch (error) {
            console.error(error.message);
        }
    }

    // Функция для отображения информации о пользователях
    function displayUsers(users) {
        userList.innerHTML = '';
        if (users.length === 0) {
            userList.innerHTML = '<p class="text-center">Нет пользователей старше 25 лет.</p>';
            return;
        }
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'col-6 user-card';
            card.innerHTML = `
                <div class="card">
                    <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">
                    <div class="card-body">
                        <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                        <p class="card-text"><strong>Пол:</strong> ${user.gender}</p>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p class="card-text"><strong>Телефон:</strong> ${user.phone}</p>
                        <p class="card-text"><strong>Адрес:</strong> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                        <p class="card-text"><strong>Дата рождения:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
                        <p class="card-text"><strong>Возраст:</strong> ${user.dob.age}</p>
                    </div>
                </div>
            `;
            userList.appendChild(card);
        });
    }

    loadUsers();
});