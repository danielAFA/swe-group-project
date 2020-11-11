import React, { useState } from "react";
import Connect from "./components/Connect";
import RoleSelection from "./components/RoleSelection";
import "./App.css";

function App() {
  const [role, setRole] = useState();
  return (
    <div>
      <h1>Admin Portal</h1>
      <RoleSelection setRole={setRole} />
      <Connect />
      <div>User {role ? " role: " + role : "has not logged in"}.</div>
    </div>
  );
}
export default App;
