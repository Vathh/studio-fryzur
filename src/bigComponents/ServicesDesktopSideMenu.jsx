import React from 'react';

import ServicesSideMenuItem from '../components/ServicesSideMenuItem';

const servicesSideMenuItemsData = [
  {
    header: 'Koloryzacja',
    toRef: '/services/colouring'
  },
  {
    header: 'Strzyżenie i stylizacje',
    toRef: '/services/shearing'
  },
  {
    header: 'Wygładzanie keratynowe',
    toRef: '/services/keratin'
  },
  {
    header: 'Dekoloryzacja',
    toRef: '/services/decolouring'
  },
  {
    header: 'Pielęgnacja',
    toRef: '/services/care'
  },
  {
    header: 'Mezoterapia skóry głowy',
    toRef: '/services/mesotherapy'
  },
  {
    header: 'Styling',
    toRef: '/services/styling'
  },
  {
    header: 'Przedłużanie i zagęszczanie włosów',
    toRef: '/services/extension'
  },
]

const servicesSideMenuItemsToShow = servicesSideMenuItemsData.map(item => <ServicesSideMenuItem key={item.header} text={item.header} toRef={item.toRef}/>)

const ServicesDesktopSideMenu = () => {
  return ( 
    <div className="services__sidemenu-desktop">                   
      <ul>
       {servicesSideMenuItemsToShow}
      </ul>                         
    </div>
   );
}
 
export default ServicesDesktopSideMenu;