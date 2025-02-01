import React from 'react';
import {
  StyledAuthorContent,
  StyledAuthorImage,
  StyledAuthorWrapper,
  StyledLinkWrap,
  WrapperActionSliderVertical,
  WrapperDescriptionBannerSlider,
} from './styles';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import { ISliderVerticalDescription } from './interface';
import ArrowIconRight from 'assets/icon-components/ArrowIconRight';
import FadeIn from 'components/atoms/FadeIn';
import RichText from 'components/atoms/RichText';

export const BannerSliderVerticalDescription = ({
  subTitle,
  title,
  description,
  typeText,
  linkText,
  buttonText,
  linkTo,
  buttonLink,
  typeButton,
  typeTitle,
  author,
}: ISliderVerticalDescription) => (
  <WrapperDescriptionBannerSlider>
    <FadeIn>
      <Title subTitle={subTitle} type={typeTitle} title={title} />
    </FadeIn>
    <FadeIn>
      <Text type={typeText} text={description} />
    </FadeIn>
    {author ? (
      <StyledAuthorWrapper>
        <StyledAuthorImage {...author.image} />
        <StyledAuthorContent>
          <RichText html={author.title} />
          <p>{author.subTitle}</p>
        </StyledAuthorContent>
      </StyledAuthorWrapper>
    ) : null}
    <FadeIn>
      <WrapperActionSliderVertical>
        <Button text={buttonText} type={typeButton} link={buttonLink} />
        {linkText && <p>lub</p>}
        {linkText ? (
          <StyledLinkWrap url={linkTo ?? ''}>
            {linkText}
            <ArrowIconRight />
          </StyledLinkWrap>
        ) : null}
      </WrapperActionSliderVertical>
    </FadeIn>
  </WrapperDescriptionBannerSlider>
);
