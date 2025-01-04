import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  const editEmployee = (e,id) => {
    e.preventDefault();
    navigate("/editEmployee")
  }
  const navigate = useNavigate();
  return (
    <div className="container mx-40 my-8">
      <div>
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-600 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded"
        >
          Add Employee
        </button>
      </div>

      <div>
        <table className="shadow">
          <thead className="bg-slate-600">
            <th className="px-6 py-3 uppercase tracking-wide"> Name </th>
            <th className="px-6 py-3 uppercase tracking-wide"> Phone </th>
            <th className="px-6 py-3 uppercase tracking-wide"> Email </th>
            <th className="px-6 py-3 uppercase tracking-wide"> Action </th>
          </thead>
          {!loading && employees.length > 0 ? (
            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-white hover:text-black"
                >
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {employee.name}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {employee.phone}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    {employee.email}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <a
                      className="hover:text-green-500 hover:cursor-pointer"
                      onClick={(e, id) => editEmployee(e, employee.id)}
                    >
                      {" "}
                      Edit📝{" "}
                    </a>
                    <a
                      className="hover:text-red-500 hover:cursor-pointer"
                      onClick={(e, id) => deleteEmployee(e, employee.id)}
                    >
                      {" "}
                      Delete🗑️{" "}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center py-4">
                  {loading ? "Loading..." : "No employees found."}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
