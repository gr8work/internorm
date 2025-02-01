import { WindowGuideInfoType } from 'components/organisms/InspirationWindowGuideIntro';
import { RecommendedProductsType } from 'components/organisms/RecommendedProducts';
import { RelatedPostType } from 'components/organisms/RelatedPosts';

type DataType = {
  intro: WindowGuideInfoType;
  recommendedProducts: RecommendedProductsType;
  relatedPosts: RelatedPostType;
};

export const windowGuide: DataType = {
  intro: {
    title: '<h1>Okna narożne - wady i zalety, rodzaje i aranżacje</h1>',
    text: '<p><strong>W ostatnich latach okna narożne ponownie cieszą się ogromną popularnością. Doskonale wpisują się one w projekty nowoczesnych domów, w których przeszklenia odgrywają zwykle kluczową rolę. Przed zdecydowaniem się na ten rodzaj stolarki okiennej warto dokładnie poznać jej wady i zalety, gdyż ten rodzaj konstrukcji - choć bardzo efektowny - nie jest wolny od skaz.</strong></p>',
    image: {
      src: 'inspirations/oknonaruzne.png',
      alt: 'Trzecia szyba gratis',
    },
    dataText: '19 LIPCA 2021',
    // TODO "textTags" need to generate it dynamically from content later
    textTags: [
      'Co to jest okno narożne?',
      'Rodzaje okien narożnikowych',
      'Okna narożne bez słupka czy ze słupkiem - co wybrać?',
      'Okna narożne bez słupka czy ze słupkiem - co wybrać?',
      'Zalety i wady okien narożnikowych bez słupka',
      'Ile kosztuje okno narożne?',
    ],
  },
  recommendedProducts: {
    title: 'POLECANE PRODUKTY',
    products: [
      {
        name: '<h3>HF 310</h3>',
        description:
          'Nowość! Udoskonalona konstrukcją profilu okiennego. W modelu tym zastosowano nowoczesną technologię I-tec Core, dzięki której okno jest bardziej stabilne i trwałe.',
        category: 'OKNA DREWNO-ALUMINIUM',
        linkTo: './',
        image: {
          src: 'inspirations/polecany-produkt.png',
          alt: 'HF 310',
        },
      },
      {
        name: '<h3>HF 310</h3>',
        description:
          'Nowość! Udoskonalona konstrukcją profilu okiennego. W modelu tym zastosowano nowoczesną technologię I-tec Core, dzięki której okno jest bardziej stabilne i trwałe.',
        category: 'OKNA DREWNO-ALUMINIUM',
        linkTo: './',
        image: {
          src: 'inspirations/polecany-produkt.png',
          alt: 'HF 310',
        },
      },
      {
        name: '<h3>HF 310</h3>',
        description:
          'Nowość! Udoskonalona konstrukcją profilu okiennego. W modelu tym zastosowano nowoczesną technologię I-tec Core, dzięki której okno jest bardziej stabilne i trwałe.',
        category: 'OKNA DREWNO-ALUMINIUM',
        linkTo: './',
        image: {
          src: 'inspirations/polecany-produkt.png',
          alt: 'HF 310',
        },
      },
    ],
  },
  relatedPosts: {
    title: 'PODOBNE WPISY',
    postItems: [
      {
        id: '1',
        typePost: 'wymiana',
        title: '<h3>Wymiana szyby w oknie – cena i instruktaż krok po kroku</h3>',
        data: '<strong>14 KWIETNIA 2022</strong>',
        linkTo: './',
        tagOfPost: 'Wymiana okien',
        imgOfPost: {
          src: 'inspirations/poradnik-img-du.png',
          alt: 'Wymiana szyby w oknie',
        },
      },
      {
        id: '2',
        typePost: 'wymiana',
        title: '<h3>Styl boho – charakterystyka, okna, dekoracje</h3>',
        data: '14 KWIETNIA 2022',
        linkTo: './',
        tagOfPost: 'Wymiana okien',
        imgOfPost: {
          src: 'inspirations/home-soft-ispairation.png',
          alt: 'Wymiana szyby w oknie',
        },
      },
      {
        id: '3',
        typePost: 'design',
        title: '<h3>Wymiana szyby w oknie – cena i instruktaż krok po kroku</h3>',
        data: '14 KWIETNIA 2022',
        linkTo: './',
        tagOfPost: 'Wymiana okien',
        imgOfPost: {
          src: 'inspirations/home-soft-ispairation.png',
          alt: 'Wymiana szyby w oknie',
        },
      },
    ],
  },
};
