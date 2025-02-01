import LinkWrap from 'components/atoms/LinkWrap';
import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import { media } from 'theme/media';

export const WrapperDescriptionBannerSlider = styled.div`
  margin: auto;
  padding: 30px;

  h2,
  h3,
  h4 {
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
  }

  ${media.up('md')} {
    padding: 30px;
  }

  ${media.up('lg')} {
    max-width: 640px;

    h2,
    h3,
    h4 {
      font-size: 40px;
      line-height: 50px;
    }
  }

  ${media.up('xl')} {
    padding-block: 160px;

    h2,
    h3,
    h4 {
      max-width: 574px;
      margin-bottom: 40px;
    }
  }
`;

export const WrapperActionSliderVertical = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 96px;

  ${media.up('lg')} {
    margin-top: 80px;
    margin-bottom: 0;
  }
`;

export const StyledLinkWrap = styled(LinkWrap)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.redLink};
  }

  & svg {
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;

export const StyledAuthorWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const StyledAuthorImage = styled(WpImage)`
  border-radius: 50%;
  width: 80px;
  aspect-ratio: 1;
`;

export const StyledAuthorContent = styled.div`
  font-size: 14px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 300;

  strong {
    font-weight: 700;
  }
`;
