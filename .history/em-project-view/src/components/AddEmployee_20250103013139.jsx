import React from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>Add New Employee</p>
      </div>

      <div className="mx-10 my-2">
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="tel"
          placeholder="Phone"
        />
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="flex my-4 space-x-4 py-4 px-20">
        <button 
        className="bg-green-400 hover:bg-green-700 px-6 py-2 rounded">
          {" "}
          Save{" "}
        </button>
        <button className="bg-blue-400 hover:bg-blue-700 px-6 py-2 rounded">
          {" "}
          Clear{" "}
        </button>
        <button className="bg-red-400 hover:bg-red-700 px-6 py-2 rounded">
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
