import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom'

const ServicesSideMenuItem = ({text, toRef}) => {

  const [classes, setClasses] = useState('services__sidemenu-item')

  const location = useLocation();
  
  useEffect(()=> {
    if (location.pathname === toRef) {
      setClasses('services__sidemenu-item sidemenu__item-active')
    } else {
      setClasses('services__sidemenu-item')
    }
  }, [location.pathname, toRef])

  return ( 
    <li className={classes}>
      <Link to={toRef}>{text}</Link> 
    </li>
   );
}
 
export default ServicesSideMenuItem;