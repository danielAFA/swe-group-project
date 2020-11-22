import React from "react";
import LinkContainer from "./LinkContainer";

const RoleContainer = ({ linkData }) => {
  return (
    <div>
      {linkData.map((roleLinks, i) => (
        <LinkContainer key={i} roleLinks={roleLinks} />
      ))}
    </div>
  );
};

export default RoleContainer;
