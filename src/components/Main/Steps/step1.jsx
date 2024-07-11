import { InputGroup, InputGroupContainer, InputText, InputSelect } from './InputGroup';
import { cities, genders } from './Options.js' 
import { FormBody, FormTitle } from './FormStyle.jsx';

function Step1() {
  return (
    <>
      <form className="col col-12" data-phase="address">
        <FormTitle>寄送地址</FormTitle>
        <FormBody>
          <InputGroupContainer>
            <InputGroup inputLabel='稱謂' width='col-3'>
              <InputSelect options={genders} optionLabel='請選擇性別'/>
            </InputGroup>
            <InputGroup inputLabel='姓名' width='col-6'>
              <InputText placeHolder='請輸入姓名'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='電話' width='col-5'>
              <InputText placeHolder='請輸入行動電話'/>
            </InputGroup>
            <InputGroup inputLabel='Email' width='col-5'>
              <InputText placeHolder='請輸入電子郵件'/>
            </InputGroup>
          </InputGroupContainer>
          <InputGroupContainer>
            <InputGroup inputLabel='縣市' width='col-3'>
              <InputSelect options={cities} optionLabel='請選擇縣市'/>
            </InputGroup>
            <InputGroup inputLabel='地址' width='col-6'>
              <InputText placeHolder='請輸入地址'/>
            </InputGroup>
          </InputGroupContainer>
        </FormBody>
      </form>
    </>
  );
}

export default Step1