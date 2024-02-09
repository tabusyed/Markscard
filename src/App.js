import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import MarksScreen from './components/Marks/MarksScreen';
import TeacherMain from './components/teacher/TeacherMain';
import StudentsMain from './components/students/StudentsMain';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} datatarget=".navbar-collapse"to="/students">Students</Nav.Link>
            <Nav.Link as={Link} datatarget=".navbar-collapse"to="/teacher">Teacher</Nav.Link>
            <Nav.Link as={Link} datatarget=".navbar-collapse" to="/">marks</Nav.Link>
            {/* <Nav.Link as={Link} datatarget=".navbar-collapse"to="/form">Form</Nav.Link> */}

          </Nav>
        </Container>
      </Navbar>
    </>
    <div>
      <Routes>
        <Route path="/" element={<MarksScreen/>}/>
        <Route path="/teacher"element={<TeacherMain/>}/>
        <Route path="/students" element={<StudentsMain/>}/>

        
      </Routes>
    </div>
    
      </div>
    </BrowserRouter>

  );
}

export default App;







