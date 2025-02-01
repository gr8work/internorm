import React, { useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import YouTube from '@u-wave/react-youtube';

import {
  VideoButton,
  VideoButtonText,
  VideoMute,
  ModalBackground,
  Modal,
  CloseButton,
  ModalActionsBack,
  ModalActions,
} from './styled';
import { IVideoComponent } from './interface';

import muteBt from 'assets/icons/video/mute.svg';
import muteBtOff from 'assets/icons/video/mute-off.svg';
import play from 'assets/icons/video/play.svg';
import pause from 'assets/icons/video/pause.svg';
import close from 'assets/icons/video/close.svg';

const VideoComponent = ({ type = 'vimeo', intro, id, handleClick }: IVideoComponent) => {
  const [isMuted, setMuted] = useState(0);
  const [isPLay, setPlayed] = useState(true);

  return (
    <ModalBackground>
      <ModalActionsBack>
        <ModalActions>
          <CloseButton side="right">
            <VideoMute icon={close} onClick={() => handleClick()} />
          </CloseButton>
          <VideoButton side="left">
            <VideoMute
              icon={isPLay ? play : pause}
              onClick={() => (isPLay ? setPlayed(false) : setPlayed(true))}
            />
          </VideoButton>
          <VideoButton side="right">
            <VideoMute
              icon={isMuted === 0 ? muteBt : muteBtOff}
              onClick={() => (isMuted === 0 ? setMuted(1) : setMuted(0))}
            />
            <VideoButtonText>
              <p>{isMuted === 0 ? 'Włącz dźwięk' : 'Wyłącz dźwięk'}</p>
            </VideoButtonText>
          </VideoButton>
        </ModalActions>
      </ModalActionsBack>
      <Modal bg={intro}>
        {type === 'vimeo' ? (
          <Vimeo
            onReady={() => setPlayed(false)}
            video={id}
            volume={isMuted}
            autoplay
            paused={isPLay}
            controls={false}
            className="vimeo-full-screen"
            loop
          />
        ) : null}
        {type === 'youtube' ? (
          <YouTube
            onReady={() => setPlayed(false)}
            video={id}
            volume={isMuted}
            autoplay
            paused={isPLay}
            controls={false}
            className="vimeo-full-screen"
            loop
          />
        ) : null}
      </Modal>
    </ModalBackground>
  );
};

export default VideoComponent;
