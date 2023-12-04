// src/components/StudentTable.js
import React from 'react';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
};

const StudentTable = ({ students, onView, onEdit, onDelete }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Grade</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td style={tdStyle}>{student.id}</td>
            <td style={tdStyle}>{student.name}</td>
            <td style={tdStyle}>{student.age}</td>
            <td style={tdStyle}>{student.grade}</td>
            <td style={tdStyle}>
              <button onClick={() => onView(student)}>View</button>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
