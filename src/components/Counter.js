import React from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
  width: 1.2rem;
  background: ${(props) => props.theme.secondary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Counter = ({ inc, dec, id }) => {
  if (inc) {
    return <CounterStyle onClick={() => inc(id)}>+</CounterStyle>;
  } else {
    return <CounterStyle onClick={() => dec(id)}>-</CounterStyle>;
  }
};

export default Counter;
