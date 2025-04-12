import './rating.css';
import { useState } from 'react';

export default function Rating({ cocktail, onClose }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <>
            <div
                className="modal fade show"
                style={{ display: 'block' }}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Оцените {cocktail.strDrink}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="rating-stars mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        className={`star-btn ${star <= (hover || rating) ? 'active' : ''}`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        &#9733;
                                    </button>
                                ))}
                            </div>
                            <p>Вы выбрали: {rating} из 5</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onClose}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal-backdrop fade show"
                onClick={onClose}
            ></div>
        </>
    );
}