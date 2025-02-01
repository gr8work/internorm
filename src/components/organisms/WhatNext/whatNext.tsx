import React, { FC } from 'react';
import { Wrapper, Box, Content } from './styles';
import { contentIcons } from './data';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import Link from 'components/atoms/Link';
import IconsSwiper from 'components/molecules/IconsSwiper';

export const WhatNext: FC = () => (
  <Wrapper>
    <Box>
      <Content>
        <Title
          subTitle="Standardy obsługi internorm"
          title="<h3>Sprawdź <strong>co dalej!</strong></h3>"
          type="red-opacity"
        />
        <Text
          type="white"
          text="<p>Czyli dowiedz się co się stanie po wypełnieniu formularza kontaktowego lub wysłania do nas
          maila z zapytaniem:</p>"
        />
      </Content>
      <IconsSwiper items={contentIcons} />
    </Box>
  </Wrapper>
);
