import styled from 'styled-components';
import { media } from 'theme/media';

export const TitleRewards = styled.p`
  color: ${({ theme }) => theme.colors.grayBar};
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 18px;
  font-weight: 400;
  text-align: center;
  margin-block: 69px 22px;

  ${media.up('lg')} {
    display: none;
  }
`;
export const TitleRewardsDesktop = styled.p`
  display: none;
  color: ${({ theme }) => theme.colors.grayBar};
  letter-spacing: 2px;
  line-height: 18px;
  font-weight: 400;
  font-size: 13px;

  ${media.up('lg')} {
    display: block;
    margin-right: 100px;
  }
`;
export const WrapperImagesRewards = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;

  margin-block: 22px 75px;

  &:first-child {
    padding-left: 205px;
  }

  ${media.up('md')} {
    &:first-child {
      padding-left: 0;
    }
  }

  ${media.up('lg')} {
    gap: 30px;
    margin: 0;
  }

  img {
    min-width: 78px;
  }
`;

export const ContainerRewardsMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll auto;
  margin-bottom: 12px;

  p {
    margin-bottom: 22px;
  }

  ${media.up('lg')} {
    display: none;
  }
`;
export const ContainerRewardsDesktop = styled(ContainerRewardsMobile)`
  display: none;

  ${media.up('lg')} {
    display: flex;
    flex-direction: row;
    margin-block: 98px 128px;
    overflow: unset;

    p {
      margin-bottom: 0;
    }
  }
`;
