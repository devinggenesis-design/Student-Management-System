import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[students, setStudents] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/students")
    .then((response) => {
      setStudents.log(response.data)
    });
  }, []);

  return(
    <>
    <h1>Student Management System</h1>
    <p>Welcome to the Student Management System!</p>
    <input placeholder="Name"/>
    <br />
    <input placeholder="Course"/>
    <br />
    <input placeholder="Age"/>
    <button>Add New Student</button>

    {students.map((student) =>(
      <div key={student.id}>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
        <p>Age: {student.age}</p>
      </div>
    ))}
    </>
  )
}

export default App;