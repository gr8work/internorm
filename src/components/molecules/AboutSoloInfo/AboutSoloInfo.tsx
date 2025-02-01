import React from 'react';
import { IAboutSoloInfo } from './interface';
import { StyledWrapper, StyledContent, StyledList } from './styles';
import FadeIn from 'components/atoms/FadeIn';
import ArrowMore from 'components/atoms/ArrowMore';

const AboutSoloInfo = ({ title, items, linkText, link }: IAboutSoloInfo) => (
  <StyledWrapper as={FadeIn}>
    <StyledContent>
      <p>{title}</p>
      <StyledList>
        {items.map(({ text, bold }, index) => (
          <li key={index}>{bold ? <strong>{text}</strong> : text}</li>
        ))}
      </StyledList>
    </StyledContent>
    {linkText ? <ArrowMore label={linkText} link={link} /> : null}
  </StyledWrapper>
);

export default AboutSoloInfo;
