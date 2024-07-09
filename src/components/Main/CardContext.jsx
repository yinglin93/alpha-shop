import { createContext, useState, useContext } from "react";
import { CartContext } from "./Cart/CartContext";

const CardContext = createContext(null)

function CardContextProvider({ children }) {
  const {totalPrice} = useContext(CartContext)
  // console.log('totalPrice from CartContext:', totalPrice);
  const [CardInfo, setCardInfo] = useState({
    cardOwnerName: '',
    cardNumber: '',
    cardExpDate: '',
    cardCCVNumber: '',
  })
  
  const handleChange = (e) => {
    const { name, value} = e.target;
    setCardInfo({
      ...CardInfo,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted.')
    console.log(`
      持卡人姓名: ${CardInfo.cardOwnerName}
      卡號: ${CardInfo.cardNumber}
      有效期限: ${CardInfo.cardExpDate}
      CCV: ${CardInfo.cardCCVNumber}
      總價: $${totalPrice}
      `)
  }

  return (
    <CardContext.Provider value={{CardInfo, handleChange, handleSubmit}}>
      {children}
    </CardContext.Provider>
  )

}

export {CardContext, CardContextProvider}