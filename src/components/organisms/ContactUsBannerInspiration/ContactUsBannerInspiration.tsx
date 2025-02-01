import React from 'react';
import { ContactUsBannerType } from 'components/organisms/ContactUsBanner';
import { StyledButton } from 'components/organisms/ContactUsBanner/ContactUsBanner.styles';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import Container from 'components/atoms/Container';
import {
  StyledContentInspiration,
  StyledDescription,
  StyledWrapperInspiration,
} from 'components/organisms/ContactUsBannerInspiration/ContactUsBannerInspiration.styles';
import WpImage from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';

const ContactUsBannerInspiration = ({
  image,
  subTitle,
  title,
  text,
  button,
}: ContactUsBannerType) => (
  <Container>
    <StyledWrapperInspiration>
      <WpImage {...image} />
      <StyledContentInspiration>
        <FadeIn>
          <Title {...{ subTitle, title, type: 'newsletter-post' }} />
        </FadeIn>
        <StyledDescription as={FadeIn}>
          <Text {...{ text }} type="contact-us-text" />
          <StyledButton {...{ text: button.label, link: button.link, type: button.type }} />
        </StyledDescription>
      </StyledContentInspiration>
    </StyledWrapperInspiration>
  </Container>
);
export default ContactUsBannerInspiration;
