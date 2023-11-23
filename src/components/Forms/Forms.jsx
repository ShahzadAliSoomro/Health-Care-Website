import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "../../fireStore/firestore";

export default function Forms() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
  });

  const dbFirestore = getFirestore(db);
  const employeesCollection = collection(dbFirestore, "employees");

  // Fetch employees from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(employeesCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployees(data);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [employeesCollection]);

  const addEmployee = async () => {
    // Add the new employee to Firestore
    await addDoc(employeesCollection, newEmployee);
  };

  const handleGenderChange = (e) => {
    setNewEmployee({ ...newEmployee, gender: e.target.value });
  };

  
  console.log(employees);

  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl ">Employee Management Data</h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            className="border p-1"
          />
          <input
            type="text"
            placeholder="Email"
            value={newEmployee.email}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, email: e.target.value })
            }
            className="border p-1"
          />
          <select
            id="gender"
            className="border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={newEmployee.gender}
            onChange={handleGenderChange}
          >
            <option value="" disabled selected>
              Choose the gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="text"
            placeholder="Address"
            value={newEmployee.address}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, address: e.target.value })
            }
            className="border  p-1"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newEmployee.phone}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, phone: e.target.value })
            }
            className="border  p-1"
          />
          {/* Add button */}
          <button onClick={addEmployee} className="bg-[#5BBB3D] text-white p-1">
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
