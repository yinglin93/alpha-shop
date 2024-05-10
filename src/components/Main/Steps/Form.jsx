import styled from 'styled-components'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './Step3'

const FormContainer = styled.section`
  display: flex;
  margin-top: 64px;
`



function Form({shopPhase}) {
  return (
  <>
    <FormContainer>
      {shopPhase === 1 && <Step1/>}
      {shopPhase === 2 && <Step2/>}
      {shopPhase === 3 && <Step3/>}
    </FormContainer>
  </>
  );
}

export default Form
