import React from 'react';

const PageContentDescription = ({header, text, styles}) => {
  return ( 
    <div className={styles.description}>
      <h3 className={styles.descriptionHeader}>{header}</h3> 
      <p className={styles.descriptionText}>{text}</p>
    </div>
   );
}
 
export default PageContentDescription;