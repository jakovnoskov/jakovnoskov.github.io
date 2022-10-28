import React, { useState, useEffect } from 'react'
import './contacts.scss'


export default function Contacts() {


  return (
    <>

      <div className="m-header-landscape">
        <div className="text-wrapper">
          <h1 className="title-s-page">Контакты</h1>
          <h2 className="subtitle-s-page"></h2>
        </div>
      </div>


      <div className="contact-modul">

        <div className="contact-modul-item">
          <div className="contact-modul-item-wrapper">

            <div className="contact-modul-info">
              <div className="contact-option-info">
                <a className="cmi-link" href="https://t.me/someonesess" target="_blank">Написать в Telegram</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="contact-modul-item">
          <div className="contact-modul-item-wrapper">

            <div className="contact-modul-info">
              <div className="contact-option-info">
                <a className="cmi-link" href="mailto:jakovnoskov@hotmail.com" target="_blank">емейл</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-modul-item">
          <div className="contact-modul-item-wrapper">

            <div className="contact-modul-info">
              <div className="contact-option-info">
                <a className="cmi-link" href="https://github.com/jakovnoskov/" target="_blank">гитхаб</a>
              </div>
            </div>
          </div>
        </div> */}


        <div className="contact-modul-item-end"><div className="m-list-end"></div></div>

      </div>


      <div className="contact-modul contact-lincs">

        <div className="contact-modul-item">
          <div className="contact-modul-item-wrapper">
            <div className="contact-modul-info">
              <div className="contact-option-info">
                <a className="cmi-link" href="mailto:jakovnoskov@hotmail.com" target="_blank">емейл</a>
              </div>

              <div className="contact-option-info">
                <a className="cmi-link" href="https://github.com/jakovnoskov/" target="_blank">гитхаб</a>
              </div>

            </div>
          </div>
        </div>



      </div>



    </>
  )
}