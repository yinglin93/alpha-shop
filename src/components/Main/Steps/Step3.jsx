import './step3.scss';

function InputGroupContainer ({children}) {
  return (
    <>
      <div className="col col-12">
        {children}
      </div>
    </>
  );
}
function InputGroup({imputLabel, placeHolder}){
  return (
    <>
      <div className="input-group input-w-lg-4 input-w-sm-full">
        <div className="input-label">{imputLabel}</div>
        <input type="text" placeholder={placeHolder} />
      </div>
    </>
  );
}

function Step3() {
  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <InputGroupContainer>
            <InputGroup inputLabel='持卡人姓名' placeHolder='John Doe' />
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='卡號' placeHolder='1111 2222 3333 4444' />
          </InputGroupContainer>
          <InputGroupContainer>
            <inputGroup inputLabel='有效期限' placeHolder='MM/YY' />
            <inputGroup inputLabel='CVC / CCV' placeHolder='123'/>
          </InputGroupContainer>
        </section>
      </form>
    </>
  );
}

export default Step3
