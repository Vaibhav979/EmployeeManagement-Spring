import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-800 flex h-16 px-16 items-center">
      <h1 className="text-3xl font-bold underline">EM Service Incharge</h1>
      <div className="space-x-4 ml-auto">
        <a className="href="/"> Home </a>
        <a href="/"> Profile </a>
        <a href="/"> Logout</a>
      </div>
    </div>
  );
}

export default App;
