export type CurrentOfferType = {
  currentOffer: {
    title: string;
    text: string;
    textOffer: string;
    image: WpImageType;
    button: ButtonType;
    type?: 'dark' | 'light';
  };
};

export type CurrentOffersType = {
  title: string;
  items: CurrentOfferType[];
};
