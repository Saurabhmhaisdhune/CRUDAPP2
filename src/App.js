import Dashboard from "./Components/Dashboard";
import AllStudents from "./Components/AllStudents";
import AddStudents from "./Components/AddStudents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
import React, { useState } from "react";
import AllTeachers from "./Components2/AllTeachers";
import AddTeachers from "./Components2/AddTeachers";
import EditTeacher from "./Components2/EditTeacher";


export const StudentsContext = React.createContext();
export const TeachersContext = React.createContext();
function App() {
  let [teachers,setTeachers]=useState([
    {
      "id": 1,
      "name":"Neha Aringle",
      "age":"35",
      "subject":"Maths",
      "gender":"F",
      "address":"Makhmalabad, Nashik, Maharashtra",
      "phonenumber":"9638527410",
    },
    {
      "id": 2,
      "name":"Dhanesh Bhamre",
      "age":"40",
      "subject":"History-Geography",
      "gender":"M",
      "address":"Indira Nagar, Nashik, Maharashtra",
      "phonenumber":"9638527410",
    },
    {
      "id": 3,
      "name":"Harshal Suryawanshi",
      "age":"38",
      "subject":"Science",
      "gender":"M",
      "address":"Dev Nagar, Dhule, Maharashtra",
      "phonenumber":"9638527410",
    },
    {
      "id": 4,
      "name":"Komal Badgujar",
      "age":"32",
      "subject":"English",
      "gender":"F",
      "address":"Cidco, Nashik, Maharashtra",
      "phonenumber":"9321654870",
    }
  ]);
  
  let [students, setStudents] = useState([
    {
      "id": 1,
      "name":"Santosh Vadje",
      "age":"26",
      "division":"A",
      "dateofbirth":"25-11-1996",
      "address":"Dindori, Nashik, Maharashtra",
      "phonenumber":"9638527410",
    },
    {
      "id": 2,
      "name":"Shubham Patil",
      "age":"25",
      "division":"C",
      "dateofbirth":"09-10-1996",
      "address":"Gangapur, Nashik, Maharashtra",
      "phonenumber":"9741085263",
    },
    {
      "id": 3,
      "name":"Omkar Tidke",
      "age":"24",
      "division":"B",
      "dateofbirth":"11-05-1998",
      "address":"Janori, Nashik, Maharashtra",
      "phonenumber":"9321654987",
    },
    {
      "id": 4,
      "name":"Rahul Nikam",
      "age":"26",
      "division":"D",
      "dateofbirth":"01-09-1996",
      "address":"Patardi Fata, Nashik, Maharashtra",
      "phonenumber":"9014725836",
    }
  ]);
  return (
    <>
      <Router>
        <StudentsContext.Provider value={{ students, setStudents }}>
        <TeachersContext.Provider value={{ teachers, setTeachers }}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/all-students" element={<AllStudents />} />
                  <Route path="/add-students" element={<AddStudents />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/all-teachers" element={<AllTeachers />} />
                  <Route path="/add-teachers" element={<AddTeachers />} />
                  <Route path="/edit-teachers/:id" element={<EditTeacher />} />
                </Routes>
          </TeachersContext.Provider>
        </StudentsContext.Provider>
      </Router>
    </>
  );
}

export default App;