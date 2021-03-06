import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PriceListPage from '../pages/PriceListPage';
import ServicesPage from '../pages/ServicesPage';
import MultiOfferPage from '../pages/MultiOfferPage';
import SingleOfferPage from '../pages/SingleOfferPage';

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
    header: 'Zabiegi piel??gnacyjne',
    text: 'SPA dla Twoich w??os??w',
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
        header: 'Nawil??anie arganowe',
        text: 'Olejek arganowy przyspiesza wzrost w??os??w, sprawia tak??e, ??e staj?? si?? zdrowsze i mocniejsze. Szczeg??lnie polecany jest do w??os??w wysokoporowatych, wchodzi bowiem w ich struktur??, zamykaj??c ??uski, co wyg??adza w??osy, zapobiega ich puszeniu i rozdwajaniu ko??c??wek. Dzia??a r??wnie?? pozytywnie na sk??r?? g??owy, docieraj??c do cebulek w??os??w skutecznie przeciwdzia??a ich starzeniu si??, ??amaniu i matowieniu. Dodatkowo nawil??aj??ce dzia??anie pomaga w walce z ??upie??em.',
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
        header: 'Nawil??anie keratynowe',
        text: 'Keratyna jest bia??kiem produkowanym przez keratynocyty ??? stanowi budulec naszych w??os??w, paznokci oraz cz????ciowo nask??rka. Procedura nawil??ania keratynowego polega na wt??aczaniu keratyny we w??osy skutecznie odbudowuj??c ich struktur??. Zabieg ten polecany jest szczeg??lnie na w??osy suche i zniszczone, na przyk??ad wskutek poddawania dzia??aniu chemii takiej jak rozja??niacze, farby oraz regularnego u??ytkowania suszarki i prostownicy. Efekty nawil??ania keratynowego utrzymuj?? si?? nawet do kilku miesi??cy, a s?? nimi przede wszystkim: mocne i wyg??adzone w??osy, ich zdrowy wygl??d i zachwycaj??cy po??ysk.',
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
        header: 'Nawil??anie z kwasem hialuronowym',
        text: 'Kwas hialuronowy jest substancj?? wyst??puj??c?? naturalnie w ludzkim organizmie. Odpowiada za w??a??ciwy poziom nawil??enia sk??ry, a jego poziom w naszych organizmach spada wraz z wiekiem. Obni??enie jego poziomu powoduje powstawanie zmarszczek, spadek j??drno??ci sk??ry i efekt przesuszonych w??os??w.  Zastosowanie kwasu hialuronowego na sk??r?? g??owy wzmacnia cebulki w??os??w, a zatem i samych w??os??w. Ponadto powoduj??c znaczne nawil??enie, chroni przed negatywnym dzia??aniem wiatru, niskich i wysokich temperatur, promieniowania s??onecznego.',
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
        text: 'Preparat Olaplex zosta?? wynaleziony w USA z my??l?? o w??osach regularnie poddawanych inwazyjnym zabiegom fryzjerskim takim jak farbowanie, rozja??nianie lub trwa??a ondulacja. Zyska??y one szczeg??ln?? popularno???? dzi??ki pozytywnym opiniom ze ??wiata show-biznesu, polecane mi??dzy innymi przez gwiazdy Hollywood. Sk??adniki preparatu nie s?? znane, poniewa?? podlegaj?? tajemnicy patentowej, jednak producent zapewnia o ca??kowitym bezpiecze??stwie w jego stosowaniu. Atutem specyfiku jest natychmiastowy i d??ugo utrzymuj??cy si?? efekt zdrowych i mocnych w??os??w. To, co wyr????nia system Olaplex, to spos??b dzia??ania ??? opiera si?? on na wej??ciu g????boko w struktur?? w??osa, gdzie odbudowuje mostki dwusiarczkowe, kt??rych zadaniem jest wi??zanie keratyny, stanowi??cej z kolei budulec w??os??w.',
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
        text: 'Botoks powszechnie kojarzony jest z upi??kszaniem, wyg??adzaniem i estetyk??. Nie inaczej jest w przypadku stosowania go na w??osach. R????nic?? jest natomiast bezinwazyjno???? zabiegu ??? botoks na w??osy jest ca??kowicie bezpieczny, polega na wt??aczaniu preparatu w kosmyki w??os??w. Substancja jest mieszanin?? najlepszych sk??adnik??w od??ywczych, mi??dzy innymi takich jak kolagen, kwas hialuronowy, sok z jag??d acai. Ich zadaniem jest przenikni??cie do struktury w??osa i uzupe??nienie ubytk??w mi??dzy kor??, a otoczk?? w??osa. Jakiego rezultatu mo??emy si?? spodziewa??? W??osy po zabiegu s?? l??ni??ce, g??adkie, mi??kkie, uk??adaj?? si?? z ogromn?? ??atwo??ci??. Szczeg??lnie zachwycaj??cy efekt botoksu to mocniejszy, ??ywszy kolor ??? prawdziwa gratka dla posiadaczek koloryzowanych pasm.',
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
        header: 'Pozosta??e',
        text: '?????? ?????????',
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
    text: 'Perfekcyjny kolor - d??ugotrwa??y efekt',
    contentDescriptionsData : [
      {
        header: 'Koloryzacja permanentna',
        text: 'Najbardziej powszechny typ farbowania w??os??w, doskonale znana koloryzacja zwana potocznie podstawow??. Us??uga przeznaczona dla os??b zdecydowanych na trwa???? zmian?? koloru, b??d?? pokrycie siwych w??os??w.  Profesjonalne farby dzi??ki swoim sk??adnikom, wnikaj?? g????boko w struktur?? w??os??w, zmieniaj??c ich barw?? oraz pozostawiaj??c je l??ni??cymi i pe??nymi blasku przez d??ugi czas.',
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
        text: 'Spos??b koloryzacji zak??adaj??cy pozostawienie w??os??w przy nasadzie w ciemniejszym, cz??sto naturalnym kolorze i p??ynne, ??agodne przej??cie ku ja??niejszej barwie na ko??c??wkach.  Delikatny kontrast nadaje bardzo naturalny efekt, dzi??ki czemu metoda ta cieszy si?? ogromn?? popularno??ci??.',
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
        text: 'Znana od lat technika koloryzacji, kt??ra na sta??e wbi??a si?? w kanony mody. Idealny spos??b na dodanie ??wie??o??ci swojej fryzurze. ??wietne rozwi??zanie dla ka??dej kobiety chc??cej wygl??da?? m??odo i promiennie bez stosowania zabieg??w tak inwazyjnych jak koloryzacja trwa??a. To w??a??nie od pasemek wi??kszo???? kobiet zacz????a swoj?? przygod?? z koloryzacj?? w??os??w.',
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
        text: 'Refleksy nadaj?? fryzurze lekko??ci i ??wie??o??ci, pozostawiaj??c efekt w??os??w mu??ni??tych promieniami s??o??ca. Za??o??eniem tego typu koloryzacji jest poja??nienie w??os??w poprzez dobieranie nier??wnomiernych refleks??w lub paneli. W przeciwie??stwie do pasemek ??? refleksy s?? delikatne, cienkie i przede wszystkim zachowuj?? mniejszy kontrast w stosunku do bazowego koloru w??os??w. Dobre rozwi??zanie, je??eli chcia??aby?? odj???? sobie troch?? lat.',
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
    header: 'Strzy??enie i stylizacje',
    text: 'Idealna fryzura - niepowtarzalny styl',
    contentDescriptionsData : [
      {
        header: 'Strzy??enie damskie',
        text: 'Najpopularniejsza z us??ug w salonach fryzjerskich na ca??ym ??wiecie. Ka??da z nas powinna powtarza?? j?? przynajmniej kilka razy w roku, by utrzyma?? w??osy w dobrej kondycji. Ponadto dzi??ki regularnemu podcinaniu w??osy lepiej uk??adaj?? si?? na co dzie??.',
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
        header: 'Strzy??enie m??skie',
        text: 'Strzy??enie to zdecydowanie najcz??stszy pow??d wizyt Pan??w w salonach fryzjerskich. Warto wi??c, by odbywa??o si?? pod okiem specjalisty. Wizyta w Studio Fryzur to gwarancja satysfakcji  ??? wys??uchamy Twoich oczekiwa??, doradzimy najlepsze rozwi??zanie i sprawimy, ??e fryzura stanie si?? Twoim atutem.',
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
        text: 'Ka??da z nas wie, ??e fryzura to wizyt??wka zadbanej kobiety. W??osy, kt??re dobrze si?? prezentuj??, stanowi?? wa??ny element naszego wizerunku. Nie tylko przy specjalnej okazji, lecz tak??e na co dzie?? chcemy robi?? dobre wra??enie. Osi??gni??cie takiego efektu wymaga jednak du??ej wiedzy, wyczucia i umiej??tno??ci. Mo??esz by?? pewna, ??e tych nie brakuje naszej za??odze.',
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
        text: 'Efekt naturalnych fal nadaje fryzurze wdzi??ku i elegancji. Jest to idealna fryzura, ju?? nie tylko na lato. Fale sta??y si?? nieodzownym trendem na ca??ym ??wiecie. W Studio Fryzur dobierzemy odpowiedni?? dla Twojego typu w??os??w technik?? falowania, pozwoli to osi??gn???? d??ugotrwa??y, i??cie Hollywoodzki efekt.',
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
        header: 'Upi??cia',
        text: 'Sposob??w upi???? w??os??w jest wiele. Wa??ne okazje chcia??yby??my przypiecz??towa?? oryginaln??, niebanaln?? stylizacj?? ??? ten rodzaj fryzury zdaje si?? pasowa?? ku temu idealnie. Niewa??ne, jaki typ w??os??w mamy, wykonanie upi??cia jest do zrobienia na ka??dym z nich. Mo??liwo??ci stylizacji natomiast s?? nieograniczone, to Ty decydujesz, w kt??r?? stron?? p??jdziemy ??? klasycznych, sprawdzonych upi????, a mo??e niezwyk??ych fantazji rodem z najnowszych katalog??w modowych.',
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
    text: 'Odkryj sw??j naturalny kolor w??os??w na nowo',
    contentDescriptionsData : [
      {
        header: 'Dekoloryzacja w??os??w - co to jest?',
        text: 'Poj??cie to oznacza ??ci??gni??cie koloru z w??os??w, zabieg podczas kt??rego usuwane s?? sztuczne barwniki z wn??trza w??osa. Zabieg ten ma na celu pozbycie si?? wprowadzonych podczas koloryzacji pigment??w ze struktury w??osa. Jest to zatem dzia??anie odwrotne do farbowania, pozwalaj??ce usun???? skutki koloryzacji. Wykonuje si?? j?? za pomoc?? dekoloryzatora lub rozja??niacza. Stopie?? skomplikowania procedury dekoloryzacji jest powodem dla kt??rego poddanie si?? zabiegowi w profesjonalnym salonie jest jedynym bezpiecznym wyj??ciem.'
      },
      {
        header: 'Dla kogo przeznaczona jest dekoloryzacja?',
        text: 'Zabieg przeznaczony jest dla os??b niezadowolonych efektem dokonanego uprzednio farbowania w??os??w. Ciemne kolory takie jak czarny, br??zowy, czerwony i ciemno-rudy usun???? mo??na tylko poprzez dekoloryzacj??. Nale??y mie?? na uwadze fakt, ??e sam zabieg jest do???? inwazyjny i mo??e mocno os??abi?? struktur?? w??os??w, zatem warto zadba?? o w??osy przed przyst??pieniem do niego.'
      },
      {
        header: 'Piel??gnacja w??os??w po dekoloryzacji',
        text: 'W??osy po dekoloryzacji mog?? by?? os??abione oraz przesuszone. Nale??y zatem bezzw??ocznie zaj???? si?? ich regeneracj??. Najwa??niejsz?? czynno??ci?? po zabiegu jest gruntowne nawil??enie w??os??w. Szczeg??lnie pomocne w tym wypadku s?? g????boko nawil??aj??ce zabiegi lub prostowanie keratynowe, kt??re natychmiastowo odbudowuje struktur?? w??osa. Do codziennej piel??gnacji r??wnie?? warto wybiera?? kosmetyki zawieraj??ce w sk??adzie keratyn??.'
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
    header: 'Przed??u??anie i zag??szczanie w??os??w',
    text: 'Niezawodny spos??b na b??yskawiczn?? metamorfoz??',
    contentDescriptionsData : [
      {
        header: 'Wy??niona fryzura?',
        text: 'Jakakolwiek fryzura Ci si?? marzy ??? wystarczy jedna wizyta w naszym salonie by?? mog??a si?? ni?? cieszy??. D??ugie i g??ste w??osy s?? na wyci??gni??cie r??ki, a poniewa?? do zabiegu wykorzystujemy naturalne w??osy, efekt nie sprawia wra??enia sztuczno??ci. Gwarantujemy, ??e po tym zabiegu wyjdziesz od nas zupe??nie odmieniona.'
      },
      {
        header: 'Co warto wiedzie???',
        text: 'Zabieg przed??u??ania i zag??szczania w??os??w w naszym salonie wykonujemy metod?? kanapkow??. Jest to najbezpieczniejsza metoda pozwalaj??ca osi??gn???? d??ugotrwa??y efekt. Korzystamy z najwy??szej jako??ci naturalnych w??os??w, dzi??ki czemu mo??na je u??ytkowa?? nawet przez rok.  Lekko???? doczepionych w??os??w sprawia, ??e nie odczuwamy dyskomfortu wywo??anego noszeniem ich.'
      },
      {
        header: 'Jak piel??gnowa?? w??osy po przed??u??eniu i zag??szczeniu?',
        text: 'Doczepiane w??osy s?? w stu procentach naturalne, oznacza to tyle, ??e mo??na je traktowa?? jak swoje w??asne ??? prostowa??, suszy?? suszark?? czy te?? kr??ci?? na lok??wce. Zalecane jest jednak korzystanie z dedykowanej szczotki do w??os??w doczepianych, nie wyczesze ona doklejonych pasm. Doczepione w??osy wygl??daj?? w pe??ni naturalnie, s?? b??yszcz??ce, zdrowe i lekkie. Efekt ten utrzymuje si?? i nie wymaga korekt, ani ??adnych dodatkowych zabieg??w nawet przez kilka miesi??cy.'
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
    header: 'Keratynowe prostowanie w??os??w',
    text: 'Idealnie wyg??adzone w??osy',
    contentDescriptionsData : [
      {
        header: '',
        text: 'Klientkom, kt??rych w??osy maj?? sk??onno??ci do puszenia si?? i elektryzowania polecamy zabieg keratynowego prostowania w??os??w. Jest to ??wietny spos??b na osi??gni??cie d??ugotrwa??ego efektu prostych i wyg??adzonych w??os??w. Bez wzgl??du, czy Twoje w??osy s?? kr??cone, falowane, czy proste, ale z tendencj?? do wywijania si?? ??? zabieg ten przyniesie po????dany efekt.'
      },
      {
        header: '',
        text: 'Procedura polega na aplikacji keratyny, naturalnego budulca w??osa, bezpo??rednio na w??osy. Nast??pnie w??osy poddawane s?? prostowaniu, kt??rego efekt, dzi??ki obecno??ci keratyny, pozostaje z nami naprawd?? d??ugo. Dzi??ki temu nie ma potrzeby nara??ania w??os??w na wysokie temperatury podczas codziennej stylizacji ??? chronimy je wi??c, poprawiaj??c ich kondycj??.'
      },
      {
        header: 'Dla kogo przeznaczony jest zabieg keratynowego prostowania w??os??w?',
        text: 'Jest to alternatywa dla ka??dej z Pa??, trudni??cej si?? codziennym uk??adaniem w??os??w przy pomocy prostownicy. Zabieg znacz??co skraca czas niezb??dny do codziennej stylizacji, a co najwa??niejsze zapobiega dalszemu niszczeniu w??os??w spowodowanemu prostowaniem domowymi metodami. W??osy nadmiernie wystawiane na dzia??anie wysokich temperatur maj?? tendencj?? do przesuszania si??, elektryzowania i ??amania. Cokolwiek z??ego dzieje si?? z Twoimi w??osami ??? zabieg ten jest bezpieczny, mo??na go z powodzeniem stosowa?? na w??osach zniszczonych wskutek zabieg??w chemicznych i os??abionych.  Sprawdza si?? na wszystkich typach w??os??w ??? kr??conych, falowanych i prostych.'
      },
      {
        header: 'Kiedy stosowa?? keratynowe prostowanie w??os??w?',
        text: 'Cho?? w powszechnej opinii utar??o si??, ??e zabieg ten przeznaczony jest do walki z niesfornymi lokami czy falami, to tak naprawd?? r??wnie cz??sto wykonuje si?? go na w??osach prostych, kt??re przejawiaj?? tendencj?? do wywijania si?? w r????nych kierunkach. Ponadto jest to r??wnie?? zabieg dedykowany w??osom wymagaj??cym natychmiastowej intensywnej regeneracji. Keratynowe prostowanie w??os??w to bezkonkurencyjne rozwi??zanie na problem puszenia si?? w??os??w i trudno??ci z ich codziennym uk??adaniem.'
      },
      {
        header: 'Efekty keratynowego prostowania w??os??w',
        text: 'Efekty tego zabiegu widoczne s?? natychmiast, w??osy dzi??ki niemu s?? l??ni??ce, pe??ne blasku, zdrowe i od??ywione. Co wi??cej ich codzienna stylizacja staje si?? bardzo ??atwa, poniewa?? w??osy nie pusz?? si?? i nie elektryzuj??. Wskutek zabiegu nasze w??osy na co dzie?? zachwycaj?? zdrowym, naturalnym wygl??dem.'
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
    header: 'Mezoterapia ig??owa',
    text: 'Zbawienna moc peptyd??w',
    contentDescriptionsData : [
      {
        header: 'Czym jest mezoterapia ig??owa sk??ry g??owy?',
        text: 'Mezoterapia ig??owa to zabieg powszechnie stosowany w walce z chorobami sk??ry. Zastosowanie tej metody na sk??rze g??owy przynosi natomiast zbawienie osobom borykaj??cym si?? z ??ysieniem oraz wypadaniem i s??ab?? kondycj?? w??os??w. Poza zahamowaniem samego wypadania, terapia pobudza cebulki w??os??w, co mo??e nawet spowodowa?? znaczny odrost nowych w??os??w. Zabieg polega na ostrzykiwaniu sk??ry g??owy mikroig??ami, kt??rymi wprowadzany jest preparat leczniczy.'
      },
      {
        header: 'Zalety mezoterapii ig??owej sk??ry g??owy',
        text: 'Mezoterapia cho?? jest zabiegiem inwazyjnym, bowiem ig??y docieraj?? pod nask??rek, jest ca??kowicie bezpieczna. Nie jest to procedura wymagaj??ca hospitalizacji, opieki anestezjologicznej i nie uczula. Mo??e by?? stosowana na ka??dym typie sk??ry.'
      },
      {
        header: 'Dla kogo przeznaczona?',
        text: 'Przede wszystkim mezoterapi?? poleca si?? osobom dotkni??tym problemem nagminnego wypadania w??os??w i ??ysienia. Zabieg przeciwdzia??a objawom proces??w starzenia si?? sk??ry, co przek??ada si?? r??wnie?? na w??osy.  Fryzura po terapii staje si?? pe??na blasku, g??sta, a w??osy s?? mocne i odporne na uszkodzenia.'
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
    text: 'Spos??b na cienkie i przet??uszczaj??ce si?? w??osy',
    contentDescriptionsData : [
      {
        header: 'Czym jest styling w??os??w?',
        text: 'Styling to nic innego jak rodzaj trwa??ej ondulacji, z t?? r????nic??, ??e wykonuje si?? j?? na grubych wa??kach, w nast??pstwie czego efekt jest bardziej subtelny. Jest to zabieg chemiczny maj??cy na celu sprawi??, by w??osy zyska??y skr??t na ca??ej swojej d??ugo??ci, co przyczynia si?? te?? do ich podniesienia u nasady. Efekt ko??cowy zale??ny jest od rodzaju w??os??w, mo??emy bowiem uzyska?? spr????yste loki, b??d?? w??osy regularnie falowane.'
      },
      {
        header: 'Kto powinien zdecydowa?? si?? na styling?',
        text: 'Styling jest dobrym sposobem, by nada?? fryzurze obj??to??ci. Szczeg??lnie polecany jest zatem osobom o cienkich w??osach. Zabieg przeznaczony jest r??wnie?? wszystkim mi??o??niczkom lok??w i fal, kt??re wskutek stylingu wygl??daj?? bardzo naturalnie. Warto mie?? na uwadze, ??e najlepszy efekt uzyska?? mo??na na w??osach nie d??u??szych ni?? do ??opatek, cho?? sam zabieg stosowany jest z powodzeniem na wszystkich d??ugo??ciach.'
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
    </Routes>    
   );
}
 
export default Page;