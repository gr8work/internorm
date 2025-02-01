import React, { FC } from 'react';
import { IQuality } from './interface';
import { Wrapper, Content, Bottom } from './styles';
import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import ImagesSwiper from 'components/molecules/ImagesSwiper';
import FadeIn from 'components/atoms/FadeIn';

export const Quality: FC<IQuality> = ({
  type,
  typeText = 'white-big',
  subTitle,
  title,
  content,
  items,
  button,
}) => (
  <Wrapper type={type}>
    <Container>
      <Content type={type}>
        {title && (
          <FadeIn>
            <Title type={type !== 'white' ? 'red-opacity' : 'default'} {...{ title, subTitle }} />
          </FadeIn>
        )}
        {content && (
          <FadeIn>
            <Text type={typeText} text={content} />
          </FadeIn>
        )}
      </Content>
    </Container>
    {items && <ImagesSwiper type={type} items={items} />}
    {button?.label ? (
      <Bottom>
        <FadeIn>
          <Button
            {...{
              text: button.label,
              link: button?.link,
              type: type !== 'white' ? 'white' : 'default',
            }}
          />
        </FadeIn>
      </Bottom>
    ) : null}
  </Wrapper>
);
