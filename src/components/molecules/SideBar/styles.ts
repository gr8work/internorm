import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.nav<{ isOpen: boolean }>`
  width: 320px;
  height: calc(100% - 102px);
  position: fixed;
  top: 102px;
  background: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(-10px 23px 20px rgba(0, 0, 0, 0.16));
  z-index: 3;
  right: 0;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '600px')});

  ${media.up('lg')} {
    width: 578px;
    height: calc(100% - 138px);
    top: 138px;
  }
`;

const Content = styled.div`
  height: calc(100% - 163px);
  width: 100%;
  overflow: auto;
  padding: 0 17px 26px;
  ${media.up('lg')} {
    padding: 0 56px 0 79px;
    height: calc(100% - 238px);
  }
`;

const ListButton = styled.div`
  ${media.up('lg')} {
    display: none;
  }
`;

const FixedButton = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  button,
  a {
    width: 100%;
  }
`;

export { Wrapper, Content, ListButton, FixedButton };
