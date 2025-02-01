import WpImage from 'components/atoms/WpImage';
import ArrowMore from 'components/atoms/ArrowMore';
import styled from 'styled-components';
import { media } from 'theme/media';
import ImageHover from 'components/atoms/ImageHover';

export const StyledWpImage = styled(WpImage)`
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  /* grid-area: image; */
`;

export const StyledTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 1.2;
  grid-area: title;

  ${media.up('lg')} {
    font-size: 30px;
  }
`;

export const StyledImageHover = styled(ImageHover)`
  grid-area: image;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 2;
  letter-spacing: 0.5px;
`;

export const StyledArrowMore = styled(ArrowMore)`
  margin-top: 20px;
  grid-area: more;
`;

export const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  grid-area: details;
`;

export const StyledDate = styled.time`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.redLink};
  line-height: 1.5;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledTag = styled.div`
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 3px 12px;
  border-radius: 13px;
  font-size: 14px;
  letter-spacing: 0.5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &[data-variant='inspirations'] {
    display: grid;
    height: 100%;
    align-content: start;
    grid-template-areas:
      'image'
      'details'
      'title'
      'more';

    ${StyledWpImage} {
      min-height: 189px;
      max-height: 302px;
    }
  }

  &[data-variant='window-guide'] {
    display: grid;
    grid-template-areas:
      'image'
      'details'
      'title'
      'more';
  }

  &[data-variant='inspirations'][data-index='0'] {
    grid-template-areas:
      'image image'
      'details more'
      'title more';

    grid-template-rows: 1fr max-content max-content;

    ${StyledArrowMore} {
      justify-self: end;
    }

    ${StyledDetails} {
      justify-content: start;
    }

    ${StyledWpImage} {
      max-height: unset;
      height: 100%;
      width: 100%;
    }
  }
`;

export const StyledRealizationStyle = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.redLink};
`;
