import styled from "styled-components";
import { media } from "theme/media";

const VideoButton = styled.div<{side: string}>`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 95px;
  ${({side}) => side}: calc(120px * 1.2);
  z-index: 5;
  &:hover{
    div{
      opacity: 1;
    }
  }
  ${media.down('lg')} {
    bottom: 75px;
    ${({side}) => side}: calc(100px * 1.2);
  }
  ${media.down('md')} {
    bottom: 55px;
    ${({side}) => side}: calc(80px * 1.2);
  }
  ${media.down('sm')} {
    bottom: 15px;
    ${({side}) => side}: calc(50px * 1.2);
    &:hover{
      div{
        opacity: 0;
      }
    }
  }
`

const VideoButtonText = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  position: relative;
  opacity: 0;
  &:after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #FFFFFF;
    margin: -4px auto 0;
  }
  p{
    height: 34px;
    position: absolute;
    background: #ffffff;
    border-radius: 4px;
    font-size: 13px;
    margin: 0;
    padding: 0 10px;
    white-space: nowrap;
    line-height: 34px;
  }
`

const VideoMute = styled.button<{icon: string}>`
  width: 50px;
  height: 50px;
  background: url('${({icon}) => icon}');
  background-size: 50px;
  cursor: pointer;
  overline: none;
  border: none;
`

const VideoWrapper = styled.div<{intro: string}>`
  width: 100%;
  height: 46.35vw;
  position: relative;
  overflow: hidden;
  background-image: url("${({intro}) => intro}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .vimeo-full-screen{
    width: 100% !important;
    height: 46.35vw; 
    position: relative;
    iframe{
      width: 100% !important;
      height: 122% !important;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const VideoPopupWrapper = styled.div<{bg: string}>`
  flex: 2;
  background-image: url("${({bg}) => bg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-height: 489px;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37,47,56,1) 0%, rgba(37,47,56,0.15) 50%, rgba(37,47,56,1) 100%);
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
  }
  ${media.down('lg')} {
    width: 100%;
    height: 300px;
    flex: none;
  }
`

const VideoBannerPlay = styled.div<{icon: string}>`
  width: 50px;
  height: 50px;
  background: url('${({icon}) => icon}');
  background-size: 50px;
  cursor: pointer;
  overline: none;
  border: none;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
`

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(37, 47, 56, 0.66);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh * 1.11);
  width: 100%;
`

const Modal = styled.div<{bg?: string}>`
  width: 100%;
  height: 56.25vw;
  max-height: 100vh;
  max-width: calc(177.778vh);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url("${({bg}) => bg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .vimeo-full-screen{
    width: 100% !important;
    height: 100%; 
    position: relative;
    iframe{
      width: 100% !important;
      height: 100% !important;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const CloseButton = styled.div<{side: string}>`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 35px;
  ${({side}) => side}: calc(120px * 1.2);
  z-index: 5;
  &:hover{
    div{
      opacity: 1;
    }
  }
  ${media.down('lg')} {
    top: 35px;
    ${({side}) => side}: calc(100px * 1.2);
  }
  ${media.down('md')} {
    top: 35px;
    ${({side}) => side}: calc(80px * 1.2);
  }
  ${media.down('sm')} {
    top: 15px;
    ${({side}) => side}: calc(50px * 1.2);
    &:hover{
      div{
        opacity: 0;
      }
    }
  }
`

const ModalActionsBack = styled.div`
  width: 100%;
  height: calc(100vh * 1.11);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalActions = styled.div`
  width: 100%;
  max-width: calc(1570px * 1.11);
  height: calc(56.25vw);
  max-height: 885px;
  position: relative;
`

export { VideoButton, VideoButtonText, VideoMute, VideoWrapper, VideoPopupWrapper, VideoBannerPlay, ModalBackground, Modal, CloseButton, ModalActionsBack, ModalActions };