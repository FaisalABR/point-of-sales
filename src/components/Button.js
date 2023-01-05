import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  height: 1.7rem;
  width: 6rem;
  border: none;
  padding: 0.2rem 0.5rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(MyButton)`
  background: ${(props) => props.theme.primary};
  width: 8rem;
`;
const WarningButton = styled(MyButton)`
  background: ${(props) => props.theme.teritary};
`;

const Button = ({ primary, action }) => {
  if (primary) {
    return <PrimaryButton onClick={action}>Selesai</PrimaryButton>;
  } else {
    return <WarningButton onClick={action}>Cancel</WarningButton>;
  }
};

export default Button;
