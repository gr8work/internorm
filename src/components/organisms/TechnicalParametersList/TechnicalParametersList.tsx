import React from 'react';

import { ButtonType } from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Accordion from 'components/molecules/Accordion';

import { StyledButton, StyledList, StyledWrapper } from './TechnicalParametersList.styles';
import FadeIn from 'components/atoms/FadeIn';

export type TechnicalParametersListType = {
  subTitle: string;
  title: string;
  parameters: {
    title: string;
    content: string;
  }[];
  button: ButtonType;
};

const TechnicalParametersList = ({
  subTitle,
  title,
  parameters,
  button,
}: TechnicalParametersListType) => (
  <StyledWrapper>
    <FadeIn>
      <Title {...{ subTitle, title, type: 'section' }} />
    </FadeIn>
    <StyledList as={FadeIn}>
      {parameters.map((param) => (
        <li key={param.title}>
          <Accordion {...{ title: param.title, richTextContent: param.content }} />
        </li>
      ))}
    </StyledList>
    <FadeIn>
      <StyledButton {...{ text: button.label, link: button.link, type: button.type }} />
    </FadeIn>
  </StyledWrapper>
);

export default TechnicalParametersList;
