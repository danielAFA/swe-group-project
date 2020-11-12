import React from "react";

const LinkContainer = ({ role, linkData }) => (
  <div>
    <label>{role} links:</label>
    {linkData.map((link, index) => (
      <div key={index}>
        <a href={link.url}>{link.title}</a>
      </div>
    ))}
  </div>
);

export default LinkContainer;