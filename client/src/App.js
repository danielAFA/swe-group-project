import React, { useState } from "react";
import Requester from "./components/Requester";
import RoleSelection from "./components/RoleSelection";
import RoleContainer from "./components/RoleContainer";
import Logout from "./components/Logout";
import { ROLES } from "./constants";
import styled from "@emotion/styled";
import "./App.css";

const Container = styled.div``;

function App() {
  const [role, setRole] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [linkData, setLinkData] = useState();

  const Status = () => (
    <div>{role ? role + " user " : " User not "}logged in.</div>
  );

  const logOut = () => {
    setIsLoggedIn(false);
    setLinkData(null);
    setRole(null);
  };

  const logIn = role => {
    setIsLoggedIn(true);
    setRole(role);
  };

  return (
    <Container>
      <h1>Admin Portal</h1>
      <Status />
      {isLoggedIn ? (
        <div>
          <Logout logOut={logOut} />
          <Requester role={role} setLinkData={setLinkData} />
        </div>
      ) : (
        <RoleSelection roles={ROLES} logIn={logIn} />
      )}
      {linkData && <RoleContainer linkData={linkData} />}
    </Container>
  );
}
export default App;
