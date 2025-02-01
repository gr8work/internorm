import styled from 'styled-components';
import { media } from 'theme/media';
import { Link } from 'gatsby';
import LinkWrap from 'components/atoms/LinkWrap';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoInternormWrapper = styled.div`
  width: 148px;
  height: 43px;
`;
export const FooterSocialDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 400;
  margin: 60px 0 30px 0;
  line-height: 28px;
  letter-spacing: 0.7px;

  ${media.up('md')} {
    margin: 60px 0 53px 0;
  }
`;
export const SubTitleFooterText = styled.p`
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SubTitleFooter = styled(Link)`
  font-size: 14px;
  letter-spacing: 2.8px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayBar};

  &:hover {
    color: ${({ theme }) => theme.colors.redLink};
  }
`;
export const SybTitleFooterRed = styled(SubTitleFooter)`
  color: ${({ theme }) => theme.colors.red};

  &:hover {
    color: ${({ theme }) => theme.colors.grayBar};
  }
`;

export const StyledContactList = styled.ul`
  list-style: none;
`;

export const StyledIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.grayBar};
  width: 38px;
  height: 38px;
  transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled(LinkWrap)`
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.4px;
  margin-top: 18px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    ${StyledIconWrapper} {
      background-color: ${({ theme }) => theme.colors.grayBar};
      color: ${({ theme }) => theme.colors.heavenlyWhite};
    }
  }
`;

export const StyledSocialMediaList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 33px;
  margin-bottom: 73px;

  ${media.up('md')} {
    margin-bottom: 64px;
    margin-top: 47px;
  }
`;

export const StyledSocialIconWrapper = styled(StyledIconWrapper)`
  svg {
    width: 20px;
    height: 20px;
  }
`;
