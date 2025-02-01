import React, { FC, useState } from 'react';
import { IMission } from './interface';
import { Wrapper, Content, VideoWrapper } from './styles';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import FadeIn from 'components/atoms/FadeIn';
import VideoIntro from 'components/molecules/VideoIntro';

export const Mission = ({ image, subTitle, title, button, previewVideo, handleClick }: IMission) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      {previewVideo && <VideoWrapper onClick={() => handleClick()}>
        <VideoIntro id={previewVideo}/>
      </VideoWrapper>}
      <Container>
        <Content>
          <FadeIn>
            <Title type="red-opacity" {...{ title, subTitle }} />
          </FadeIn>

          {button?.label && (
            <FadeIn>
              <Button {...{ text: button.label }} handleClick={() => handleClick()} />
            </FadeIn>
          )}
        </Content>
      </Container>
    </Wrapper>
  )
};
