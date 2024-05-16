import './cart.scss';
import minus from '../../../Assets/icons/minus.svg'
import plus from '../../../Assets/icons/plus.svg'
import { useState } from 'react'

const product = [
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



function ProductContainer({ dataCount, setDataCount }) {
  // fix btn function later 
  const handleSubstract = () => {
    console.log(dataCount)
    if (dataCount >= 1) {
      setDataCount(dataCount-1)
    } 
  }
  const handleAdd = () => {
    setDataCount(dataCount+1)
  }

  const productList = product.map(item =>
    <div className="product-container col col-12" key={item.id}>
      <img className="img-container" src={item.img} alt='imgContainer' />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button className="product-action minus" onClick={handleSubstract}>
              <img src={minus} alt="minisIcon" />
            </button>
            <span className="product-count">{item.quantity}</span>
            <button className="product-action minus" onClick={handleAdd}>
              <img src={plus} alt="plusIcon" />
            </button>
          </div>
        </div>
        <div className="price">{'$' + item.price}</div>
      </div>
    </div>  
  );

  return <>{productList}</> ;
}


function Cart() {
  const [dataCount, setDataCount] = useState(0)

  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <ProductContainer dataCount={dataCount} setDataCount={setDataCount}/>
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">$0</div>
        </section>
      </section>
    </>
  );
}


export default Cart