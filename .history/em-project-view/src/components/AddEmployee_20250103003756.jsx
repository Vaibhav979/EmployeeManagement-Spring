import React from "react";

const AddEmployee = () => {
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
          type="phone"
          placeholder="Phone"
        />
        <input
          className="w-full py-2 my-4 text-slate-800"
          type="email"
          placeholder="Email"
        />
      </div>

      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <button className="bg-green-400 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded">
          {" "}
          Save{" "}
        </button>
        <button> Clear </button>
        <button> Cancel </button>
      </div>
    </div>
  );
};

export default AddEmployee;
