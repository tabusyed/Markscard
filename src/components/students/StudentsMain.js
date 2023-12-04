// src/App.js
import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
const StudentsMain = () => {
  const [students, setStudents] = useState([
    { id: 1, name:  'John Doe',   age: 20, grade: 'A' },
    { id: 2, name:  'Jane Smith', age: 21, grade: 'B' },
    { id: 3, name: 'Johnson',    age: 22, grade: 'c' },
    { id: 4, name: 'Tanu',       age: 23, grade: 'c' },
    { id: 5, name: 'Subhash',    age: 24, grade: 'c' },
    { id: 6, name: 'Suman',      age: 25, grade: 'c' },
    { id: 7, name: 'Shubham',    age: 26, grade: 'c' },
    { id: 8, name: 'Prajwal',    age: 27, grade: 'c' },
    { id: 9, name: 'Jay',        age: 28, grade: 'c' },
    { id: 10,name:'Pranali',   age: 29, grade: 'c' },


    // Add more students as needed
  ]);

  const appStyle = {
    textAlign: 'center',
  };

  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);

  const handleAdd = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, { id: Date.now(), ...newStudent }]);
  };

  const handleEdit = (editedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => (student.id === editedStudent.id ? editedStudent : student))
    );
    setEditingStudent(null);
  };

  const handleDelete = (studentId) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
  };

  const handleView = (student) => {
    setViewingStudent(student);
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const handleCancelView = () => {
    setViewingStudent(null);
  };

  return (
    <div style={appStyle}>
      <h1>Student Data</h1>
      <StudentTable
        students={students}
        onView={handleView}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
      <br />
      {editingStudent && (
        <div>
          <h2>Edit Student</h2>
          <StudentForm
            initialValues={editingStudent}
            onSubmit={handleEdit}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
      {viewingStudent && (
        <div>
          <h2>View Student</h2>
          <p>ID: {viewingStudent.id}</p>
          <p>Name: {viewingStudent.name}</p>
          <p>Age: {viewingStudent.age}</p>
          <p>Grade: {viewingStudent.grade}</p>
          <button onClick={handleCancelView}>Close</button>
        </div>
      )}
      {!editingStudent && !viewingStudent && (
        <div>
          <h2>Add Student</h2>
          <StudentForm onSubmit={handleAdd} onCancel={() => {}} />
        </div>
      )}
    </div>
  );
};

export default StudentsMain;