import './index.css';
// 引入基本 scss 設定
import "./styles/reset.scss";
import "./styles/base.scss";

import Header from './components/Header/Header'
import MainPage from './components/Main/MainPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App