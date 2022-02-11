import React from 'react';

import AboutUsCard from '../components/AboutUsCard';
import AboutUsTextboxText from '../components/AboutUsTextboxText';

import colouringCardHomepage from '../img/colouring-card-homepage.jpg';
import stylingsCardHomepage from '../img/stylings-card-homepage.jpg';
import cutCardHomepage from '../img/cut-card-homepage.jpg';
import careCardHomepage from '../img/care-card-homepage.jpg';
import specialCardHomepage from '../img/special-card-homepage.jpg';
import manCardHomepage from '../img/man-card-homepage.jpg';

import '../styles/AboutUs.scss';

const cardsData = [
  {
    number: 'one',
    title: 'Ekspertki koloryzacji',
    text: 'Niezależnie czy potrzebujesz radykalnej zmiany, podkreślenia naturalnego koloru, czy też zamaskowania siwych włosów - jesteś w dobrym miejscu. W naszej ofercie z pewnością znajdziesz wariant dla siebie, możesz też liczyć na fachowe doradztwo z naszej strony.',
    photo: colouringCardHomepage
  },
  {
    number: 'two',
    title: 'Niebanalne stylizacje',
    text: 'Stylizacja to zabieg pozwalający podkreślić urodę i wyrazić swój styl oraz osobowość. Szykujesz się na specjalną okoliczność, a może chciałabyś wyglądać naprawdę wyjątkowo również na co dzień? Wizyta w naszym salonie z pewnością Ci w tym pomoże.',
    photo: stylingsCardHomepage
  },
  {
    number: 'three',
    title: 'Precyzyjne cięcie',
    text: 'Fryzura dopasowana do naszej sylwetki sprawia, że czujemy się lepiej. Odpowiednim strzyżeniem  pomożemy Ci wydobyć naturalne piękno i podkreślić Twoje atuty. Kluczowym dla nas jest wysłuchanie Twoich oczekiwań, a następnie przekucie ich w rzeczywistość.',
    photo: cutCardHomepage
  },
  {
    number: 'four',
    title: 'Zabiegi pielęgnacyjne',
    text: 'Domowe sposoby walki ze złą kondycją włosów są uciążliwe i często nie przynoszą oczekiwanych skutków. Dobrym rozwiązaniem są profesjonalne zabiegi, dzięki którym dogłębnie odżywimy i odbudujemy strukturę Twoich włosów.',
    photo: careCardHomepage
  },
  {
    number: 'five',
    title: 'Zabiegi specjalistyczne',
    text: 'Jeżeli chciałabyś zrobić coś więcej dla swoich włosów lub przeżyć prawdziwą metamorfozę – zapraszamy do skorzystania z naszej oferty specjalnej, a w niej między innymi: przedłużanie i zagęszczanie włosów, mezoterapia igłowa, prostowanie keratynowe.',
    photo: specialCardHomepage
  },
  {
    number: 'six',
    title: 'Strefa dla mężczyzn',
    text: 'Nasza oferta skierowania jest naturalnie również do Panów ceniących sobie usługi na najwyższym poziomie. Zadbamy o Twoją fryzurę niezależnie czy chcesz podążać za trendami, pozostać wiernym klasyce czy też zamaskować siwiznę.',
    photo: manCardHomepage
  }
]

const textboxesData = [
  {
    text: ' to wyjątkowy, kameralny salon, założony w 1410 roku pod Grunwaldem przez fryzjerkę i stylistkę z wieloletnim doświadczeniem - Urszulę Kotowską. Ciesząc się zainteresowaniem i uznaniem wśród naszych drogich Klientów poszerzyliśmy działalność otwierając bliźniaczy salon w Suwałkach.',
    before: true
  },
  {
    text: 'Nasza codzienna praca to nieustanne wyzwania stworzenia niepowtarzalnych wizerunków, wydobycia i ukazania prawdziwego piękna Twoich włosów.'
  },
  {
    text: 'Indywidualne podejście do klienta jest podstawą naszych działań. Zamiłowanie do sztuki fryzjerskiej zmusza nas do nieustannego podnoszenia naszych kwalifikacji, dzięki czemu możemy Państwu zaoferować usługi na najwyższym poziomie.'
  }
]

const AboutUs = () => {

  
  
  const aboutUsCardsToShow = cardsData.map(card => {
    return <AboutUsCard key={card.number} number={card.number} title={card.title} text={card.text} photo={card.photo}/>
  }) 

  const textboxesToShow = textboxesData.map(textbox => {
    return <AboutUsTextboxText key={textbox.text} text={textbox.text} before={textbox.before}/>
  })

  return ( 
    <section id="aboutus" className="section aboutus">
      <div id="aboutusN" className="aboutusN"></div>
      <div className="wrapper">
        <h2 className="section__header">O nas</h2>
        <div className="aboutus__textbox">
          {textboxesToShow}
            <p className="aboutus__textbox-footer">To Ty nadajesz sens naszej pracy.</p>
        </div>
        <div className="aboutus__cards">  
          {aboutUsCardsToShow}
        </div>
      </div>
    </section>
   );
}
 
export default AboutUs;
