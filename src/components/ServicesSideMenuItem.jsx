import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom'

import useWindowWidth from '../hooks/useWindowWidth';

const ServicesSideMenuItem = ({text, toRef}) => {

  const { width } = useWindowWidth();

  const [classes, setClasses] = useState('services__sidemenu-item')

  const location = useLocation();
  
  useEffect(()=> {    
    if (location.pathname === toRef && width > 599) {
      setClasses('services__sidemenu-item sidemenu__item-active')
    } else {
      setClasses('services__sidemenu-item')
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return ( 
    <li className={classes}>
      <Link to={toRef}>{text}</Link> 
    </li>
   );
}
 
export default ServicesSideMenuItem;