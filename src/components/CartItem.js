import React from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { inc, dec, removeFromCart } from "../store/actions/product";

// membuat container card
const Cart = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #ccc;
  text-align: center;
`;

// membuat container counter
const CounterContainer = styled.div`
  width: 30%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// membuat container nama
const ItemName = styled.div`
  width: 40%;
`;

// membuat container harga
const Price = styled.div`
  width: 30%;
`;

// membuat container total
const CounterTotal = styled.div`
  margin: 0 0.3rem;
`;

const CartItem = ({ item }) => {
  // membuat state total dan memberikan nilai defaultnya 1
  const [total, setTotal] = useState(1);
  const dispatch = useDispatch();

  // membuat function untk menambahkan barang dimasing-masing cart item
  const increment = (id) => {
    setTotal(total + 1);
    dispatch(inc(id));
  };

  // membuat function untuk mengurang barang di masing-maisn cart item
  const decrement = (id) => {
    setTotal(total - 1);
    if (total > 1) {
      // mengirimkan function mengurangin total dan price
      dispatch(dec(id));
    } else if (total === 1) {
      // function remove cart
      dispatch(removeFromCart(id));
    }
  };

  return (
    <Cart>
      <ItemName>{item.name}</ItemName>
      <CounterContainer>
        <Counter inc={increment} id={item.id} />
        <CounterTotal>{total}</CounterTotal>
        <Counter dec={decrement} id={item.id} />
      </CounterContainer>
      <Price>{item.price}</Price>
    </Cart>
  );
};

export default CartItem;
