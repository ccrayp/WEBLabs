import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ToMain from '../ToMain.jsx';
//import '../index.css';

function TopBar() {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: 'orange' }}>
                <div className="row top-bar">
                    <div className="col-12">
                        <a href="#" className="text-white">
                            <span className="mr-2 text-white icon-envelope-open-o"></span>
                            <span className="d-none d-md-inline-block">info@yourdomain.com</span>
                        </a>
                        <span className="mx-md-2 d-inline-block"></span>
                        <a href="#" className="text-white">
                            <span className="mr-2 text-white icon-phone"></span>
                            <span className="d-none d-md-inline-block">+7 (960) 1234 5678</span>
                        </a>
                        <div className="float-right">
                            <a className="text-white" href="#myModal">Регистрация</a>
                            <a href="#" className="text-white">
                                <span className="mr-2 text-white icon-vk"></span>
                            </a>
                            <span className="mx-md-2 d-inline-block"></span>
                            <a href="#" className="text-white">
                                <span className="mr-2 text-white icon-home"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <ToMain />
            </div>
        </div>
    );
}

// Основной компонент App
function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div style={{ padding: "0px" }}>
            <TopBar />
            <h1>Список задач Основной компонент</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Введите новую задачу"
            />
            <button onClick={addTask}>Добавить задачу</button>
        </div>
    );
}

// Рендерим App в корневой элемент
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);