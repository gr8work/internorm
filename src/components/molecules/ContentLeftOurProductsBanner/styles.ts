import LinkWrap from 'components/atoms/LinkWrap';
import styled from 'styled-components';
import { media } from 'theme/media';

export const WrapperContentTextOurProductsBanner = styled.div`
  margin: auto;
  padding: 25px 30px 41px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${media.up('lg')} {
    max-width: 691px;
    padding: 0;
    gap: 40px;
  }
`;
export const WrapperActionProductBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 20px;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.grayBar};
  flex-wrap: wrap;

  ${media.up('lg')} {
    gap: 42px;
  }
`;
export const WrapperLinkAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  p {
    flex-shrink: 0;
  }

  ${media.up('lg')} {
    gap: 20px;
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
    flex-shrink: 0;
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
`;
