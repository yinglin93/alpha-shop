import { InputGroup, InputGroupContainer, InputText } from './InputGroup';
import { FormBody, FormTitle } from './FormStyle.jsx';

function Step3() {
  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <FormTitle>付款資訊</FormTitle>
        <FormBody>
          <InputGroupContainer>
            <InputGroup inputLabel='持卡人姓名' width='col-6'>
              <InputText placeHolder='John Doe' formName='cardOwnerName'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='卡號' width='col-6'>
              <InputText placeHolder='1111 2222 3333 4444' formName='cardNumber'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='有效期限' width='col-5'>
              <InputText placeHolder='MM/YY' formName='cardExpDate'/>
            </InputGroup>
            <InputGroup inputLabel='CVC / CCV' width='col-5'>
              <InputText placeHolder='123' formName='cardCCVNumber'/>
            </InputGroup>
          </InputGroupContainer>
        </FormBody>
      </form>
    </>
  );
}

export default Step3
