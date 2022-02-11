import React from 'react';

import ContactCity from '../components/ContactCity';

import contactBackground from '../img/contact-background.jpg'

import '../styles/Contact.scss';

const citiesData = [
  {
    name: 'Augustów',
    street: 'ul. Żabia 5/3',
    postCode: '16-300 Augustów',
    phone: '+48 512 123 123'
  },
  {
    name: 'Suwałki',
    street: 'ul. Muzyczna 10',
    postCode: '16-400 Suwałki',
    phone: '+48 512 123 123'
  }
]

const Contact = () => {

  const citiesToShow = citiesData.map(city => {
    return <ContactCity key={city.name} name={city.name} street={city.street} postCode={city.postCode} phone={city.phone}/>
  })

  return ( 
    <section id="contact" className="section contact" style={{backgroundImage: `url(${contactBackground})`}}>
        <div className="contact__shadow"></div>
        <div className="wrapper">
            <h2 className="section__header">Kontakt</h2>
            {citiesToShow}            
        </div>
    </section>
   );
}
 
export default Contact;