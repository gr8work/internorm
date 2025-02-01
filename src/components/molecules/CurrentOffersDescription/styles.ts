import styled from 'styled-components';
import { ICustomOfferDescription } from 'components/molecules/CurrentOffersDescription/interface';
import LinkWrap from 'components/atoms/LinkWrap';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import { media } from 'theme/media';

export const StyledTitle = styled(Title)`
  & * {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 1.2;
    min-height: 73px;

    ${media.up('md')} {
      margin-bottom: 40px;
      min-height: auto;
    }
  }
`;

export const StyledText = styled(Text)`
  min-height: 227px;

  & * {
    font-size: 14px;
    line-height: 2;
    letter-spacing: 0.5px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  ${media.up('md')} {
    min-height: 144px;

    & * {
      -webkit-line-clamp: 5;
      line-clamp: 5;
    }
  }
`;

export const WrapperActionPromo = styled.div<ICustomOfferDescription>`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  ${media.up('md')} {
    flex-direction: row;
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

export const StyledOfferText = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2.6px;
  font-weight: 700;
  text-transform: uppercase;

  ${media.up('md')} {
    font-size: 13px;
  }
`;

export const WrapperDescriptionCurrentOffer = styled.div`
  padding: 40px 30px;
  border-radius: 0 0 10px 10px;

  &[data-type='light'] {
    color: ${({ theme }) => theme.colors.grayBar};
    background: ${({ theme }) => theme.colors.heavenlyWhite};

    ${StyledOfferText} {
      color: ${({ theme }) => theme.colors.redLink};
    }

    ${StyledText}, ${StyledTitle} {
      & * {
        color: ${({ theme }) => theme.colors.grayBar};
      }
    }
  }

  &[data-type='dark'] {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.grayBar};

    ${StyledOfferText} {
      color: ${({ theme }) => theme.colors.pink};
    }

    ${StyledText}, ${StyledTitle} {
      & * {
        color: ${({ theme }) => theme.colors.billowyClouds};
      }
    }

    ${StyledLinkWrap} {
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        color: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;
