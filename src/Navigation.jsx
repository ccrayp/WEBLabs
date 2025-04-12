import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation(); // Gets current route path

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning m-3 mt-0">
            <div className="container-fluid h4">
                <Link className="navbar-brand fs-2" to="/">
                    Мой сайт
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                            >
                                Главная
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                            >
                                О нас
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                            >
                                Продукты
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            >
                                Контакты
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/calculator"
                                className={`nav-link ${location.pathname === '/calculator' ? 'active' : ''}`}
                            >
                                Калькулятор
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}