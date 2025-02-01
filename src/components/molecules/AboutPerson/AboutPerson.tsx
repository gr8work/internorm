import React from 'react';
import { IAboutPerson } from './interface';
import { StyledWrapper, StyledImage, StyledContent } from './styles';
import WpImage from 'components/atoms/WpImage';

const AboutPerson = ({ image, name, email, phone }: IAboutPerson) => (
  <StyledWrapper>
    <StyledImage>
      <WpImage {...image} />
    </StyledImage>
    <StyledContent>
      <p>
        <strong>{name}</strong>
      </p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </StyledContent>
  </StyledWrapper>
);

export default AboutPerson;
