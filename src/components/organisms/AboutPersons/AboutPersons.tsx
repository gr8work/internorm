import React from 'react';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import AboutPerson from 'components/molecules/AboutPerson';

import { IAboutPersons } from './interface';
import {
  StyledWrapper,
  StyledContent,
  StyledList,
  StyledListTitle,
  StyledListContent,
} from './styles';
import FadeIn from 'components/atoms/FadeIn';

const AboutPersons = ({ subTitle, title, content, button, listTitle, items }: IAboutPersons) => (
  <StyledWrapper>
    <StyledContent>
      <FadeIn>
        <Title title={title} subTitle={subTitle} />
      </FadeIn>
      <FadeIn>
        <Text text={content} />
      </FadeIn>
      <FadeIn>
        <Button text={button.label} link={button.link} />
      </FadeIn>
    </StyledContent>
    {items && items.length ? (
      <StyledList>
        <StyledListTitle>{listTitle}</StyledListTitle>
        <StyledListContent>
          {items.map((item) => (
            <AboutPerson key={item.name} {...item} />
          ))}
        </StyledListContent>
      </StyledList>
    ) : null}
  </StyledWrapper>
);

export default AboutPersons;
