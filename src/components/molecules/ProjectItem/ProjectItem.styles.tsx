import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import { media } from 'theme/media';

export const ItemProjectStyle = styled.div`
  height: fit-content;
  width: 100%;
  transition: all 0.4s ease-in-out;
  &:hover{
    transform: scale(1.03);
  }
`;

export const ProjectDescriptionLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 26px;

  a {
    margin-top: 12px;
  }

  ${media.up('lg')} {
    flex-direction: row;

    a {
      margin: 0;
    }
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const StyledWpImage = styled(WpImage)`
  min-height: 285px;
  aspect-ratio: 1;
  max-height: 485px;

  ${media.up('lg')} {
    aspect-ratio: unset;
    height: 485px;
  }
`;
