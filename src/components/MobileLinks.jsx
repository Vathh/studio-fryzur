import React from 'react';

import MobileLink from './MobileLink';

import '../styles/MobileLinks.scss';

const mobileLinksData = [
  {
    title: 'Strona główna',
    toRef: '/',
    delayTime: '0s'
  }, 
  {
    title: 'O nas',
    toRef: '/#aboutus',
    delayTime: '.1s'
  },
  {
    title: 'Usługi',
    toRef: '/services',
    delayTime: '.2s'
  },
  {
    title: 'Cennik',
    toRef: '/pricelist',
    delayTime: '.3s'
  },
  {
    title: 'Kontakt',
    toRef: '/#contact',
    delayTime: '.4s'
  },
]

const MobileLinks = ({isVisible, toggleMobileLinks}) => {

  const navClassNames = isVisible ? 'nav nav--active' : 'nav'
  

  const mobileLinksToDisplay = mobileLinksData.map(link => {
    return <MobileLink key={link.title} onClick={toggleMobileLinks} title={link.title} delayTime={link.delayTime} isVisible={isVisible} toRef={link.toRef}/>
  })


  return ( 
    <nav className={navClassNames}>
        <div className="nav__items">
          {mobileLinksToDisplay}
        </div>
    </nav>
  );
}
 
export default MobileLinks;