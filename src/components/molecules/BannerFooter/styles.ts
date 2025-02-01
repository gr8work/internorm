import styled from 'styled-components';
import { media } from 'theme/media';
import { Button } from 'components/atoms/Button/button';
import WpImage from 'components/atoms/WpImage';

export const ButtonStyled = styled(Button)`
  ${media.up('md')} {
    margin-top: 40px;
  }

  ${media.down('md')} {
    width: 100%;
  }
`;
export const DivisionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-top: 30px;

  ${media.up('md')} {
    align-items: center;
    margin-top: 40px;
  }

  p {
    font-size: 12px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.grayBar};
  }
`;
export const DivisionList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

  ${media.up('lg')} {
    flex-direction: row;
    width: 90%;
  }

  li {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grayBar};

    a {
      text-transform: uppercase;
      line-height: 28px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.grayBar};

      &:hover {
        color: ${({ theme }) => theme.colors.redLink};
      }
    }

    ${media.down('md')} {
      width: 50%;
    }
  }
`;
export const BannerTextWrapper = styled.div`
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 30px;
  position: relative;

  ${media.up('md')} {
    width: 100%;
    padding: 40px 40px 26px;
  }

  ${media.down('sm')} {
    padding-top: 255px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
`;
export const BannerWrapAction = styled.div`
  font-size: 14px;
  letter-spacing: 0.7px;
  line-height: 20px;

  p {
    color: ${(props) => props.theme.colors.grayBar};
  }

  ${media.up('lg')} {
    max-width: 244px;
  }

  ${media.up('xl')} {
    max-width: 294px;
  }

  p {
    margin: 0 0 19px 0;
  }
`;
export const ImageBannerFooter = styled(WpImage)`
  position: absolute;
  top: -30px;
  right: -28px;
  box-shadow: 40px 40px 40px #2e2b273b;
  max-width: 368px;
  height: 246px;

  ${media.down('sm')} {
    width: 100%;
  }

  ${media.up('md')} {
    right: -20px;
  }

  ${media.up('md')} {
    display: none;
  }

  ${media.up('lg')} {
    display: block;
    right: -100px;
    max-width: 345px;
  }

  ${media.up('xl')} {
    right: -60px;
    max-width: 375px;
  }
`;
