import logo from '../../Assets/icons/logo.svg'
import facebookIcon from '../../Assets/icons/facebook.svg'
import instagramIcon from '../../Assets/icons/instagram.svg'
import whatsappIcon from '../../Assets/icons/whatsapp.svg'
import './footer.scss'

function FooterSection({sectionTitle, children}) {
  return (
    <section className="footer-section">
      <h2 className="section-title">{sectionTitle}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

function SocialLink({data, ariaLabel}){
  return (
    <object
      data={data}
      className="social-icon cursor-point" aria-label={ariaLabel}
    ></object>
  );
}

function PageLink({page, url}){
  return (
    <a className="page-link" href={url}>
      {page}
    </a>
  );
}

function Footer (){
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <section className="footer-section">
          <div className="footer-logo-container">
            <img src={logo} className="cursor-point" alt='logo'/>
          </div>
        </section>
        <FooterSection sectionTitle='客戶服務'>
          <PageLink page='運送說明' url=''/>
          <PageLink page='退換貨相關' url=''/>
          <PageLink page='付款資訊' url=''/>
          <PageLink page='FAQ' url=''/>
        </FooterSection>
        <FooterSection sectionTitle='關於我們'>
          <PageLink page='品牌故事' url=''/>
          <PageLink page='媒體聯繫' url=''/>
          <PageLink page='Press kit' url=''/>
        </FooterSection>
        <FooterSection sectionTitle='資訊'>
          <PageLink page='隱私權政策' url=''/>
          <PageLink page='Cookie' url=''/>
          <PageLink page='GDPR' url=''/>
        </FooterSection>
        <FooterSection sectionTitle='追蹤ALPHA Shop'>
          <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <SocialLink 
                data = {facebookIcon}
                ariaLabel = 'facebook'
              />
              <SocialLink 
                data = {instagramIcon}
                ariaLabel = 'instagram'
              />
              <SocialLink 
                data = {whatsappIcon}
                ariaLabel = 'whatsapp'
              />
            </div>
        </FooterSection>
      </div>
    </footer>
  );
}

export default Footer