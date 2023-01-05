import Header from "./components/Header";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import ListMenu from "./components/ListMenu";
import CalculateBox from "./components/CalculateBox";
import * as theme from "./styled/theme";
import "./App.css";

// menstyling container App atau menjadi container utama
const Container = styled.div`
  max-width: 100vw;
  min-height: 92vh;
  display: flex;
`;

// membuat layout container menu
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`;

// membuat layout product container
const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  padding: 0.5rem 0.5rem;
  border-left: 1px solid #bcb3b3;
  border-right: 1px solid #bcb3b3;
  background: ${(props) => props.theme.light};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// membuat layout cart container
const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.4rem;
`;

const App = () => {
  // mengambil data food product menggunakan useState
  const foods = useSelector((state) => state.product.products);
  // mengambil data yang ada di carts menggunakan use State
  const carts = useSelector((state) => state.product.carts);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
        <ProductContainer>
          {/* menampilkan product food  dengan cara melooping dan memasukkan data sebagai props untuk component ProductCard */}
          {foods.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ProductContainer>
        <CartContainer>
          {/* untuk menampilkan informasi berapa banyak item yang ada di cart menggunakan conditional render */}
          <p>{carts ? `${carts.length} item in cart` : ``}</p>
          {/* menampilkan beberapa item yang sudah masuk dicard dengan cara melooping data carts yang sudah diambil */}
          {/* memasukan data cards dan menyimpannya sebagai props untuk dikirim ke component CartItem */}
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
