import React from 'react';

import PriceListCard from '../components/PriceListCard';

import pricelistHeader from '../img/pricelist-header-to-fix.jpg'

import '../styles/PriceListPage.scss'

const priceListCardsData = [
  {
    header: 'strzyżenie',
    services: [
      {
        id: 1,
        text: <p>Strzyżenie damskie</p>,
        price: <p>od 40 zł</p>,
      },
      {
        id: 2,
        text: <p>Strzyżenie męskie</p>,
        price: <p>od 25 zł</p>
      }      
    ]
  },
  {
    header: 'koloryzacja',
    services: [
      {
        id: 1,
        text: <p>Koloryzacja<br/>Sombre<br/>Pasemka<br/>Refleksy</p>,
        price: <p>od 130 zł</p>
      },
      {
        id: 2,
        text: <p>Dekoloryzacja</p>,
        price: <p>od 150 zł</p>
      }
    ]
  },
  {
    header: 'stylizacja',
    services: [
      {
        id: 1,
        text: <p>Modelowanie <br/> Fale <br/> Upięcia</p>,
        price: <p>od 60 zł</p>,
      }
    ]
  },
  {
    header: 'zabiegi pielęgnacyjne',
    services: [
      {
        id: 1,
        text: <p>Nawilżanie arganowe <br/> Nawilżanie keratynowe <br/> Nawilżanie z kwasem hialuronowym <br/> Regeneracja olaplex <br/> Botoks</p>,
        price: <p>od 70 zł</p>,
      }
    ]
  },
  {
    header: 'inne',
    services: [
      {
        id: 1,
        text: <p>Keratynowe prostowanie włosów</p>,
        price: <p>od 300 zł</p>
      },
      {
        id: 2,
        text: <p>Styling</p>,
        price: <p>od 50 zł</p>
      },
      {
        id: 3,
        text: <p>Mezoterapia skóry głowy</p>,
        price: <p>od 300 zł</p>
      },
      {
        id: 4,
        text: <p>Przedłużanie / zagęszczanie włosów</p>,
        price: <p>do ustalenia po konsultacji</p>
      }
    ]
  },
]

const PriceListPage = () => {

  const priceListCardsToShow = priceListCardsData.map(card => {
    return <PriceListCard key={card.header} header={card.header} services={card.services}/>
  }) 

  return ( 
    <div className="pricelist">
            <div className="wrapper">
                <div className="pricelist__header" style={{backgroundImage: `url(${pricelistHeader})`}}>
                    <div className="pricelist__header-shadow"></div>
                    <h2 className="pricelist__header-text">cennik</h2>
                </div>
                <div className="pricelist__cards">             
                 {priceListCardsToShow}
                </div>
                <div className="pricelist__text">
                    <p className="pricelist__text-content">* Ostateczną cenę usługi można ustalić na podstawie konsultacji w salonie.</p>
                    <p className="pricelist__text-content">** Cennik nie obejmuje pełnego zakresu świadczonych usług.</p>
                </div>
            </div>
        </div>
   );
}
 
export default PriceListPage;