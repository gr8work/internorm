import React from 'react';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import { Input } from 'components/atoms/Input/input';
import { WrapperActionNewsletter, StyledButton, WrapperNewsletter } from './SmallNewsletter.styles';

export type SmallNewsletterType = {
  titleNewsletter: string;
  subTitleNewsletter: string;
  descriptionNewsletter: string;
  agreementFirst: string;
  agreementSecond: string;
};

export const SmallNewsletter = ({
  titleNewsletter,
  descriptionNewsletter,
  subTitleNewsletter,
  agreementFirst,
  agreementSecond,
}: SmallNewsletterType) => (
  <WrapperNewsletter>
    <Title title={titleNewsletter} subTitle={subTitleNewsletter} type="newsletter-post" />
    <Text text={descriptionNewsletter} />
    <WrapperActionNewsletter>
      <Input
        placeholder="Twój adres e-mail"
        handleChange={() => console.log('test')}
        name="newsletter"
        type="email"
      />
      <StyledButton text="ZAPISZ SIĘ" />
    </WrapperActionNewsletter>
    <Input
      type="checkbox"
      name="policy"
      text={agreementFirst}
      handleChange={() => console.log('test')}
    />
    <Input
      type="checkbox"
      name="policy"
      text={agreementSecond}
      handleChange={() => console.log('test')}
    />
  </WrapperNewsletter>
);
export default SmallNewsletter;
