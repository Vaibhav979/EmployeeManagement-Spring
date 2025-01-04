import React from "react";

const AddEmployee = () => {
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>Add New Employee</p>
      </div>

      <div className="mx-10 my-2">
        <input className="w-full py-2 my-" type="text" placeholder="Name" />
        <input type="phone" placeholder="Phone" />
        <input type="email" placeholder="Email" />
      </div>

      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <button> Save </button>
        <button> Clear </button>
        <button> Cancel </button>
      </div>
    </div>
  );
};

export default AddEmployee;
