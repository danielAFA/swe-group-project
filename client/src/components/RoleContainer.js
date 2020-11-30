import React from "react";
import LinkContainer from "./LinkContainer";
import styled from "@emotion/styled";

const RoleContainer = ({ linkData }) => {
  const StyledRoleContainer = styled.div``;
  return (
    <StyledRoleContainer>
      {linkData.map((roleLinks, i) => (
        <LinkContainer key={i} roleLinks={roleLinks} />
      ))}
    </StyledRoleContainer>
  );
};

export default RoleContainer;
