import React from 'react';

import { Link } from 'react-router-dom';

const ServicesContentBox = ({img, header, text, toRef}) => {
  return ( 
    <div className="services__box">
      <img src={img} alt="" className="services__box-img"/>
      <h3 className="services__box-header">{header}</h3>
      <p className="services__box-text">{text}</p>
      <Link to={toRef} className="services__box-btn">zobacz więcej</Link>
    </div>
   );
}
 
export default ServicesContentBox;