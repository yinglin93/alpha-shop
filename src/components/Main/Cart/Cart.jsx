import './cart.scss';
import product1 from '../../../Assets/images/product-1.jpg'
import product2 from '../../../Assets/images/product-2.jpg'
import minus from '../../../Assets/icons/minus.svg'
import plus from '../../../Assets/icons/plus.svg'
import {useState} from 'react'

function ProductContainer({ dataCount, setDataCount, dataPrice, name, productImage }) {
  const handleSubstract = () => {
    if (dataCount >= 1) {
      setDataCount(dataCount-1)
    } 
  }
  const handleAdd = () => {
    setDataCount(dataCount+1)
  }
  return (
    <div
      className="product-container col col-12"
      data-price={dataPrice}
    >
      <img className="img-container" src={productImage} alt='imgContainer' />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <button className="product-action minus" onClick={handleSubstract}>
              <img src={minus} alt="minisIcon" />
            </button>
            <span className="product-count">{dataCount}</span>
            <button className="product-action minus" onClick={handleAdd}>
              <img src={plus} alt="plusIcon" />
            </button>
          </div>
        </div>
        <div className="price">{'$' + dataPrice}</div>
      </div>
    </div>
  );
}


function Cart() {
  const [dataCount, setDataCount] = useState(0)

  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <ProductContainer 
            dataCount = {dataCount}
            setDataCount = {setDataCount}
            dataPrice = {3999}
            name = '破壞補丁修身牛仔褲'
            productImage = {product1}
            />
          <ProductContainer 
            dataCount = {dataCount}
            setDataCount = {setDataCount}
            dataPrice = {1299}
            name = '刷色直筒牛仔褲'
            productImage = {product2}
            />
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