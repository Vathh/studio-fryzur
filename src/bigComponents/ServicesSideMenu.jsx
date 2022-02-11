import React, {useEffect, useRef, useState } from 'react';

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

const ServicesSideMenu = () => {

  const thisRef = useRef(null);

  useOutsideAlerter(thisRef);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const isMenuVisibleHandler = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  function useOutsideAlerter(ref){
    useEffect(() => {
  
      function handleClickOutside(event){
        if(ref.current && !ref.current.contains(event.target)){
          setIsMenuVisible(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  
    }, [ref]);
  }

  return ( 
    <div ref={thisRef} className="services__sidemenu" onClick={isMenuVisibleHandler} style={isMenuVisible ? {transform: 'translateX(0)'} : {transform: 'translateX(-150px)'}}>                   
      <ul>
       {servicesSideMenuItemsToShow}
      </ul>
      <div className="services__sidemenu-header"></div>                    
    </div>
   );
}
 
export default ServicesSideMenu;