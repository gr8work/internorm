import styled, { css } from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';
import SocialFacebookIcon from 'assets/icon-components/SocialFacebookIcon';
import SocialTwitterIcon from 'assets/icon-components/SocialTwitterIcon';
import SocialInstagramIcon from 'assets/icon-components/SocialInstagramIcon';
import Text from 'components/atoms/Text';

const ColorHoverSocialMixin = css`
  fill: ${({ theme }) => theme.colors.heavenlyWhite};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.colors.grayBar};
    color: ${({ theme }) => theme.colors.heavenlyWhite};
  }
`;

export const ContainerSocialShareSmall = styled(Container)`
  max-width: 955px;
`;

export const ContainerSocialShareWindowGuide = styled(Container)`
  max-width: 1137px;
`;

export const WrapContentSocialShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-block: 40px;
  padding-top: 30px;

  ${media.up('lg')} {
    margin-block: 80px 60px;
    padding-left: 204px;
  }
`;

export const ShareLink = styled.a`
  display: flex;
  max-width: 28px;
  max-height: 28px;
  z-index: 1;
  cursor: pointer;
  color: inherit;
`;

export const WrapperShareLinks = styled.div`
  display: flex;
  gap: 8px;
`;

export const SocialInstagramIconStyle = styled(SocialInstagramIcon)`
  ${ColorHoverSocialMixin}
`;

export const SocialTwitterIconStyle = styled(SocialTwitterIcon)`
  ${ColorHoverSocialMixin}
`;

export const SocialFacebookIconStyle = styled(SocialFacebookIcon)`
  ${ColorHoverSocialMixin}
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.8px;
  line-height: 19px;
  color: #6e6e6e;
  margin-bottom: 10px;
`;
