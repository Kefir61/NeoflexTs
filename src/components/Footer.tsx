import React from 'react'
import language from '../assets/icons/language.svg'
import vk from '../assets/icons/VK.svg'
import telegram from '../assets/icons/Telegram.svg'
import whatsapp from '../assets/icons/Whatsapp.svg'
function Footer() {
     return (
          <footer className="footer">
               <div className="footer__container">
                    <div className="logo">QPICK</div>
                    <div className="footer__menu">
                         <div className="footer__menu--links">
                              <a href="">Избранное</a>
                              <a href="">Корзина</a>
                              <a href="">Контакты</a>
                         </div>
                         <div className="footer__menu--links">
                              <a href="">Условия сервиса</a>
                              <div className="languages">
                                   <img src={language} alt=""></img>
                                   <button className="languages__item active--language">Рус</button>
                                   <button className="languages__item">Eng</button>
                              </div>
                         </div>
                    </div>
                    <div className="footer__links">
                         <div className="footer__links-conteiner">
                              <a href=""><img src={vk} alt=""></img></a>
                              <a href=""><img src={telegram} alt=""></img></a>
                              <a href=""><img src={whatsapp} alt=""></img></a>
                         </div>
                    </div>
               </div>
          </footer>
     )
}

export default Footer