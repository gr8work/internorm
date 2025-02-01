import React from 'react';
import NewsletterArticle, { NewsletterArticleType } from 'components/organisms/NewsletterArticle';
import ContactAs, { ContactAsType } from 'components/molecules/ContactAs';
import { ContainerNewsletterAndContact } from './NewsletterAndContact.styles';

export type NewsletterAndContactType = {
  contactUsBox: ContactAsType;
  newsletterArticle: NewsletterArticleType;
};

const NewsletterAndContact = ({ contactUsBox, newsletterArticle }: NewsletterAndContactType) => (
  <ContainerNewsletterAndContact>
    <ContactAs {...contactUsBox} />
    <NewsletterArticle {...newsletterArticle} />
  </ContainerNewsletterAndContact>
);
export default NewsletterAndContact;
