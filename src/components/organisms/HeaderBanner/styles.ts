import styled from 'styled-components';
import { media } from 'theme/media';

const Content = styled.div`
  position: relative;
  padding: 80px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 54px;

  ${media.up('md')} {
    padding: 144px 0 87px;
  }

  ${media.up('lg')} {
    padding: 301px 0 80px;
    gap: 60px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  min-height: 300px;
  overflow: hidden;

  ${media.up('lg')} {
    min-height: 605px;
  }

  ${media.up('xxl')} {
    min-height: 869px;
  }
`;

const WrappedImage = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;

  &.hide {
    opacity: 0;
  }
`;

export { Content, StyledWrapper, WrappedImage };
