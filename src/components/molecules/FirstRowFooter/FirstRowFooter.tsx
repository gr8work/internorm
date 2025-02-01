import React from 'react';
import {
  Wrapper,
  FooterSocialDescription,
  LogoInternormWrapper,
  SubTitleFooter,
  SubTitleFooterText,
  SybTitleFooterRed,
  StyledContactList,
  ContactText,
  StyledIconWrapper,
  StyledSocialMediaList,
  StyledSocialIconWrapper,
} from './styles';
import LogoInternormSVG from 'assets/images/footer/logo.svg';
import FacebookIcon from 'assets/icon-components/FacebookIcon';
import BannerFooter, { BannerFooterProps } from 'components/molecules/BannerFooter';
import { useBreakpoints } from 'hooks/useBreakpoints';
import EmailIcon from 'assets/icon-components/EmailIcon';
import PhoneIcon from 'assets/icon-components/PhoneIcon';
import TwitterIcon from 'assets/icon-components/TwitterIcon';
import InstagramIcon from 'assets/icon-components/InstagramIIcon';
import LinkedinIcon from 'assets/icon-components/LinkedinIcon';
import YoutubeIcon from 'assets/icon-components/YoutubeIcon';
import PinterestIcon from 'assets/icon-components/PinterestIcon';
import { CopyrightFooterProps } from 'components/molecules/Copyright/copyright';

export type FooterInfoType = {
  aboutUsText: string;
  contact: {
    heading: string;
    contactList: {
      type: string;
      visibleText: string;
      formattedText: string;
    }[];
  };
  otherLinks: {
    architectLink: {
      uri: string;
    };
    partnerLink: {
      uri: string;
    };
  };
  socialMediaList: {
    type: string;
    link: {
      url: string;
      target: string;
    };
  }[];
  bannerFooter: BannerFooterProps;
  copyright: CopyrightFooterProps;
};

const contactIconsMap = {
  email: <EmailIcon />,
  phone: <PhoneIcon />,
};

const socialIconsMap = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  pinterest: <PinterestIcon />,
  linkedin: <LinkedinIcon />,
  youtube: <YoutubeIcon />,
};

export const FirstRowFooter = ({
  aboutUsText,
  contact,
  otherLinks,
  socialMediaList,
  bannerFooter,
}: FooterInfoType) => {
  const { isSmall } = useBreakpoints();

  return (
    <Wrapper>
      <LogoInternormWrapper>
        <img src={LogoInternormSVG} alt="logo Internorm" />
      </LogoInternormWrapper>
      <FooterSocialDescription>{aboutUsText}</FooterSocialDescription>
      {isSmall ? <BannerFooter {...bannerFooter} /> : null}
      <SubTitleFooterText>{contact.heading}</SubTitleFooterText>
      <StyledContactList>
        {contact.contactList?.map((item) => (
          <li key={item.visibleText}>
            <ContactText
              url={
                item.type === 'email' ? `mailto:${item.formattedText}` : `tel:${item.formattedText}`
              }
            >
              <StyledIconWrapper>{contactIconsMap[item.type]}</StyledIconWrapper>
              <span>{item.visibleText}</span>
            </ContactText>
          </li>
        ))}
      </StyledContactList>

      <StyledSocialMediaList>
        {socialMediaList?.map((item) =>
          item.type ? (
            <li key={item.type}>
              <ContactText url={item.link?.url ?? '/'} target={item.link?.target}>
                <StyledSocialIconWrapper>{socialIconsMap[item.type]}</StyledSocialIconWrapper>
              </ContactText>
            </li>
          ) : null
        )}
      </StyledSocialMediaList>

      <SubTitleFooter to={otherLinks.partnerLink.uri ?? '/'}>ZOSTAŃ PARTNEREM</SubTitleFooter>
      <SybTitleFooterRed to={otherLinks.architectLink.uri ?? '/'}>
        STREFA ARCHITEKTA
      </SybTitleFooterRed>
    </Wrapper>
  );
};
