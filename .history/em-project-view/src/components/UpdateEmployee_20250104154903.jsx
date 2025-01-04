import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const UpdateEmployee = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: pid,
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // to fetch initial data from db
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployeeById(employee, id)
      .then((response) => {
        console.log("saved", response);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>Update Employee</p>
      </div>

      <div className="mx-10 my-2">
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="tel"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="flex my-4 space-x-4 py-4 px-20">
        <button
          className="bg-green-400 hover:bg-green-700 px-6 py-2 rounded"
          onClick={updateEmployee}
        >
          Save
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 px-6 py-2 rounded"
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default UpdateEmployee;
