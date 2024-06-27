import './step1.scss';
import { InputGroup, InputGroupContainer, InputText } from './InputGroup';

const cities = [{
  id: 1,
  name: '基隆市',
  abbreviation: 'KLU'
}, {
  id: 2,
  name: '新北市',
  abbreviation: 'TPH'
}, {
  id: 3,
  name: '臺北市',
  abbreviation: 'TPE'
}, {
  id: 4,
  name: '桃園市',
  abbreviation: 'TYC'
}, {
  id: 5,
  name: '新竹縣',
  abbreviation: 'HSH'
}, {
  id: 6,
  name: '新竹市',
  abbreviation: 'HSC'
}, {
  id: 7,
  name: '苗栗市',
  abbreviation: 'MAC'
}, {
  id: 8,
  name: '苗栗縣',
  abbreviation: 'MAL'
}, {
  id: 9,
  name: '臺中市',
  abbreviation: 'TXG'
}, {
  id: 10,
  name: '彰化縣',
  abbreviation: 'CWH'
}, {
  id: 11,
  name: '彰化市',
  abbreviation: 'CWS'
}, {
  id: 12,
  name: '南投市',
  abbreviation: 'NTC'
}, {
  id: 13,
  name: '南投縣',
  abbreviation: 'NTO'
}, {
  id: 14,
  name: '雲林縣',
  abbreviation: 'YLH'
}, {
  id: 15,
  name: '嘉義縣',
  abbreviation: 'CHY'
}, {
  id: 16,
  name: '嘉義市',
  abbreviation: 'CYI'
}, {
  id: 17,
  name: '臺南市',
  abbreviation: 'TNN'
}, {
  id: 18,
  name: '高雄市',
  abbreviation: 'KHH'
}, {
  id: 19,
  name: '屏東縣',
  abbreviation: 'IUH'
}, {
  id: 20,
  name: '屏東市',
  abbreviation: 'PTS'
}, {
  id: 21,
  name: '宜蘭縣',
  abbreviation: 'ILN'
}, {
  id: 22,
  name: '宜蘭市',
  abbreviation: 'ILC'
}, {
  id: 23,
  name: '花蓮縣',
  abbreviation: 'HWA'
}, {
  id: 24,
  name: '花蓮市',
  abbreviation: 'HWC'
}, {
  id: 25,
  name: '臺東市',
  abbreviation: 'TTC'
}, {
  id: 26,
  name: '臺東縣',
  abbreviation: 'TTT'
}, {
  id: 27,
  name: '澎湖縣',
  abbreviation: 'PEH'
}, {
  id: 28,
  name: '金門縣',
  abbreviation: 'KMN'
}, {
  id: 29,
  name: '連江縣',
  abbreviation: 'LNN'
}]

function Step1() {
  return (
    <>
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body col col-12">
          <InputGroupContainer>
            <InputGroup inputLabel='稱謂' width='col-3'>
              <div className="select-container">
                <select>
                  <option value="mr" selected="">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
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
              <div className="select-container">
                <select required="">
                  <option value="">請選擇縣市</option>
                  {cities.map(city => {
                    return (
                      <option key={city.id} value={city.abbreviation}>{city.name}</option>
                    )
                  })}
                </select>
              </div>
            </InputGroup>
            <InputGroup inputLabel='地址' width='col-6'>
              <InputText placeHolder='請輸入地址'/>
            </InputGroup>
          </InputGroupContainer>
        </section>
      </form>
    </>
  );
}

export default Step1