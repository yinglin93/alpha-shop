import './progressControl.scss';
import rightArrow from '../../../Assets/icons/right-arrow.svg'
import leftArrow from '../../../Assets/icons/left-arrow.svg'

function PreStep({shopPhase, setShopPhase}){
  const goPreStep = () => {
    if (shopPhase > 1) {
      setShopPhase(shopPhase - 1);
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
  const goNextStep = () => {
    if ({shopPhase} < 3) {
      setShopPhase({shopPhase} + 1);
    }
  }

  return (
    <button className="next" onClick={goNextStep}>
      {nextStep}
      <object
        data={rightArrow}
        className="cursor-point" aria-label="rightArrow"
      ></object>
    </button>
  )
}

function ProgressControl({shopPhase}) {
  return (
    <>
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12">
        {shopPhase === 1 && <NextStep nextStep = "下一步"/>}
        {shopPhase === 2 && <><PreStep/><NextStep nextStep = "下一步"/></> }
        {shopPhase === 3 && <><PreStep/><NextStep nextStep = "確認下單"/></>}
       </section> 
    </section>
    </>
  );
}

export default ProgressControl