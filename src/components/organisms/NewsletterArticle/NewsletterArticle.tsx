import React from 'react';
import Title from 'components/atoms/Title';
import {
  StyledWpImage,
  WrapperContentNewsletter,
  WrapperNewsletter,
} from './NewsletterArticle.styles';
import Text from 'components/atoms/Text';
import { WrapperActionNewsletter } from 'components/molecules/SmallNewsletter/SmallNewsletter.styles';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { WpImageType } from 'components/atoms/WpImage';

export type NewsletterArticleType = {
  title: string;
  subTitle: string;
  text: string;
  image: WpImageType;
};

const NewsletterArticle = ({ title, subTitle, text, image }: NewsletterArticleType) => (
  <WrapperNewsletter>
    <WrapperContentNewsletter>
      <Title {...{ title, subTitle, type: 'newsletter-post' }} />
      <Text {...{ text }} />
      <WrapperActionNewsletter>
        <Input
          placeholder="Twój adres e-mail"
          handleChange={() => console.log('test')}
          name="newsletter"
          type="email"
        />
        <Button text="ZAPISZ SIĘ" />
      </WrapperActionNewsletter>
      <Input
        type="checkbox"
        name="policy"
        text="Zapoznałam/em się z informacją o administratorze i przetwarzaniu danych *"
        handleChange={() => console.log('test')}
      />
      <Input
        type="checkbox"
        name="policy"
        text=" Wyrażam zgodę na otrzymywanie od Internorm Polska informacji o aktualnościach, nowościach, poradach i promocjach na podany adres e-mail. Więcej informacji w Polityce prywatności *"
        handleChange={() => console.log('test')}
      />
    </WrapperContentNewsletter>
    <StyledWpImage {...image} />
  </WrapperNewsletter>
);
export default NewsletterArticle;
