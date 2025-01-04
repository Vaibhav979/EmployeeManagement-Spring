import React from "react";

const EmployeeList = () => {
    const 
  return (
    <div className="container mx-40 my-8">
      <div>
        <button 
        onClick={()=>navigator}
        className="bg-slate-600 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded">
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
            <tr className="hover:bg-white hover:text-black">
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                Coding Wallah{" "}
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                89897948{" "}
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                codingWallah@gmail.com{" "}
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <a href=""> Edit📝 </a>
                <a href=""> Delete🗑️ </a>
              </td>
            </tr>
            <tr className="hover:bg-white hover:text-black">
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                Coding Wallah{" "}
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                89897948{" "}
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                codingWallah@gmail.com{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
