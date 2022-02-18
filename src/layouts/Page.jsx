import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PriceListPage from '../pages/PriceListPage';
import ServicesPage from '../pages/ServicesPage';
import MultiOfferPage from '../pages/MultiOfferPage';
import SingleOfferPage from '../pages/SingleOfferPage';
import LoginPage from '../pages/LoginPage';

import careHeader from '../img/care-header.jpg'
import colouringHeader from '../img/colouring-header.jpg'
import shearingHeader from '../img/shearing-header.jpg'
import decolouringHeader from '../img/decolouring-header.jpg'
import extensionHeader from '../img/extension-header.jpg'
import keratinHeader from '../img/keratin-header.jpg'
import mesotherapyHeader from '../img/mesotherapy-header.jpg'
import stylingHeader from '../img/styling-header.jpg'

import keratinBefore1 from '../img/keratin-before1.jpg'
import keratinAfter1 from '../img/keratin-after1.jpg'
import keratinBefore2 from '../img/keratin-before2.jpg'
import keratinAfter2 from '../img/keratin-after2.jpg'
import keratinBefore3 from '../img/keratin-before3.jpg'
import keratinAfter3 from '../img/keratin-after3.jpg'

import tochange1 from '../img/tochange1.jpg';
import tochange2 from '../img/tochange2.jpg';

const multiOfferPagesStyles = {
  page: 'multipage',
  content: 'multiPage__content',
  item: 'multiPage__content-item',
  img: 'multiPage__content-img',
  card: 'multiPage__card',
  cardBtn: 'multiPage__card-btn',
  cardReverse: 'multiPage__card-reverse',
  description: 'multiPage__content-description',
  descriptionHeader: 'multiPage__content-description-header',
  descriptionText: 'multiPage__content-description-text'
}

const singleOfferPagesStyles = {
  content: 'page__content',
  item: 'page__content-item',
  img: 'page__content-img',
  card: 'page__card',
  cardBtn: 'page__card-btn',
  cardReverse: 'page__card-reverse',
  description: 'page__content-description',
  descriptionHeader: 'page__content-description-header',
  descriptionText: 'page__content-description-text'
}

const multiOfferPagesData = [
  {
    path: '/services/care',
    headerImg: careHeader,
    header: 'Zabiegi pielęgnacyjne',
    text: 'SPA dla Twoich włosów',
    styles: {
      content: 'multiPage__content',
      item: 'multiPage__content-item',
      img: 'multiPage__content-img',
      card: 'multiPage__card',
      cardBtn: 'multiPage__card-btn',
      cardReverse: 'multiPage__card-reverse',
      description: 'multiPage__content-description',
      descriptionHeader: 'multiPage__content-description-header',
      descriptionText: 'multiPage__content-description-text'
    },
    contentDescriptionsData : [
      {
        header: 'Nawilżanie arganowe',
        text: 'Olejek arganowy przyspiesza wzrost włosów, sprawia także, że stają się zdrowsze i mocniejsze. Szczególnie polecany jest do włosów wysokoporowatych, wchodzi bowiem w ich strukturę, zamykając łuski, co wygładza włosy, zapobiega ich puszeniu i rozdwajaniu końcówek. Działa również pozytywnie na skórę głowy, docierając do cebulek włosów skutecznie przeciwdziała ich starzeniu się, łamaniu i matowieniu. Dodatkowo nawilżające działanie pomaga w walce z łupieżem.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Nawilżanie keratynowe',
        text: 'Keratyna jest białkiem produkowanym przez keratynocyty – stanowi budulec naszych włosów, paznokci oraz częściowo naskórka. Procedura nawilżania keratynowego polega na wtłaczaniu keratyny we włosy skutecznie odbudowując ich strukturę. Zabieg ten polecany jest szczególnie na włosy suche i zniszczone, na przykład wskutek poddawania działaniu chemii takiej jak rozjaśniacze, farby oraz regularnego użytkowania suszarki i prostownicy. Efekty nawilżania keratynowego utrzymują się nawet do kilku miesięcy, a są nimi przede wszystkim: mocne i wygładzone włosy, ich zdrowy wygląd i zachwycający połysk.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Nawilżanie z kwasem hialuronowym',
        text: 'Kwas hialuronowy jest substancją występującą naturalnie w ludzkim organizmie. Odpowiada za właściwy poziom nawilżenia skóry, a jego poziom w naszych organizmach spada wraz z wiekiem. Obniżenie jego poziomu powoduje powstawanie zmarszczek, spadek jędrności skóry i efekt przesuszonych włosów.  Zastosowanie kwasu hialuronowego na skórę głowy wzmacnia cebulki włosów, a zatem i samych włosów. Ponadto powodując znaczne nawilżenie, chroni przed negatywnym działaniem wiatru, niskich i wysokich temperatur, promieniowania słonecznego.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Regeneracja Olaplex',
        text: 'Preparat Olaplex został wynaleziony w USA z myślą o włosach regularnie poddawanych inwazyjnym zabiegom fryzjerskim takim jak farbowanie, rozjaśnianie lub trwała ondulacja. Zyskały one szczególną popularność dzięki pozytywnym opiniom ze świata show-biznesu, polecane między innymi przez gwiazdy Hollywood. Składniki preparatu nie są znane, ponieważ podlegają tajemnicy patentowej, jednak producent zapewnia o całkowitym bezpieczeństwie w jego stosowaniu. Atutem specyfiku jest natychmiastowy i długo utrzymujący się efekt zdrowych i mocnych włosów. To, co wyróżnia system Olaplex, to sposób działania – opiera się on na wejściu głęboko w strukturę włosa, gdzie odbudowuje mostki dwusiarczkowe, których zadaniem jest wiązanie keratyny, stanowiącej z kolei budulec włosów.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Botoks',
        text: 'Botoks powszechnie kojarzony jest z upiększaniem, wygładzaniem i estetyką. Nie inaczej jest w przypadku stosowania go na włosach. Różnicą jest natomiast bezinwazyjność zabiegu – botoks na włosy jest całkowicie bezpieczny, polega na wtłaczaniu preparatu w kosmyki włosów. Substancja jest mieszaniną najlepszych składników odżywczych, między innymi takich jak kolagen, kwas hialuronowy, sok z jagód acai. Ich zadaniem jest przeniknięcie do struktury włosa i uzupełnienie ubytków między korą, a otoczką włosa. Jakiego rezultatu możemy się spodziewać? Włosy po zabiegu są lśniące, gładkie, miękkie, układają się z ogromną łatwością. Szczególnie zachwycający efekt botoksu to mocniejszy, żywszy kolor – prawdziwa gratka dla posiadaczek koloryzowanych pasm.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Pozostałe',
        text: 'Что э́то?',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      }
    ]
  },  
  {
    path: '/services/colouring',
    headerImg: colouringHeader,
    header: 'Koloryzacja',
    text: 'Perfekcyjny kolor - długotrwały efekt',
    contentDescriptionsData : [
      {
        header: 'Koloryzacja permanentna',
        text: 'Najbardziej powszechny typ farbowania włosów, doskonale znana koloryzacja zwana potocznie podstawową. Usługa przeznaczona dla osób zdecydowanych na trwałą zmianę koloru, bądź pokrycie siwych włosów.  Profesjonalne farby dzięki swoim składnikom, wnikają głęboko w strukturę włosów, zmieniając ich barwę oraz pozostawiając je lśniącymi i pełnymi blasku przez długi czas.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Sombre',
        text: 'Sposób koloryzacji zakładający pozostawienie włosów przy nasadzie w ciemniejszym, często naturalnym kolorze i płynne, łagodne przejście ku jaśniejszej barwie na końcówkach.  Delikatny kontrast nadaje bardzo naturalny efekt, dzięki czemu metoda ta cieszy się ogromną popularnością.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Pasemka',
        text: 'Znana od lat technika koloryzacji, która na stałe wbiła się w kanony mody. Idealny sposób na dodanie świeżości swojej fryzurze. Świetne rozwiązanie dla każdej kobiety chcącej wyglądać młodo i promiennie bez stosowania zabiegów tak inwazyjnych jak koloryzacja trwała. To właśnie od pasemek większość kobiet zaczęła swoją przygodę z koloryzacją włosów.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Refleksy',
        text: 'Refleksy nadają fryzurze lekkości i świeżości, pozostawiając efekt włosów muśniętych promieniami słońca. Założeniem tego typu koloryzacji jest pojaśnienie włosów poprzez dobieranie nierównomiernych refleksów lub paneli. W przeciwieństwie do pasemek – refleksy są delikatne, cienkie i przede wszystkim zachowują mniejszy kontrast w stosunku do bazowego koloru włosów. Dobre rozwiązanie, jeżeli chciałabyś odjąć sobie trochę lat.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      }      
    ]
  },  
  {
    path: '/services/shearing',
    headerImg: shearingHeader,
    header: 'Strzyżenie i stylizacje',
    text: 'Idealna fryzura - niepowtarzalny styl',
    contentDescriptionsData : [
      {
        header: 'Strzyżenie damskie',
        text: 'Najpopularniejsza z usług w salonach fryzjerskich na całym świecie. Każda z nas powinna powtarzać ją przynajmniej kilka razy w roku, by utrzymać włosy w dobrej kondycji. Ponadto dzięki regularnemu podcinaniu włosy lepiej układają się na co dzień.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Strzyżenie męskie',
        text: 'Strzyżenie to zdecydowanie najczęstszy powód wizyt Panów w salonach fryzjerskich. Warto więc, by odbywało się pod okiem specjalisty. Wizyta w Studio Fryzur to gwarancja satysfakcji  – wysłuchamy Twoich oczekiwań, doradzimy najlepsze rozwiązanie i sprawimy, że fryzura stanie się Twoim atutem.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Modelowanie',
        text: 'Każda z nas wie, że fryzura to wizytówka zadbanej kobiety. Włosy, które dobrze się prezentują, stanowią ważny element naszego wizerunku. Nie tylko przy specjalnej okazji, lecz także na co dzień chcemy robić dobre wrażenie. Osiągnięcie takiego efektu wymaga jednak dużej wiedzy, wyczucia i umiejętności. Możesz być pewna, że tych nie brakuje naszej załodze.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Fale',
        text: 'Efekt naturalnych fal nadaje fryzurze wdzięku i elegancji. Jest to idealna fryzura, już nie tylko na lato. Fale stały się nieodzownym trendem na całym świecie. W Studio Fryzur dobierzemy odpowiednią dla Twojego typu włosów technikę falowania, pozwoli to osiągnąć długotrwały, iście Hollywoodzki efekt.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      },
      {
        header: 'Upięcia',
        text: 'Sposobów upięć włosów jest wiele. Ważne okazje chciałybyśmy przypieczętować oryginalną, niebanalną stylizacją – ten rodzaj fryzury zdaje się pasować ku temu idealnie. Nieważne, jaki typ włosów mamy, wykonanie upięcia jest do zrobienia na każdym z nich. Możliwości stylizacji natomiast są nieograniczone, to Ty decydujesz, w którą stronę pójdziemy – klasycznych, sprawdzonych upięć, a może niezwykłych fantazji rodem z najnowszych katalogów modowych.',
        imgs: [
          {
            id: 1,
            beforeImg: tochange1,
            afterImg: tochange2
          },
          {
            id: 2,
            beforeImg: tochange1,
            afterImg: tochange2
          }
        ]
      }        
    ]
  },  
]

const singleOfferPagesData = [
  {
    path: '/services/decolouring',
    headerImg: decolouringHeader,
    header: 'Dekoloryzacja',
    text: 'Odkryj swój naturalny kolor włosów na nowo',
    contentDescriptionsData : [
      {
        header: 'Dekoloryzacja włosów - co to jest?',
        text: 'Pojęcie to oznacza ściągnięcie koloru z włosów, zabieg podczas którego usuwane są sztuczne barwniki z wnętrza włosa. Zabieg ten ma na celu pozbycie się wprowadzonych podczas koloryzacji pigmentów ze struktury włosa. Jest to zatem działanie odwrotne do farbowania, pozwalające usunąć skutki koloryzacji. Wykonuje się ją za pomocą dekoloryzatora lub rozjaśniacza. Stopień skomplikowania procedury dekoloryzacji jest powodem dla którego poddanie się zabiegowi w profesjonalnym salonie jest jedynym bezpiecznym wyjściem.'
      },
      {
        header: 'Dla kogo przeznaczona jest dekoloryzacja?',
        text: 'Zabieg przeznaczony jest dla osób niezadowolonych efektem dokonanego uprzednio farbowania włosów. Ciemne kolory takie jak czarny, brązowy, czerwony i ciemno-rudy usunąć można tylko poprzez dekoloryzację. Należy mieć na uwadze fakt, że sam zabieg jest dość inwazyjny i może mocno osłabić strukturę włosów, zatem warto zadbać o włosy przed przystąpieniem do niego.'
      },
      {
        header: 'Pielęgnacja włosów po dekoloryzacji',
        text: 'Włosy po dekoloryzacji mogą być osłabione oraz przesuszone. Należy zatem bezzwłocznie zająć się ich regeneracją. Najważniejszą czynnością po zabiegu jest gruntowne nawilżenie włosów. Szczególnie pomocne w tym wypadku są głęboko nawilżające zabiegi lub prostowanie keratynowe, które natychmiastowo odbudowuje strukturę włosa. Do codziennej pielęgnacji również warto wybierać kosmetyki zawierające w składzie keratynę.'
      }    
    ],
    imgs: [
      {
        id: 1,
        beforeImg: tochange1,
        afterImg: tochange2
      },
      {
        id: 2,
        beforeImg: tochange1,
        afterImg: tochange2
      }
    ]
  },
  {
    path: '/services/extension',
    headerImg: extensionHeader,
    header: 'Przedłużanie i zagęszczanie włosów',
    text: 'Niezawodny sposób na błyskawiczną metamorfozę',
    contentDescriptionsData : [
      {
        header: 'Wyśniona fryzura?',
        text: 'Jakakolwiek fryzura Ci się marzy – wystarczy jedna wizyta w naszym salonie byś mogła się nią cieszyć. Długie i gęste włosy są na wyciągnięcie ręki, a ponieważ do zabiegu wykorzystujemy naturalne włosy, efekt nie sprawia wrażenia sztuczności. Gwarantujemy, że po tym zabiegu wyjdziesz od nas zupełnie odmieniona.'
      },
      {
        header: 'Co warto wiedzieć?',
        text: 'Zabieg przedłużania i zagęszczania włosów w naszym salonie wykonujemy metodą kanapkową. Jest to najbezpieczniejsza metoda pozwalająca osiągnąć długotrwały efekt. Korzystamy z najwyższej jakości naturalnych włosów, dzięki czemu można je użytkować nawet przez rok.  Lekkość doczepionych włosów sprawia, że nie odczuwamy dyskomfortu wywołanego noszeniem ich.'
      },
      {
        header: 'Jak pielęgnować włosy po przedłużeniu i zagęszczeniu?',
        text: 'Doczepiane włosy są w stu procentach naturalne, oznacza to tyle, że można je traktować jak swoje własne – prostować, suszyć suszarką czy też kręcić na lokówce. Zalecane jest jednak korzystanie z dedykowanej szczotki do włosów doczepianych, nie wyczesze ona doklejonych pasm. Doczepione włosy wyglądają w pełni naturalnie, są błyszczące, zdrowe i lekkie. Efekt ten utrzymuje się i nie wymaga korekt, ani żadnych dodatkowych zabiegów nawet przez kilka miesięcy.'
      }    
    ],
    imgs: [
      {
        id: 1,
        beforeImg: tochange1,
        afterImg: tochange2
      },
      {
        id: 2,
        beforeImg: tochange1,
        afterImg: tochange2
      }
    ]
  },
  {
    path: '/services/keratin',
    headerImg: keratinHeader,
    header: 'Keratynowe prostowanie włosów',
    text: 'Idealnie wygładzone włosy',
    contentDescriptionsData : [
      {
        header: '',
        text: 'Klientkom, których włosy mają skłonności do puszenia się i elektryzowania polecamy zabieg keratynowego prostowania włosów. Jest to świetny sposób na osiągnięcie długotrwałego efektu prostych i wygładzonych włosów. Bez względu, czy Twoje włosy są kręcone, falowane, czy proste, ale z tendencją do wywijania się – zabieg ten przyniesie pożądany efekt.'
      },
      {
        header: '',
        text: 'Procedura polega na aplikacji keratyny, naturalnego budulca włosa, bezpośrednio na włosy. Następnie włosy poddawane są prostowaniu, którego efekt, dzięki obecności keratyny, pozostaje z nami naprawdę długo. Dzięki temu nie ma potrzeby narażania włosów na wysokie temperatury podczas codziennej stylizacji – chronimy je więc, poprawiając ich kondycję.'
      },
      {
        header: 'Dla kogo przeznaczony jest zabieg keratynowego prostowania włosów?',
        text: 'Jest to alternatywa dla każdej z Pań, trudniącej się codziennym układaniem włosów przy pomocy prostownicy. Zabieg znacząco skraca czas niezbędny do codziennej stylizacji, a co najważniejsze zapobiega dalszemu niszczeniu włosów spowodowanemu prostowaniem domowymi metodami. Włosy nadmiernie wystawiane na działanie wysokich temperatur mają tendencję do przesuszania się, elektryzowania i łamania. Cokolwiek złego dzieje się z Twoimi włosami – zabieg ten jest bezpieczny, można go z powodzeniem stosować na włosach zniszczonych wskutek zabiegów chemicznych i osłabionych.  Sprawdza się na wszystkich typach włosów – kręconych, falowanych i prostych.'
      },
      {
        header: 'Kiedy stosować keratynowe prostowanie włosów?',
        text: 'Choć w powszechnej opinii utarło się, że zabieg ten przeznaczony jest do walki z niesfornymi lokami czy falami, to tak naprawdę równie często wykonuje się go na włosach prostych, które przejawiają tendencję do wywijania się w różnych kierunkach. Ponadto jest to również zabieg dedykowany włosom wymagającym natychmiastowej intensywnej regeneracji. Keratynowe prostowanie włosów to bezkonkurencyjne rozwiązanie na problem puszenia się włosów i trudności z ich codziennym układaniem.'
      },
      {
        header: 'Efekty keratynowego prostowania włosów',
        text: 'Efekty tego zabiegu widoczne są natychmiast, włosy dzięki niemu są lśniące, pełne blasku, zdrowe i odżywione. Co więcej ich codzienna stylizacja staje się bardzo łatwa, ponieważ włosy nie puszą się i nie elektryzują. Wskutek zabiegu nasze włosy na co dzień zachwycają zdrowym, naturalnym wyglądem.'
      }  
    ],
    imgs: [
      {
        id: 1,
        beforeImg: tochange1,
        afterImg: tochange2
      },
      {
        id: 2,
        beforeImg: keratinBefore1,
        afterImg: keratinAfter1
      },
      {
        id: 3,
        beforeImg: keratinBefore2,
        afterImg: keratinAfter2
      },
      {
        id: 4,
        beforeImg: keratinBefore3,
        afterImg: keratinAfter3
      }
    ]
  },
  {
    path: '/services/mesotherapy',
    headerImg: mesotherapyHeader,
    header: 'Mezoterapia igłowa',
    text: 'Zbawienna moc peptydów',
    contentDescriptionsData : [
      {
        header: 'Czym jest mezoterapia igłowa skóry głowy?',
        text: 'Mezoterapia igłowa to zabieg powszechnie stosowany w walce z chorobami skóry. Zastosowanie tej metody na skórze głowy przynosi natomiast zbawienie osobom borykającym się z łysieniem oraz wypadaniem i słabą kondycją włosów. Poza zahamowaniem samego wypadania, terapia pobudza cebulki włosów, co może nawet spowodować znaczny odrost nowych włosów. Zabieg polega na ostrzykiwaniu skóry głowy mikroigłami, którymi wprowadzany jest preparat leczniczy.'
      },
      {
        header: 'Zalety mezoterapii igłowej skóry głowy',
        text: 'Mezoterapia choć jest zabiegiem inwazyjnym, bowiem igły docierają pod naskórek, jest całkowicie bezpieczna. Nie jest to procedura wymagająca hospitalizacji, opieki anestezjologicznej i nie uczula. Może być stosowana na każdym typie skóry.'
      },
      {
        header: 'Dla kogo przeznaczona?',
        text: 'Przede wszystkim mezoterapię poleca się osobom dotkniętym problemem nagminnego wypadania włosów i łysienia. Zabieg przeciwdziała objawom procesów starzenia się skóry, co przekłada się również na włosy.  Fryzura po terapii staje się pełna blasku, gęsta, a włosy są mocne i odporne na uszkodzenia.'
      }    
    ],
    imgs: [
      {
        id: 1,
        beforeImg: tochange1,
        afterImg: tochange2
      },
      {
        id: 2,
        beforeImg: tochange1,
        afterImg: tochange2
      }
    ]
  },
  {
    path: '/services/styling',
    headerImg: stylingHeader,
    header: 'Styling',
    text: 'Sposób na cienkie i przetłuszczające się włosy',
    contentDescriptionsData : [
      {
        header: 'Czym jest styling włosów?',
        text: 'Styling to nic innego jak rodzaj trwałej ondulacji, z tą różnicą, że wykonuje się ją na grubych wałkach, w następstwie czego efekt jest bardziej subtelny. Jest to zabieg chemiczny mający na celu sprawić, by włosy zyskały skręt na całej swojej długości, co przyczynia się też do ich podniesienia u nasady. Efekt końcowy zależny jest od rodzaju włosów, możemy bowiem uzyskać sprężyste loki, bądź włosy regularnie falowane.'
      },
      {
        header: 'Kto powinien zdecydować się na styling?',
        text: 'Styling jest dobrym sposobem, by nadać fryzurze objętości. Szczególnie polecany jest zatem osobom o cienkich włosach. Zabieg przeznaczony jest również wszystkim miłośniczkom loków i fal, które wskutek stylingu wyglądają bardzo naturalnie. Warto mieć na uwadze, że najlepszy efekt uzyskać można na włosach nie dłuższych niż do łopatek, choć sam zabieg stosowany jest z powodzeniem na wszystkich długościach.'
      }    
    ],
    imgs: [
      {
        id: 1,
        beforeImg: tochange1,
        afterImg: tochange2
      },
      {
        id: 2,
        beforeImg: tochange1,
        afterImg: tochange2
      }
    ]
  },
]


const Page = () => {

  const location = useLocation();

  useEffect(()=> {
    if (location.hash !== '') {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location])

  const multiOfferPagesToShow = multiOfferPagesData.map(page =>{
    return <Route 
      key={page.header} 
      path={page.path} 
      element={<MultiOfferPage 
        contentDescriptionsData={page.contentDescriptionsData} 
        headerImg={page.headerImg}
        header={page.header}
        text={page.text}
        styles={multiOfferPagesStyles}
      />} 
    />
  })

  const singleOfferPagesToShow = singleOfferPagesData.map(page => {
    return <Route 
      key={page.header}
      path={page.path}
      element={<SingleOfferPage 
        contentDescriptionsData={page.contentDescriptionsData} 
        headerImg={page.headerImg}
        header={page.header}
        text={page.text}
        imgs={page.imgs}
        styles={singleOfferPagesStyles}
      />}
    />
  })



  return (     
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/services" element={<ServicesPage/>} />
      <Route path="/pricelist" element={<PriceListPage/>} />
      {multiOfferPagesToShow}
      {singleOfferPagesToShow}
      <Route path="/login" element={<LoginPage/>} />
    </Routes>    
   );
}
 
export default Page;