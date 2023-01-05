import { products } from "../../utils/data";

const initialState = {
  products: products,
  carts: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
    // case saat kita mengklik item makanan
    case "ADD_TO_CART": {
      // mencari item di product dengan id yang sama dengan yang di klik di Productcard
      const newItemCart = state.products.find((item) => item.id === payload);
      // membuat inisiasi booelan untuk mencek apakah barang yang dipilih sudah ada di cart apa blm
      const itemInCart = state.carts.find((item) => item.id === payload);

      // jika item yang dipilih tidak ada dicart
      if (!itemInCart) {
        // maka tambahkan item baru ke dalam cart
        return {
          ...state,
          carts: [...state.carts, newItemCart],
        };
      } else {
        return state;
      }
    }
    // CASE saat kita menambahkan item dengan tombol +
    case "INCREMENT": {
      // mengambil harga dari products yang sesuai dengan item yang dipilih
      const originalPrice = state.products.find(
        (item) => item.id === payload
      ).price;
      // melooping semua item yang ada di carts
      const incCarts = state.carts.map((item) => {
        // jika item yang dipilih idnya sama dengan yang ada di carts
        if (item.id === payload) {
          // maka tambahkan harganya
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        carts: incCarts,
      };
    }
    // CASE saat kita mengurangi item dengan tombol -
    case "DECREMENT": {
      // mengambil harga dari products yang sesuai dengan item yang dipilih
      const oriPrice = state.products.find((item) => item.id === payload).price;
      // melooping semua item yang ada di carts
      const decCarts = state.carts.map((item) => {
        // jika item yang dipilih idnya sama dengan yang ada di carts
        if (item.id === payload) {
          // maka kurangkan harganya
          return {
            ...item,
            price: item.price - oriPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: decCarts,
      };
    }
    // case REMOVE saat barang yang kita kurangin sudah 0
    case "REMOVE": {
      return {
        ...state,
        // filter item carts yang tidak sama dengan id yang kita ambil
        carts: state.carts.filter((item) => item.id !== payload),
      };
    }
    // case saat kita mereset
    case "RESET": {
      return {
        ...state,
        carts: state.carts.filter((item) => item.id === payload),
      };
    }
  }
};

export default productReducer;
