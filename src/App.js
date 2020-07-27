import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Navbar from "./components/Appbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <UserForm />
      </div>
    </>
  );
}

export default App;
