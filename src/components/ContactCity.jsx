import React from 'react';

const ContactCity = ({name, street, postCode, phone}) => {

  const phoneNumberForHref = `tel:${phone}`

  return ( 
    <>
      <div className="contact__city">
        <h3 className="contact__city-name">{name}</h3>
      </div>
      <div className="contact__box">
        <div className="contact__box-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3 className="contact__box-item-title">Adres</h3>
          <p className="contact__box-item-text">{street} <br/> {postCode}</p>
        </div>
        <div className="contact__box-item">
          <i className="fas fa-phone-square"></i>
          <h3 className="contact__box-item-title">Rezerwacje</h3>
          <a className="contact__box-item-phone" href={phoneNumberForHref}>TEL : <br/> {phone}</a>
        </div>
        <div className="contact__box-item wide">
          <h3 className="contact__box-item-title">Godziny otwarcia</h3>
          <p className="contact__box-item-text">Poniedziałek - Piątek <br/> 10:00 - 18:00</p>
          <p className="contact__box-item-text">Sobota<br/> 10:00 - 14:00</p>                        
        </div>
      </div>
    </>
   );
}
 
export default ContactCity;