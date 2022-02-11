import React from 'react';

const PriceListCardItem = ({text, price}) => {
  return ( 
    <div className="pricelist__cards-card-list-item">
      {text}
      {price}
    </div>
   );
}
 
export default PriceListCardItem;