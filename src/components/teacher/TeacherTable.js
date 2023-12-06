
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

const TeacherTable = ({ teachers, onView, onEdit, onDelete }) => {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Subject</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td style={tdStyle}>{teacher.id}</td>
            <td style={tdStyle}>{teacher.name}</td>
            <td style={tdStyle}>{teacher.subject}</td>
            <td style={tdStyle}>
              <button onClick={() => onView(teacher)}>View</button>
              <button onClick={() => onEdit(teacher)}>Edit</button>
              <button onClick={() => onDelete(teacher.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeacherTable;
