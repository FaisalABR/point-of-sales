import React from "react";
import styled from "styled-components";

const Head = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4abad1;
  color: #fff;
`;

const Header = () => {
  return (
    <Head>
      <h1>Aplikasi Point of Sales</h1>
    </Head>
  );
};

export default Header;
