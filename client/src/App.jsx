import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (editingId) {
      setStudents(
        students.map((s) =>
          s.id === editingId ? { ...s, name, course, age } : s,
        ),
      );
      setEditingId(null);
    } else {
      setStudents([...students, { id: Date.now(), name, course, age }]);
    }

    setName("");
    setCourse("");
    setAge("");
  };

  const handleEdit = (student) => {
    setName(student.name);
    setCourse(student.course);
    setAge(student.age);
    setEditingId(student.id);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <>
      <h1>Student Management System</h1>
      <h2>{editingId ? "Update Student" : "Add New Student"}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>
        {editingId ? "Save Changes" : "Add New Student"}
      </button>

      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Age: {student.age}</p>
          <button onClick={() => handleEdit(student)}>Update</button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
