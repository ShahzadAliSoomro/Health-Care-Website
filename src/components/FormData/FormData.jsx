import React from 'react'

export default function FormData() {
  return (
    <div>FormData</div>
  )
}


// import React, { useState } from "react";

// export default function FormData() {
//   const [employees, setEmployees] = useState([]);
//   const [newEmployee, setNewEmployee] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     address: "",
//     phone: "",
//   });

//   const addEmployee = () => {
//     setEmployees(() => [newEmployee]);
//     setNewEmployee({ name: "", email: "", gender: "", address: "", phone: "" });
//   };

//   const firebaseEndpoint =
//     "";
//   const employeesEndpoint = `${firebaseEndpoint}/employees.json`;

//   fetch(employeesEndpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       name: newEmployee.name,
//       email: newEmployee.email,
//       gender: newEmployee.gender,
//       address: newEmployee.address,
//       phone: newEmployee.phone,
//     },
//     body: JSON.stringify(employees),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error:", error));

//   const handleGenderChange = (e) => {
//     setNewEmployee({ ...newEmployee, gender: e.target.value });
//   };
//   console.log(employees);

//   return (
//     <div className="flex justify-center p-5">
//       <div className="flex flex-col gap-4">
//         <h1 className="text-3xl ">Employee Management</h1>
        
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={newEmployee.name}
//             onChange={(e) =>
//               setNewEmployee({ ...newEmployee, name: e.target.value })
//             }
//             className="border p-1"
//           />
//           <input
//             type="text"
//             placeholder="Email"
//             value={newEmployee.email}
//             onChange={(e) =>
//               setNewEmployee({ ...newEmployee, email: e.target.value })
//             }
//             className="border p-1"
//           />
//           <select
//             id="gender"
//             className="border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             value={newEmployee.gender}
//             onChange={handleGenderChange}
//           >
//             <option value="" disabled selected>
//               Choose the gender
//             </option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Address"
//             value={newEmployee.address}
//             onChange={(e) =>
//               setNewEmployee({ ...newEmployee, address: e.target.value })
//             }
//             className="border  p-1"
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={newEmployee.phone}
//             onChange={(e) =>
//               setNewEmployee({ ...newEmployee, phone: e.target.value })
//             }
//             className="border  p-1"
//           />
//           {/* Add button */}
//           <button onClick={addEmployee} className="bg-[#5BBB3D] text-white p-1">
//             Add Employee
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
