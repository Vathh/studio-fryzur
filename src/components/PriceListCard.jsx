import React, {useState} from 'react';

import PriceListCardItem from './PriceListCardItem';

const PriceListCard = ({header, services}) => {

  const [isListVisible, setIsListVisible] = useState(false);

  const itemsList = services.map(service => {
    return <PriceListCardItem key={service.id} text={service.text} price={service.price}/>
  })

  const showCardListHandler = () => {
    setIsListVisible(!isListVisible);
  }

  return ( 
    <div className="pricelist__cards-card">
      <div className="pricelist__cards-card-header" onClick={showCardListHandler}>
        <h3>{header}</h3>
      </div>
      <div className="pricelist__cards-card-list" style={isListVisible ? {display: 'block'} : {display: 'none'}}>
        {itemsList}
      </div>
    </div>
   );
}
 
export default PriceListCard;