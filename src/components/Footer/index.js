import React from "react";

import footerStyles from "./Footer.module.css";

import LogoFooter from "../../assets/img/logoFooter.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Youtube from "../../assets/img/youtube.svg";
import Mastercard from "../../assets/img/mastercard.svg";
import Visa from "../../assets/img/visa.svg";
import ApplePay from "../../assets/img/applePay.svg";
import GooglePay from "../../assets/img/googlePay.svg";

export default function Footer() {
  return (
    <footer>
      <div className={footerStyles.logoContainer}>
        <img src={LogoFooter} alt="logo" />
      </div>
      <div className={footerStyles.infoContainer}>
        <section className={footerStyles.about}>
          <h2 className={footerStyles.title}>Sobre KIBUS</h2>
          <p>
            Lorem ipsum dolor sit amet, to create consectetur adipiscing elit,
            sed do the eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </section>
        <section className={footerStyles.politics}>
          <div className={footerStyles.politicsTop}>
            <h2 className={footerStyles.title}>Políticas</h2>
            <p>Políticas de Privacidad</p>
            <p>Condiciones de uso</p>
            <p>Cookies</p>
            <p>FAQ</p>
          </div>
          <div className={footerStyles.politicsBottom}>
            <h2 className={footerStyles.title}>Contáctenos</h2>
            <p>Location</p>
            <p>Teléfono</p>
          </div>
        </section>
        <section className={footerStyles.social}>
          <div className={footerStyles.socialLogoContainer}>
            <img src={Facebook} alt="facebook" />
          </div>
          <div className={footerStyles.socialLogoContainer}>
            <img src={Instagram} alt="instagram" />
          </div>
          <div className={footerStyles.socialLogoContainer}>
            <img src={Youtube} alt="youtube" />
          </div>
        </section>
        <section className={footerStyles.payment}>
          <h2 className={footerStyles.title}>Métodos de pago</h2>
          <div className={footerStyles.paymentLogosContainer}>
            <div className={footerStyles.paymentLogoContainer}>
              <img src={Mastercard} alt="mastercard" />
            </div>
            <div className={footerStyles.paymentLogoContainer}>
              <img src={Visa} alt="visa" />
            </div>
            <div className={footerStyles.paymentLogoContainer}>
              <img src={ApplePay} alt="applePay" />
            </div>
            <div className={footerStyles.paymentLogoContainer}>
              <img src={GooglePay} alt="googlePay" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
