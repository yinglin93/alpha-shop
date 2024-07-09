import { createContext, useState } from "react";

const CartContext = createContext(null);
const initialProducts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function CartContextProvider({children}) {
  const [cartItems, setCartItems] = useState(initialProducts)
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity
  })

  function handleSubstract(productId) {
    setCartItems(cartItems.map(item => {
      if (item.id === productId && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        return {
          ...item
        };
      }
    }))
  }

  function handleAdd(productId) {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      } else {
        return {
          ...item
        };
      }
    }))
  }
  return (
    <CartContext.Provider value={{cartItems, totalPrice, handleSubstract, handleAdd}}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext }
