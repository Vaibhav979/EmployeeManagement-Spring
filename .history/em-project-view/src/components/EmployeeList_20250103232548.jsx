import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import E

const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState();
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
  });
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
          <tbody>
            {employees.map((employee) => (
              <tr className="hover:bg-white hover:text-black">
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
                  <a href=""> Edit📝 </a>
                  <a href=""> Delete🗑️ </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
