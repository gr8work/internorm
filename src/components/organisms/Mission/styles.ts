import styled from 'styled-components';
import { media } from 'theme/media';
import ParallaxShadow from 'assets/images/home/parallax-shadow.webp';
import ParallaxShadowMobile from 'assets/images/home/parallax-shadow-mobile.webp';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  padding-bottom: 78px;
  transform-style: preserve-3d;
  .banner {
    height: 250px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;
  margin: 0 auto;
  button,
  a {
    max-width: 582px;
  }
  ${media.up('lg')} {
    max-width: 1120px;
    flex-direction: row;
    gap: 103px;
    align-items: end;
    margin-top: -300px;
    position: relative;
    h4 {
      max-width: 582px;
    }
    button,
    a {
      padding: 0 35px;
      margin-bottom: 25px;
    }
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 240px;
  margin-bottom: 20px;
  position: relative;
  @media(min-width: 550px){
    height: 420px;
  }
  @media(min-width: 967px){
    height: 820px;
  }
  @media(min-width: 1340px){
    height: 1020px;
  }
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 250px;
    background: url('${ParallaxShadowMobile}');
    background-size: cover;
    background-position: top center;
    position: absolute;
    bottom: -2px;
    @media(min-width: 462px){
      height: 300px;
    }
    @media(min-width: 560px){
      height: 400px;
    }
    @media(min-width: 770px){
      height: 500px;
    }
    @media(min-width: 967px){
      height: 600px;
      bottom: -4px;
      background: url('${ParallaxShadow}');
      background-size: cover;
      background-position: top center;
    }
    @media(min-width: 1130px){
      height: 700px;
    }
    @media(min-width: 1240px){
      height: 900px;
      tranform: scale(1.1);
    }
    @media(min-width: 1560px){
      height: 1000px;
    }
    @media(min-width: 1770px){
      height: 1100px;
    }
  }
`

export { Wrapper, Content, VideoWrapper };
