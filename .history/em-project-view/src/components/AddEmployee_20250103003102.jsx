import React from "react";

const AddEmployee = () => {
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <p>AddEmployee</p>
      <input type="text" placeholder="Name" />
      <input type="phone" placeholder="Phone" />
      <input type="email" placeholder="Email" />
      <button> Save </button>
      <button> Clear </button>
      <button> Cancel </button>
    </div>
  );
};

export default AddEmployee;
