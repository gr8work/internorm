import React from 'react';

import Title from 'components/atoms/Title';
import Container from 'components/atoms/Container';
import Button, { ButtonType } from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import { CustomThemeColorType } from 'theme/styled';

import { Wrapper, Content } from './PromotionBox.styles';
import FadeIn from 'components/atoms/FadeIn';

export type PromotionBoxType = {
  ref?: any;
  subTitle: string;
  title: string;
  text: string;
  button: ButtonType;
  isVisible?: boolean;
  backgroundColor?: CustomThemeColorType;
};

const PromotionBox = ({
  subTitle,
  title,
  text,
  button,
  backgroundColor = 'heavenlyWhite',
  isVisible = false,
}: PromotionBoxType) =>
  isVisible ? (
    <Wrapper bg={backgroundColor}>
      <Container>
        <Content>
          <FadeIn>
            <Title {...{ title, subTitle, type: 'section' }} />
          </FadeIn>
          <FadeIn custom={{ transition: { delay: 0.2 } }}>
            <Text {...{ text }} />
          </FadeIn>
          <FadeIn custom={{ transition: { delay: 0.4 } }}>
            <Button text={button.label} link={button.link} type="dark" />
          </FadeIn>
        </Content>
      </Container>
    </Wrapper>
  ) : null;

export default PromotionBox;
