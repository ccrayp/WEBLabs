export default function CocktailModal({ cocktail, onClose }) {
    return (
        <>
            <div
                className="modal fade show"
                style={{ display: 'block' }}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{cocktail.strDrink}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <img
                                        src={cocktail.strDrinkThumb}
                                        className="img-fluid rounded"
                                        alt={cocktail.strDrink}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <h6>Category:</h6>
                                    <p>{cocktail.strCategory}</p>

                                    <h6 className="mt-3">Ingredients:</h6>
                                    <ul className="list-unstyled">
                                        {Array.from({ length: 15 }).map((_, i) => {
                                            const ingredient = cocktail[`strIngredient${i+1}`];
                                            const measure = cocktail[`strMeasure${i+1}`];
                                            return ingredient ? (
                                                <li key={i}>
                                                    {measure} {ingredient}
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <h6 className="mt-3">Instructions:</h6>
                            <p>{cocktail.strInstructions}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Close
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