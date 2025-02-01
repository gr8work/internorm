import { TextType } from 'components/atoms/Text/interface';
import { TitleType } from 'components/atoms/Title/interface';
import { ButtonType } from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';

export interface ICurrentOfferListProps {
  title: string;
  items: CurrentOffer[];
}

export interface CurrentOffer {
  currentOffer: {
    title: string;
    description: string;
    textOffer: string;
    image: WpImageType;
    button: ButtonType;
    type?: string;
  };
}

export type ISlideVerticalListProps = {
  type: 'dark' | 'light';
  banners: ISlideVertical[];
  customBg?: 'white';
};

export type ISlideVertical = {
  title: string;
  subTitle: string;
  description: string;
  image: WpImageType;
  primaryButton: ButtonType;
  secondaryButton: ButtonType;
  typeText?: TextType;
  typeTitle?: TitleType;
  typeLink?: string;
  typeButton?: string;
  author?: {
    image: WpImageType;
    subTitle: string;
    title: string;
  };
};

export interface ISlideVerticalWrapper {
  type?: 'dark' | 'light';
}

export interface IRewardsListProps {
  rewardItem: IRewardsItem[];
}

export interface IRewardsItem {
  imgSrc: string;
  imgAlt: string;
}
