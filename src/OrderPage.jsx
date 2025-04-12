import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderPage() {
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedOrder = JSON.parse(localStorage.getItem('cocktail-order')) || [];
        setOrder(savedOrder);
    }, []);

    const removeFromOrder = (index) => {
        const newOrder = [...order];
        newOrder.splice(index, 1);
        setOrder(newOrder);
        localStorage.setItem('cocktail-order', JSON.stringify(newOrder));
    };

    const totalPrice = order.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Корзина</h1>

            {order.length === 0 ? (
                <div className="text-center py-5">
                    <p className="fs-4">Корзина пуста</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/products')}
                    >
                        Вернуть в меню
                    </button>
                </div>
            ) : (
                <>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {order.map((item, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.name}
                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Стоимость: ${item.price}</p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeFromOrder(index)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4 p-3 bg-light rounded">
                        <h4>Сумма: ${totalPrice}</h4>
                        <div className="d-flex justify-content-center gap-3 mt-3">
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate('/products')}
                            >
                                Вернуться в меню
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}