import styled from 'styled-components';
import { media } from 'theme/media';
import {
  StyledContent,
  StyledWrapper,
} from 'components/organisms/ContactUsBanner/ContactUsBanner.styles';

export const StyledWrapperInspiration = styled(StyledWrapper)`
  margin-bottom: 0;

  ${media.up('lg')} {
    grid-template-columns: minmax(300px, 486px) minmax(auto, max-content);
  }

  ${media.down('md')} {
    margin-inline: -30px;
  }
`;

export const StyledDescription = styled.div`
  align-items: center;

  ${media.up('lg')} {
    display: flex;
    gap: 93px;
    justify-content: space-between;
    align-items: center;
  }

  ${media.down('lg')} {
    display: flex;
    flex-direction: column;
    gap: 40px;

    a {
      margin-top: 20px;
      margin-inline: unset;
      font-size: 11px;
    }
  }

  ${media.down('md')} {
    gap: 20px;
  }
`;

export const StyledContentInspiration = styled(StyledContent)`
  ${media.up('lg')} {
    padding-inline: 40px 100px;
  }
`;
