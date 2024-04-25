import Styles from './Footer.module.css'
import Insta from  './img/instagram.jpg'
import Face from  './img/facebook.jpg'
import TikTok from  './img/tiktok.png'
import Zap from  './img/zap.png'

function Footer() {
  return (
    <div className={Styles.footer}>
      <p>Siga-nos em nossas redes socias</p>
      <div className={Styles.imgs}>
        <img src={Insta}/>
        <img src={Face}/>
        <img src={TikTok}/>
        <img src={Zap}/>
      </div>
      <p>Telefone de contato (11)9526-4890</p>
    </div>
  )
}

export default Footer