import React from 'react';

import {
  DivisionWrapper,
  DivisionList,
  BannerWrapAction,
  ImageBannerFooter,
  BannerTextWrapper,
  ButtonStyled,
} from './styles';
import { SubTitleFooterText } from 'components/molecules/FirstRowFooter/styles';
import { Link } from 'gatsby';
import WpImage, { WpImageType } from 'components/atoms/WpImage';

type LocationType = {
  name: string;
  url: { id: string; uri: string };
};

export type BannerFooterProps = {
  heading: string;
  text: string;
  locations: LocationType[];
  locationHeading: string;
  image: WpImageType;
  buttonLabel: string;
};

export const BannerFooter = ({
  heading,
  text,
  locations,
  locationHeading,
  image,
  buttonLabel,
}: BannerFooterProps) => (
  <BannerTextWrapper>
    <BannerWrapAction>
      <SubTitleFooterText>{heading}</SubTitleFooterText>
      <p>{text}</p>
      <ButtonStyled text={buttonLabel} type="white" link="#formularz-kontaktowy" />
      <ImageBannerFooter {...image} />
    </BannerWrapAction>
    <DivisionWrapper>
      <p>{locationHeading}</p>
      <DivisionList>
        {locations.map((location) => (
          <li key={location.url.id}>
            <Link to={location.url.uri}>{location.name}</Link>
          </li>
        ))}
      </DivisionList>
    </DivisionWrapper>
  </BannerTextWrapper>
);
