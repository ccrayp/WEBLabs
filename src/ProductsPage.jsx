import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CocktailModal from './CocktailModal';
import Rating from "./Rating.jsx";

export default function ProductsPage() {
    const [cocktails, setCocktails] = useState([]);
    const [order, setOrder] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showRating, setShowRating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Load initial data
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
                const data = await response.json();
                setCocktails(data.drinks || []);

                const savedOrder = JSON.parse(localStorage.getItem('cocktail-order')) || [];
                setOrder(savedOrder);
            } catch (error) {
                console.error("Error loading data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadData();
    }, []);

    // Save order to localStorage
    useEffect(() => {
        localStorage.setItem('cocktail-order', JSON.stringify(order));
    }, [order]);

    const addToOrder = (id, name, image) => {
        if (!order.some(item => item.id === id)) {
            const price = Math.floor(Math.random() * 20) + 5;
            setOrder(prev => [...prev, { id, name, image, price }]);
        }
    };

    const handleShowDetails = async (id) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setSelectedCocktail(data.drinks[0]);
            setShowModal(true);
        } catch (error) {
            console.error("Error fetching details:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleShowRating = async (id) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setSelectedCocktail(data.drinks[0]);
            setShowRating(true);
        } catch (error) {
            console.error("Error fetching details:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            {isLoading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            ) : (
                <>
                    <h1 className="text-center mb-4">Наши продукты</h1>
                    <div className="text-center mb-4">
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate('/order')}
                            disabled={order.length === 0}
                        >
                            В корзину ({order.length})
                        </button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        {cocktails.map(cocktail => (
                            <div key={cocktail.idDrink} className="col">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={cocktail.strDrinkThumb}
                                        className="card-img-top"
                                        alt={cocktail.strDrink}
                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{cocktail.strDrink}</h5>
                                        <div className="mt-auto">
                                            <button
                                                className="btn btn-warning w-100 mb-2"
                                                onClick={() => addToOrder(
                                                    cocktail.idDrink,
                                                    cocktail.strDrink,
                                                    cocktail.strDrinkThumb
                                                )}
                                            >
                                                Добавить в заказ
                                            </button>
                                            <button
                                                className="btn btn-outline-dark w-100 mb-2"
                                                onClick={() => handleShowDetails(cocktail.idDrink)}
                                            >
                                                Подробнее
                                            </button>
                                            <button
                                                className="btn btn-outline-dark w-100"
                                                onClick={() => handleShowRating(cocktail.idDrink)}
                                            >
                                                Рейтинг
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {showModal && selectedCocktail && (
                <CocktailModal
                    cocktail={selectedCocktail}
                    onClose={() => setShowModal(false)}
                />
            )}

            {showRating && selectedCocktail && (
                <Rating
                    cocktail={selectedCocktail}
                    onClose={() => setShowRating(false)}
                />
            )}
        </div>
    );
}