import styled from 'styled-components';
import { media } from 'theme/media';

import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';
import { ProductLinesType } from './ProductLines';
import LinkWrap from 'components/atoms/LinkWrap';

export const StyledWrapper = styled.section<{ sectionColor: ProductLinesType['sectionColor'] }>`
  background-color: ${({ theme, sectionColor }) => sectionColor && theme.colors[sectionColor]};
`;

export const StyledContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding-block: 60px 96px;

  ${media.up('lg')} {
    gap: 30px;
    padding-block: 103px 120px;
  }
`;

export const StyledText = styled(Text)`
  max-width: 645px;
`;

export const StyledFiltersText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grayBar};
  letter-spacing: 2px;
  line-height: 18px;
`;

export const StyledCategoriesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const StyledCategory = styled(LinkWrap)`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  padding: 5px 25px;
  border-radius: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  font-family: ${({ theme }) => theme.font};

  &:hover {
    background-color: ${({ theme }) => theme.colors.redLink};
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const StyledTagSection = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  ${media.up('lg')} {
    gap: 47px;
  }
`;
