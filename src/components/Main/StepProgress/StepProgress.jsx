import './StepProgress.scss';
import completeIcon from '../../../Assets/icons/pg-complete.svg'

function ProgressGroup({progressLabel, phase, dataPhase, shopPhase}) {
  return (
    <>
      <span className="progress-group" data-phase={dataPhase}>
        <span className="progress-icon">
          {shopPhase > phase ?
          (<img className='icon' src={completeIcon} alt='completeIcon'/>) : 
          (<span className="text" 
            style={{color: shopPhase === phase? '#2A2A2A' : '#AFB1BD', 
                    borderColor: shopPhase === phase? '#2A2A2A' : '#AFB1BD'}}>
            {phase}
            </span>)}
        </span>
        <span className="progress-label" style={{color: shopPhase === phase ? '#2A2A2A' : '#AFB1BD'}}>{progressLabel}</span>
      </span>
    </> 
  );
}

function ProgressBar({dataOrder, shopPhase}) {
  return (
    <span 
      className="progress-bar" 
      data-order={dataOrder} 
      style={{borderColor: shopPhase >= dataOrder ? '#000000' : '#F0F0F5'}}
    />
  );
}

function StepProgress({shopPhase}) {
  return (
    <> 
      <section className="progress-container col col-12">
        <ProgressGroup progressLabel='寄送地址' phase={1} dataPhase='address' shopPhase={shopPhase}/>
        <ProgressBar dataOrder='1' shopPhase={shopPhase}/>
        <ProgressGroup progressLabel='運送方式' phase={2} dataPhase='shipping' shopPhase={shopPhase}/>
        <ProgressBar dataOrder='2' shopPhase={shopPhase}/>
        <ProgressGroup progressLabel='付款資訊' phase={3} dataPhase='credit-card' shopPhase={shopPhase}/>
      </section>
    </>
  );
}

export default StepProgress;