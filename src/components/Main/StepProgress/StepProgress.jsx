import './StepProgress.scss';
import completeIcon from '../../../Assets/icons/pg-complete.svg'

function StepProgress({shopPhase}) {
  return (
    <> 
      <section className="progress-container col col-12">
        <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            {/* {shopPhase>1? <span className="text"><completeIcon/></span> : <span className="text">1</span>} */}
            <span className="complete"><completeIcon/></span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" data-order={1} />
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">{shopPhase > 2 ? completeIcon : 2}</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" data-order={2} />
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">{shopPhase > 3 ? completeIcon : 3}</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section>
    </>
  );
}

export default StepProgress;