import RichText from 'components/atoms/RichText';
import { WpImageType } from 'components/atoms/WpImage';
import React from 'react';
import {
  StyledAbout,
  StyledAdvantageList,
  StyledContact,
  StyledContent,
  StyledDescription,
  StyledFormPerson,
  StyledFullName,
  StyledPersonImage,
  StyledPosition,
  StyledTitle,
} from './ContactFormAbout.styles';

import Text from 'components/atoms/Text';

export type ContactFormAboutType = {
  text: string;
  subtitle: string;
  heading: string;
  advantageList: {
    text: string;
  }[];
  author: {
    image: WpImageType;
  } & Record<'firstName' | 'lastName' | 'position' | 'email' | 'phone', string>;
};

const ContactFormAbout = ({
  text,
  subtitle,
  heading,
  author,
  advantageList,
}: ContactFormAboutType) => (
  <StyledDescription>
    <StyledContent>
      <StyledTitle subTitle={subtitle} title={heading} />
      <Text text={text} />
      <StyledAdvantageList>
        {advantageList?.map((advantage) => (
          <li key={advantage.text}>
            <RichText html={advantage.text} />
          </li>
        ))}
      </StyledAdvantageList>
    </StyledContent>
    <StyledFormPerson>
      <StyledPersonImage {...author.image} />
      <StyledAbout>
        <StyledFullName>{`${author.firstName} ${author.lastName}`}</StyledFullName>
        <StyledPosition>{author.position}</StyledPosition>
        <StyledContact>{author.email}</StyledContact>
        <StyledContact>{author.phone}</StyledContact>
      </StyledAbout>
    </StyledFormPerson>
  </StyledDescription>
);

export default ContactFormAbout;
