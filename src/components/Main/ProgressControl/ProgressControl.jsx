import './progressControl.scss';
import rightArrow from '../../../Assets/icons/right-arrow.svg'
import leftArrow from '../../../Assets/icons/left-arrow.svg'
import { useContext } from 'react';
import { CardContext } from '../CardContext';

function PreStep({shopPhase, setShopPhase}){
  const goPreStep = () => {
    if (shopPhase > 1) {
      setShopPhase(shopPhase-1);
    }
  }

  return (
    <button className="prev" onClick={goPreStep}>
      <object
        data={leftArrow} 
        className="cursor-point" aria-label="leftArrow"
      ></object>
      上一步
    </button>
  );
}

function NextStep({nextStep, shopPhase, setShopPhase}){
  const { handleSubmit } = useContext(CardContext)
  const goNextStep = (e) => {
    handleSubmit(e);
    if (shopPhase < 3) {
      setShopPhase(shopPhase+1);
    }
  }

  return (
    <button className="next" onClick={(e) => goNextStep(e)}>
      {nextStep}
      <object
        data={rightArrow}
        className="cursor-point" aria-label="rightArrow"
      ></object>
    </button>
  )
}

function ProgressControl({shopPhase, setShopPhase}) {
  return ( 
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12">
        {shopPhase === 1 &&
         <NextStep 
          nextStep = "下一步" 
          shopPhase={shopPhase} 
          setShopPhase={setShopPhase}
          />
        }
        {shopPhase === 2 && 
          <><PreStep 
            shopPhase={shopPhase} 
            setShopPhase={setShopPhase}
            />
            <NextStep 
            nextStep = "下一步" 
            shopPhase={shopPhase} 
            setShopPhase={setShopPhase}
            />
          </>
        }
        {shopPhase === 3 && 
          <><PreStep 
            shopPhase={shopPhase} 
            setShopPhase={setShopPhase}
            />
            <NextStep 
            nextStep = "確認下單" 
            shopPhase={shopPhase} 
            setShopPhase={setShopPhase}
            />
          </>
        }
       </section> 
    </section>
  );
}

export default ProgressControl