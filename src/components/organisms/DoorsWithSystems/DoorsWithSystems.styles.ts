import styled from 'styled-components';

import Container from 'components/atoms/Container';
import { DoorsWithSystemsType } from './DoorsWithSystems';

import { media } from 'theme/media';

export const StyledWrapper = styled.div<{ sectionColor: DoorsWithSystemsType['sectionColor'] }>`
  background-color: ${({ theme, sectionColor }) => sectionColor && theme.colors[sectionColor]};
  padding-block: 40px;

  ${media.up('lg')} {
    padding-block: 100px;
  }
`;

export const StyledContent = styled(Container)``;

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;

  ${media.up('lg')} {
    margin-top: 100px;
  }
`;

export const StyledDownloadLink = styled.a`
  margin-left: -30px;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
  background-color: transparent;
  height: 42px;
  line-height: 42px;
  font-size: 12px;
  font-weight: 700;
  padding: 0 35px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  text-decoration: none;

  & img {
    margin-left: 20px;

    ${media.up('lg')} {
      margin-left: 40px;
    }
  }
`;
