
import React, { useState } from 'react';
import TeacherTable from './TeacherTable';
import TeacherForm from  './TeacherForm';




const appStyle = {
  textAlign: 'center',
};

const TeacherMain = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Mr. Smith', subject: 'Math' },
    { id: 2, name: 'Mrs. Johnson', subject: 'English' },
    { id: 2, name: 'Mrs. Jay', subject: 'Science' },
    { id: 2, name: 'Mrs. suman', subject: 'Social' },
    { id: 2, name: 'Mrs. sampath', subject: 'Hindi' },
    { id: 2, name: 'Mrs. subhash', subject: 'Telugu' },


    // Add more teachers as needed
  ]);

  const [editingTeacher, setEditingTeacher] = useState(null);
  const [viewingTeacher, setViewingTeacher] = useState(null);

  const handleAdd = (newTeacher) => {
    setTeachers((prevTeachers) => [...prevTeachers, { id: Date.now(), ...newTeacher }]);
  };

  const handleEdit = (editedTeacher) => {
    setTeachers((prevTeachers) =>
      prevTeachers.map((teacher) => (teacher.id === editedTeacher.id ? editedTeacher : teacher))
    );
    setEditingTeacher(null);
  };

  const handleDelete = (teacherId) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== teacherId));
  };

  const handleView = (teacher) => {
    setViewingTeacher(teacher);
  };

  const handleEditClick = (teacher) => {
    setEditingTeacher(teacher);
  };

  const handleCancelEdit = () => {
    setEditingTeacher(null);
  };

  const handleCancelView = () => {
    setViewingTeacher(null);
  };

  return (
    <div style={appStyle}>
      <h1>Teacher Data</h1>
      <TeacherTable
        teachers={teachers}
        onView={handleView}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
      <br />
      {editingTeacher && (
        <div>
          <h2>Edit Teacher</h2>
          <TeacherForm
            initialValues={editingTeacher}
            onSubmit={handleEdit}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
      {viewingTeacher && (
        <div>
          <h2>View Teacher</h2>
          <p>ID: {viewingTeacher.id}</p>
          <p>Name: {viewingTeacher.name}</p>
          <p>Subject: {viewingTeacher.subject}</p>
          <button onClick={handleCancelView}>Close</button>
        </div>
      )}
      {!editingTeacher && !viewingTeacher && (
        <div>
          <h2>Add Teacher</h2>
          <TeacherForm onSubmit={handleAdd} onCancel={() => {}} />
        </div>
      )}
    </div>
  );
};

export default TeacherMain;
