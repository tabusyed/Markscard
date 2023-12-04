// Import necessary React components and libraries
import React, { useState } from 'react';

// Sample data (replace with your actual data)
const studentsData = [
  { id: 1, name: 'John Doe', class: '10A', teacher: 'Mr. Smith', subject: 'Math', marks: 95 },
  { id: 2, name: 'Jane Smith', class: '10B', teacher: 'Ms. Johnson', subject: 'English', marks: 85 },
  { id: 2, name: 'Jay', class: '10B', teacher: 'Ms. Jay', subject: 'Science', marks: 85 },
  { id: 2, name: 'Pranali', class: '10B', teacher: 'Ms. suman', subject: 'Social', marks: 85 },
  { id: 2, name: 'Prajwal', class: '10B', teacher: 'Ms. sampath', subject: 'Hindi', marks: 85 },
  { id: 2, name: 'Shubham', class: '10B', teacher: 'Ms. subhash', subject: 'Telugu', marks: 85 },

 
  // Add more student data as needed
 
];

// MarksScreen component
const MarksScreen = () => {
  // State to store selected student(s)
  const [selectedStudents, setSelectedStudents] = useState([]);
  // State to store search input
  const [searchInput, setSearchInput] = useState('');

  // Function to handle student selection
  const handleSelectStudent = (studentId) => {
    const isSelected = selectedStudents.includes(studentId);
    if (isSelected) {
      // If already selected, remove from the list
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      // If not selected, add to the list
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter students based on search input
  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearchChange}
      />

      {/* List of students */}
      <ul>
        {filteredStudents.map(student => (
          <li key={student.id}>
            {/* Checkbox for selection */}
            <input
              type="checkbox"
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleSelectStudent(student.id)}
            />
            {/* Student details */}
            <span>{`ID: ${student.id}, Name: ${student.name}, Class: ${student.class}, Teacher: ${student.teacher}, Subject: ${student.subject}, Marks: ${student.marks}`}</span>
          </li>
        ))}
      </ul>

      {/* Display selected student details */}
      {selectedStudents.length > 0 && (
        <div>
          <h3>Selected Student(s) Details:</h3>
          <ul>
            {selectedStudents.map(studentId => {
              const selectedStudent = studentsData.find(student => student.id === studentId);
              return (
                <li key={selectedStudent.id}>
                  {`ID: ${selectedStudent.id}, Name: ${selectedStudent.name}, Class: ${selectedStudent.class}, Teacher: ${selectedStudent.teacher}, Subject: ${selectedStudent.subject}, Marks: ${selectedStudent.marks}`}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MarksScreen;
