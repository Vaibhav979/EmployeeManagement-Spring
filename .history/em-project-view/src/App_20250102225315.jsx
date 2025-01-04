import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-800 flex h-16 px-16 items-center">
        <h1 className="text-3xl font-bold underline">EM Service Incharge</h1>
        <div className="space-x-4 ml-auto">
          <a className="hover:text-blue-400" href="/">
            {" "}
            Home{" "}
          </a>
          <a className="hover:text-blue-400" href="/">
            {" "}
            Profile{" "}
          </a>
          <a className="hover:text-blue-400" href="/">
            {" "}
            Logout
          </a>
        </div>
      </div>

      <div className="container mx-40 my-8">
        <div>
          <button className="bg-slate-600 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded">
            Add Employee
          </button>
        </div>

        <div>
          <table className="shadow">
            <thead className="bg-slate-600">
              <th className="px-6 py-3 uppercase tracking-wide"> Name </th>
              <th> Phone </th>
              <th> Email </th>
            </thead>
            <tbody>
              <th> Coding Wallah </th>
              <th> 89897948 </th>
              <th> codingWallah@gmail.com </th>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
