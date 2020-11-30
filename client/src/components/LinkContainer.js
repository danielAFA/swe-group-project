import React from "react";
import styled from "@emotion/styled";

const LinkContainer = ({ roleLinks }) => {
  const Link = styled.a`
    text-decoration: none;
    &.visited {
      color: blue;
    }
  `;

  return (
    <div>
      <div>{roleLinks.title} links:</div>
      <ul>
        {roleLinks.links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>{link.display_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkContainer;
