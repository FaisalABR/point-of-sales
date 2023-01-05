import React, { useState } from "react";
import styled from "styled-components";

const Menu = styled.li`
  height: 2rem;
  padding-left: 0.3rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.grey};
  position: relative;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:nth-child(2) {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.light};
  }
`;

const ListMenu = () => {
  const [menu] = useState(["Favorit", "Makanan", "Minuman", "Cemilan"]);
  return (
    <ul>
      {menu.map((item, index) => (
        <Menu key={index}>{item}</Menu>
      ))}
    </ul>
  );
};

export default ListMenu;
