import './step3.scss';
import { InputGroup, InputGroupContainer, InputText } from './InputGroup';

function Step3() {
  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <InputGroupContainer>
            <InputGroup inputLabel='持卡人姓名' width='col-6'>
              <InputText placeHolder='John Doe'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='卡號' width='col-6'>
              <InputText placeHolder='1111 2222 3333 4444'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='有效期限' width='col-5'>
              <InputText placeHolder='MM/YY'/>
            </InputGroup>
            <InputGroup inputLabel='CVC / CCV' width='col-5'>
              <InputText placeHolder='123'/>
            </InputGroup>
          </InputGroupContainer>
        </section>
      </form>
    </>
  );
}

export default Step3
