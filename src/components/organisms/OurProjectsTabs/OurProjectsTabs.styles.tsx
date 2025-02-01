import styled from 'styled-components';
import { Tab, TabList, TabPanel } from 'react-tabs';
import { media } from 'theme/media';

export const TabListStyle = styled(TabList)`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.heavenlyWhite};

  ${media.up('lg')} {
    flex-direction: row;
  }

  li {
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: -2px;

    &.react-tabs__tab--selected,
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.redLink};
    }
  }
`;

export const TabPanelStyle = styled(TabPanel)`
  background: ${({ theme }) => theme.colors.lynxWhite};

  &.react-tabs__tab-panel--selected {
    padding-block: 60px;
  }
`;

export const WrapperItemsTab = styled.div`
  display: grid;
  gap: 44px;
  margin-bottom: 40px;

  ${media.up('lg')} {
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 60px;
  }
`;

export const StyledTab = styled(Tab)`
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
