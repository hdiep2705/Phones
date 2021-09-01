import React from 'react'


import call from './icon/call.svg'
import home from './icon/home.svg'
import mail from './icon/mail.svg'

import facebook from './icon/facebook.svg'
import insta from './icon/insta.svg'
import twitter from './icon/twitter.svg'
import telegram from './icon/telegram.svg'

function Footer() {

    return (
        <div className="foter">
            <br /><br /><hr /><br />
            <div className="footer">
                <div className="logo">
                    <h1>
                        <a href="/">Zin Shop</a>
                    </h1>
                    <br/><h2>About Shop</h2>
                    <pre>    
                        <address>
                            Written by Diep.<br /> 
                            Visit us at:<br />
                            Example.com<br />
                            Box 564, Disneyland<br />
                            VN
                            </address>
                    </pre>
                </div>

                <div className="contact">
                    <h2>Contact us</h2><br />
                    <div className="home">
                        <img className="icon" src={home} alt="" width="30" />
                        <span>Học Viện Nông Nghiệp Việt Nam</span>
                    </div><br />

                    <div className="call">
                        <img className="icon" src={call} alt="" width="30" />
                        <span>  +84 394112056</span>
                    </div><br />

                    <div className="mail">
                        <img className="icon" src={mail} alt="" width="30" />
                        <span> hdiep2705@gmail.com</span>
                    </div>
                </div>

                <div className="follow">
                    <h2>Follow us</h2>
                    <div className="fitt">
                        <a href="https://www.facebook.com/" target="blank">
                            <img src={facebook} alt="" width="30" />
                        </a>

                        <a href="https://www.instagram.com/" target="blank">
                            <img src={insta} alt="" width="30" />
                        </a>

                        <a href="https://www.twitter.com/" target="blank">
                            <img src={twitter} alt="" width="30" />
                        </a>

                        <a href="https://www.telegram.org/" target="blank">
                            <img src={telegram} alt="" width="30" />
                        </a>
                    </div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.7549869935847!2d105.93301252486715!3d21.004875631835716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a8d22485051d%3A0x5cb2530a1a6b6c0!2zSOG7jWMgVmnhu4duIE7DtG5nIE5naGnhu4dwIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1622454005885!5m2!1svi!2s"  width="300" height="200" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
            
            </div>

            <div className="copyright">
                <hr/>
                <p className="content">© 2021 - Copyright by hoangdiep. All Rights Reserved.</p>
            </div>
        </div>
           
    )
}

export default Footer