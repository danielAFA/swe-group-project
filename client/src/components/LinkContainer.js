import React from "react";

const LinkContainer = ({ roleLinks }) => (
  <div>
    <label>{roleLinks.title} links:</label>
    {roleLinks.links.map((link, index) => (
      <div key={index}>
        <a href={link.url}>{link.display_name}</a>
      </div>
    ))}
  </div>
);

export default LinkContainer;
