import React from 'react';

const AboutUsTextboxText = ({text, before}) => {
  return ( 
    <p className="aboutus__textbox-text">{before ? <b>Studio Fryzur</b> : ''}{text}</p>
  );
}
 
export default AboutUsTextboxText;