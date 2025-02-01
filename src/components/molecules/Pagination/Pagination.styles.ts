import styled from 'styled-components';

import Icon from 'components/atoms/Icon';

export const StyledArrowIcon = styled(Icon)``;

export const StyledDot = styled.span<{ active: boolean }>`
  display: block;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  background: ${({ active, theme }) => (active ? theme.colors.redLink : 'transparent')};
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.gray)};
  cursor: pointer;
`;

export const StyledMoreDots = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({theme }) => theme.colors.gray};
`

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: max-content;
  margin-inline: auto;
`;
