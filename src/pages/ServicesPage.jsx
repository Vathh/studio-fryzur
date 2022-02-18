import React from 'react';

import ServicesContent from '../bigComponents/ServicesContent';
import SubpageHeader from '../bigComponents/SubpageHeader';
import ServicesSideMenu from '../bigComponents/ServicesSideMenu';
import ServicesDesktopSideMenu from '../bigComponents/ServicesDesktopSideMenu';

import servicesHeader from '../img/services-header.jpg'

import '../styles/ServicesPage.scss'

import useWindowWidth from '../hooks/useWindowWidth'



const ServicesPage = () => { 

  const { width } = useWindowWidth();

  return ( 
    <>
      <div className="services">
        <div className="wrapper">
          <SubpageHeader img={servicesHeader} header={'oferta'} text={'Poznaj nasze usługi!'}/>
          <div className="services__mainbox">
            {(width > 599) ? <ServicesDesktopSideMenu /> : <ServicesSideMenu /> }
            <ServicesContent />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ServicesPage;