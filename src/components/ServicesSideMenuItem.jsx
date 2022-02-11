import React from 'react';

import { Link } from 'react-router-dom'

const ServicesSideMenuItem = ({text, toRef}) => {
  return ( 
    <li className="services__sidemenu-item">
      <Link to={toRef}>{text}</Link> 
    </li>
   );
}
 
export default ServicesSideMenuItem;