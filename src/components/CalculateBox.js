import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import { reset } from "../store/actions/product";

// membuat container calculate box
const Box = styled.div`
  width: 20rem;
  height: 10rem;
  position: fixed;
  bottom: 0;
  box-shadow: 1px 1px 10px 1px #ccc;
  margin-left: -0.4rem;
  padding: 0.4rem;
`;

// membuat container total
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

// membuat container pay
const Pay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  input[type="number"] {
    border: none;
    border-bottom: 1px solid #000;
    text-align: right;
    &:focus {
      outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outter-spin-button {
      -webkit-appearance: none;
    }
  }
`;

// membuat container kembalian
const Change = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;

// membuat container button
const BtnBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const CalculateBox = () => {
  // mengambil data carts dari store
  const carts = useSelector((state) => state.product.carts);
  const dispatch = useDispatch();
  // function untuk men-total harga yang ada di cart item
  const total = carts.reduce(
    (amountPrice, currentPrice) => amountPrice + currentPrice.price,
    0
  );
  // membuat state pay dengan nilai default ""
  const [pay, setPay] = useState("");
  // membuat function handle change input number
  const handleChange = (e) => {
    setPay(e.target.value);
  };
  // membuat state kembalian
  const [change, setChange] = useState("");
  // membuat function untuk menghitung kembalian
  const calculateChange = () => {
    // jika uang bayar lebih besar dari total harga di cart maka lakukan hitung kembalian
    if (pay > total) {
      setChange(pay - total);
    }
  };

  // function untuk mereset cart
  const resetPay = () => {
    // membuat jumlah bayar jadi 0
    setPay("");
    // membuat kembalian jadi 0
    setChange("");
    // mengirimkan action reset dengan payload banyaknya barang di cart ditambah 1
    dispatch(reset(carts.length + 1));
  };

  return (
    <Box>
      <Total>
        <p>Total</p>
        <p>{total}</p>
      </Total>
      <Pay>
        <p>Jumlah Bayar</p>
        <input type="number" value={pay} onChange={handleChange} />
      </Pay>
      <Change>
        <p>Kembalian</p>
        <p>{change}</p>
      </Change>
      <BtnBox>
        <Button action={resetPay} />
        <Button primary action={calculateChange} />
      </BtnBox>
    </Box>
  );
};

export default CalculateBox;
