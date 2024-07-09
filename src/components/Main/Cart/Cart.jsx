import './cart.scss';
import minus from '../../../Assets/icons/minus.svg'
import plus from '../../../Assets/icons/plus.svg'
import { useContext } from 'react'
import { CartContext } from './CartContext' 


function Cart() {
   const { cartItems, handleAdd, handleSubstract, totalPrice} = useContext(CartContext) 
    
    return (
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          {cartItems.map(product => (
            <div className="product-container col col-12" key={product.id}>
              <img className="img-container" src={product.img} alt='imgContainer' />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <button className="product-action minus" onClick={() => {handleSubstract(product.id)}}>
                      <img src={minus} alt="minisIcon" />
                    </button>
                    <span className="product-count">{product.quantity}</span>
                    <button className="product-action minus" onClick={() => {handleAdd(product.id)}}>
                      <img src={plus} alt="plusIcon" />
                    </button>
                  </div>
                </div>
                <div className="price">{'$' + product.price}</div>
              </div>
            </div>
            ))  
          }
        </section>
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">{'$' + totalPrice}</div>
        </section>
      </section>
    );
}


export default Cart