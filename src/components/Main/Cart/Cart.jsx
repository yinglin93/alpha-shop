import './cart.scss';
import QuantityBtn from './QuantityBtn'
import { useState } from 'react'

const products = [
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
  const productList = products.map(product =>
    <div className="product-container col col-12" key={product.id}>
      <img className="img-container" src={product.img} alt='imgContainer' />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-control-container">
          <QuantityBtn dataCount={dataCount} setDataCount={setDataCount} quantity={product.quantity} />
        </div>
        <div className="price">{'$' + product.price}</div>
      </div>
    </div>  
  )
  return <>{productList}</>
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