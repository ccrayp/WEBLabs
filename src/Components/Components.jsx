import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
import ToMain from "../ToMain.jsx";
import "../css.css";

function TopBar() {
  return (
    <Navbar bg="warning" expand="md" className="py-2">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white">
            <i className="bi bi-envelope me-2"></i>
            <span className="d-none d-md-inline">info@yourdomain.com</span>
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="bi bi-phone me-2"></i>
            <span className="d-none d-md-inline">+7 (960) 1234 5678</span>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#myModal" className="text-white">
            Регистрация
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <i className="bi bi-vk"></i>
          </Nav.Link>
          <Nav.Link href="#" className="text-white ms-2">
            <i className="bi bi-house-door"></i>
          </Nav.Link>
        </Nav>
        <ToMain />
      </Container>
    </Navbar>
  );
}

function App() {
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
    <Container fluid className="p-0">
      <TopBar />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="text-center mb-4">Список задач</h1>

            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введите новую задачу"
              />
              <Button variant="primary" onClick={addTask}>
                Добавить
              </Button>
            </InputGroup>

            <ListGroup>
              {tasks.map((task, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {task}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() =>
                      setTasks(tasks.filter((_, i) => i !== index))
                    }
                  >
                    ×
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
