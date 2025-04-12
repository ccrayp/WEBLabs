import ToMain from "./ToMain.jsx";
import { useState } from "react";
import "./css.css";

function TopBar() {
  return (
      <nav className="navbar navbar-expand-md bg-warning py-2">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-envelope me-2"></i>
                <span className="d-none d-md-inline">info@yourdomain.com</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-phone me-2"></i>
                <span className="d-none d-md-inline">+7 (960) 1234 5678</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#myModal" className="nav-link text-white">
                Регистрация
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-vk"></i>
              </a>
            </li>
            <li className="nav-item ms-2">
              <a href="#" className="nav-link text-white">
                <i className="bi bi-house-door"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default function Components() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
      <>
        <ToMain />
      <div className="container-fluid p-0">
        <TopBar />
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <h1 className="text-center mb-4">Список задач</h1>

              <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите новую задачу"
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={addTask}
                >
                  Добавить
                </button>
              </div>

              <ul className="list-group">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {task}
                      <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                      >
                        ×
                      </button>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}