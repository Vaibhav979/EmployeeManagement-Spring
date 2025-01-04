import React from "react";

const AddEmployee = () => {
  return (
    <div className="">
      <h1>AddEmployee</h1>
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
