import React from 'react';

import ServicesContentBox from '../components/ServicesContentBox';

import servicesColouringImg from '../img/services-colouring.jpg'
import servicesWomanShearingImg from '../img/services-woman-shearing.jpg'
import servicesKeratinImg from '../img/services-keratin.jpg'
import servicesDecolouringImg from '../img/services-decolouring.jpg'
import servicesCareImg from '../img/services-care.jpg'
import servicesMesotherapyImg from '../img/services-mesotherapy-to-fix.jpg'
import servicesStylingImg from '../img/services-styling-to-fix.jpg'
import servicesExtensionImg from '../img/services-extension.jpeg'

const servicesContentBoxesData = [
  {
    img: servicesColouringImg,
    header: 'Koloryzacja',
    text: 'Profesjonalne farbowanie dopasowane do Twoich potrzeb',
    toRef: '/services/colouring'
  },
  {
    img: servicesWomanShearingImg,
    header: 'Strzyżenie i stylizacje',
    text: 'Zachwycaj piękną fryzurą odzwierciedlającą Twój styl i charakter',
    toRef: '/services/shearing'
  },
  {
    img: servicesKeratinImg,
    header: 'Wygładzanie keratynowe',
    text: 'Miękkie, lśniące, silne i elastyczne włosy na wyciągnięcie ręki',
    toRef: '/services/keratin'
  },
  {
    img: servicesDecolouringImg,
    header: 'Dekoloryzacja',
    text: 'Chciałabyś wrócić do naturalnej barwy włosów? My wiemy jak Ci w tym pomóc',
    toRef: '/services/decolouring'
  },
  {
    img: servicesCareImg,
    header: 'Pielęgnacja',
    text: 'Skorzystaj z naszej bogatej oferty zabiegów regeneracyjnych',
    toRef: '/services/care'
  },
  {
    img: servicesMesotherapyImg,
    header: 'Mezoterapia skóry głowy',
    text: 'Prawdziwa rewolucja w walce ze słabymi, wypadającymi włosami',
    toRef: '/services/mesotherapy'
  },
  {
    img: servicesStylingImg,
    header: 'Styling',
    text: 'Niezawodny, bezinwazyjny sposób na włosy cienkie i przetłuszczające się',
    toRef: '/services/styling'
  },
  {
    img: servicesExtensionImg,
    header: 'Przedłużanie i zagęszczanie włosów',
    text: 'Nie czekaj dłużej, odmień swoją fryzyrę i życie na lepsze już teraz',
    toRef: '/services/extension'
  },
]

const servicesContentBoxesToShow = servicesContentBoxesData.map(box => {
  return <ServicesContentBox key={box.header} img={box.img} header={box.header} text={box.text} toRef={box.toRef}/>
})

const ServicesContent = () => {
  return ( 
    <div className="services__content">
      {servicesContentBoxesToShow}
    </div>
   );
}
 
export default ServicesContent;