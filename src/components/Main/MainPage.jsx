import styled from 'styled-components'
import StepProgress from './StepProgress/StepProgress.jsx'
import Form from './Steps/Form.jsx'
import Cart from './Cart/Cart.jsx'
import ProgressControl from './ProgressControl/ProgressControl.jsx'

import { useState } from 'react';

const SiteMain = styled.main`
  margin-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: inherit;
`
const MainContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`
const RegisterTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #2A2A2A;
`

function MainPage() {
  const [shopPhase, setShopPhase] = useState(1);

  return (
  <>
    <SiteMain>
      <MainContainer>
        <section className="register-container col col-lg-6 col-sm-12" data-totalprice="0">
          <RegisterTitle className = 'col col-12'>結帳</RegisterTitle>
          <StepProgress shopPhase={shopPhase}/>
          <Form shopPhase={shopPhase}/>
        </section>
        <Cart/>
        <ProgressControl shopPhase={shopPhase} setShopPhase={setShopPhase}/>
      </MainContainer>
    </SiteMain>
  </>
  );
}

export default MainPage