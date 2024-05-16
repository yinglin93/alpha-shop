import minus from '../../../Assets/icons/minus.svg'
import plus from '../../../Assets/icons/plus.svg'
import './quantityBtn.scss'

function QuantityBtn({dataCount, setDataCount, quantity}) {
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

  return (
    <div className="product-control">
      <button className="product-action minus" onClick={handleSubstract}>
        <img src={minus} alt="minisIcon" />
      </button>
      <span className="product-count">{quantity}</span>
      <button className="product-action minus" onClick={handleAdd}>
        <img src={plus} alt="plusIcon" />
      </button>
    </div>
  );
}

export default QuantityBtn;