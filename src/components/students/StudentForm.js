
import React, { useState } from 'react';


// const formStyle = {
//   maxWidth: '400px',
//   margin: '20px 0',
// };
const labelStyle = {
  display: 'block',
  margin: '10px 0',
};

const buttonStyle = {
  marginRight: '10px',
};

const StudentForm = ({ onSubmit, onCancel, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      </label>
      <label style={labelStyle}>
        Age:
        <input type="number" name="age" value={formData.age || ''} onChange={handleChange} />
      </label>
      <label style={labelStyle}>
        Grade:
        <input type="text" name="grade" value={formData.grade || ''} onChange={handleChange} />
      </label>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>     
       <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default StudentForm;
