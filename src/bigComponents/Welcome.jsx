import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Welcome.scss';

const Welcome = () => {
  return ( 
    <section className="start section">
      <div className="wrapper">
        <div className="start__photo">
          <div className="start__photo-shadow"></div>
          <div className="start__box1">
            <h1 className="start__header">Profesjonalny salon fryzjerski</h1>
            <p className="start__header-text">w Twoim mieście!</p>
          </div>   
          
          <p className="start__seeoffer">Sprawdź naszą <br/> <button className="glass"><Link to="/services">ofertę</Link></button></p>
          
          <p className="start__text">To tu pasja i kunszt zawodowy tworzą nowy wymiar fryzjerstwa.</p> 
          
          <a href="#aboutusN"><i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
   );
}
 
export default Welcome;