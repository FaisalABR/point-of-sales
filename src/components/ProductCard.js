import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCart } from "../store/actions/product";

// untuk membuat container card
const Card = styled.div`
  width: 17%;
  height: 12rem;
  cursor: pointer;
`;

// menstyling gambar card
const CardImg = styled.img`
  width: 100%;
  height: 50%;
`;

// menstyling info product
const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCard = ({ item }) => {
  // menginisiatikan dispatch untuk mengirimkan action ke reducer
  const dispatch = useDispatch();

  // function untuk menambahkan item di cart dengan cara mengklik gambar product
  const addToCart = (id) => {
    dispatch(addCart(id));
  };
  return (
    <Card key={item.id} onClick={() => addToCart(item.id)}>
      <CardImg src={item.image} alt={item.name} />
      <NamePrice>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </NamePrice>
    </Card>
  );
};

export default ProductCard;
