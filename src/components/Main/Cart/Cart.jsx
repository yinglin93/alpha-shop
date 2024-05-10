import './cart.scss';
import product1 from '../../../Assets/images/product-1.jpg'
import product2 from '../../../Assets/images/product-2.jpg'
import minus from '../../../Assets/icons/minus.svg'
import plus from '../../../Assets/icons/plus.svg'

function ProductContainer({dataCount, dataPrice, name, productImage,}) {
  return (
    <div
      className="product-container col col-12"
      data-count={dataCount}
      data-price={dataPrice}
    >
      <img className="img-container" src={productImage} alt='imgContainer' />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <object
              className="product-action minus"
              data={minus}
              aria-label='minusIcon'
            />
            <span className="product-count">{dataCount}</span>
            <object
              className="product-action minus"
              data={plus}
              aria-label='plusIcon'
            />
          </div>
        </div>
        <div className="price">{'$' + dataPrice}</div>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={0}>
          <ProductContainer 
            dataCount = {0}
            dataPrice = {3999}
            name = '破壞補丁修身牛仔褲'
            productImage = {product1}
            />
          <ProductContainer 
            dataCount = {0}
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