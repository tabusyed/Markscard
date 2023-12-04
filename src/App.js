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
    {/* <Route path="teacher" element={<teacherDetails />}>
        <Route path="/TeacherForm" element={<TeacherForm/>}/>
        <Route path="/TeacherMain" element={<TeacherMain/>}/>
        <Route path="/TeacherMain" element={<TeacherTable/>}/>

        </Route> */}
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



// src/App.js
// import React, { useState } from 'react';
// import StudentTable from './components/studentTable';
// import StudentForm from './components/studentForm';

// const App = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name:  'John Doe',   age: 20, grade: 'A' },
//     { id: 2, name:  'Jane Smith', age: 21, grade: 'B' },
//     { id: 3, name: 'Johnson',    age: 22, grade: 'c' },
//     { id: 4, name: 'Tabu',       age: 23, grade: 'c' },
//     // { id: 5, name: 'Subhash',    age: 24, grade: 'c' },
//     // { id: 6, name: 'Suman',      age: 25, grade: 'c' },
//     // { id: 7, name: 'Shubham',    age: 26, grade: 'c' },
//     // { id: 8, name: 'Prajwal',    age: 27, grade: 'c' },
//     // { id: 9, name: 'Jay',        age: 28, grade: 'c' },
//     // { id: 10,name:'Pranali',   age: 29, grade: 'c' },


//     // Add more students as needed
//   ]);

//   const appStyle = {
//     textAlign: 'center',
//   };

//   const [editingStudent, setEditingStudent] = useState(null);
//   const [viewingStudent, setViewingStudent] = useState(null);

//   const handleAdd = (newStudent) => {
//     setStudents((prevStudents) => [...prevStudents, { id: Date.now(), ...newStudent }]);
//   };

//   const handleEdit = (editedStudent) => {
//     setStudents((prevStudents) =>
//       prevStudents.map((student) => (student.id === editedStudent.id ? editedStudent : student))
//     );
//     setEditingStudent(null);
//   };

//   const handleDelete = (studentId) => {
//     setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
//   };

//   const handleView = (student) => {
//     setViewingStudent(student);
//   };

//   const handleEditClick = (student) => {
//     setEditingStudent(student);
//   };

//   const handleCancelEdit = () => {
//     setEditingStudent(null);
//   };

//   const handleCancelView = () => {
//     setViewingStudent(null);
//   };

//   return (
//     <div style={appStyle}>
//       <h1>Student Data</h1>
//       <StudentTable
//         students={students}
//         onView={handleView}
//         onEdit={handleEditClick}
//         onDelete={handleDelete}
//       />
//       <br />
//       {editingStudent && (
//         <div>
//           <h2>Edit Student</h2>
//           <StudentForm
//             initialValues={editingStudent}
//             onSubmit={handleEdit}
//             onCancel={handleCancelEdit}
//           />
//         </div>
//       )}
//       {viewingStudent && (
//         <div>
//           <h2>View Student</h2>
//           <p>ID: {viewingStudent.id}</p>
//           <p>Name: {viewingStudent.name}</p>
//           <p>Age: {viewingStudent.age}</p>
//           <p>Grade: {viewingStudent.grade}</p>
//           <button onClick={handleCancelView}>Close</button>
//         </div>
//       )}
//       {!editingStudent && !viewingStudent && (
//         <div>
//           <h2>Add Student</h2>
//           <StudentForm onSubmit={handleAdd} onCancel={() => {}} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



// const App = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name:  'John Doe',   age: 20, grade: 'A' },
//     { id: 2, name:  'Jane Smith', age: 21, grade: 'B' },
//     { id: 3, name: 'Johnson',    age: 22, grade: 'c' },
//     { id: 4, name: 'Tabu',       age: 23, grade: 'c' },
//     { id: 5, name: 'Subhash',    age: 24, grade: 'c' },
//     { id: 6, name: 'Suman',      age: 25, grade: 'c' },
//     { id: 7, name: 'Shubham',    age: 26, grade: 'c' },
//     { id: 8, name: 'Prajwal',    age: 27, grade: 'c' },
//     { id: 9, name: 'Jay',        age: 28, grade: 'c' },
//     { id: 10,name:'Pranali',   age: 29, grade: 'c' },


//     // Add more students as needed
//   ]);

//   // const appStyle = {
//   //   textAlign: 'center',
//   // };

//   const [editingStudent, setEditingStudent] = useState(null);
//   const [viewingStudent, setViewingStudent] = useState(null);

//   const handleAdd = (newStudent) => {
//     setStudents((prevStudents) => [...prevStudents, { id: Date.now(), ...newStudent }]);
//   };

//   const handleEdit = (editedStudent) => {
//     setStudents((prevStudents) =>
//       prevStudents.map((student) => (student.id === editedStudent.id ? editedStudent : student))
//     );
//     setEditingStudent(null);
//   };

//   const handleDelete = (studentId) => {
//     setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
//   };

//   const handleView = (student) => {
//     setViewingStudent(student);
//   };

//   const handleEditClick = (student) => {
//     setEditingStudent(student);
//   };

//   const handleCancelEdit = () => {
//     setEditingStudent(null);
//   };

//   const handleCancelView = () => {
//     setViewingStudent(null);
//   };
 

//   return (
   
//     <div style={appStyle}>
//       <h1>Student Data</h1>
//       <StudentTable
//         students={students}
//         onView={handleView}
//         onEdit={handleEditClick}
//         onDelete={handleDelete}
//       />
//       <br />
//       {editingStudent && (
//         <div>
//           <h2>Edit Student</h2>
//           <StudentForm
//             initialValues={editingStudent}
//             onSubmit={handleEdit}
//             onCancel={handleCancelEdit}
//           />
//         </div>
//       )}
//       {viewingStudent && (
//         <div>
//           <h2>View Student</h2>
//           <p>ID: {viewingStudent.id}</p>
//           <p>Name: {viewingStudent.name}</p>
//           <p>Age: {viewingStudent.age}</p>
//           <p>Grade: {viewingStudent.grade}</p>
//           <button onClick={handleCancelView}>Close</button>
//         </div>
//       )}
//       {!editingStudent && !viewingStudent && (
//         <div>
//           <h2>Add Student</h2>
//           <StudentForm onSubmit={handleAdd} onCancel={() => {}} />
//         </div>
//       )}
//      </div>
//   )
    
  
//       }

// export default App;