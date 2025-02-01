import React from 'react';
import styled from 'styled-components';

import WpImage from 'components/atoms/WpImage';
import type { ContentThemeImage } from 'components/organisms/PostContentRenderer';
import { media } from 'theme/media';

const StyledWpImage = styled(WpImage)`
  --container-width: 1137px;

  display: block;
  max-width: var(--container-width);
  margin: 0 auto 50px;
  min-height: 453px;
  max-height: 600px;

  ${media.up('lg')} {
    max-height: 453px;
    margin-bottom: 70px;
  }
`;

const PostImage = ({ image }: ContentThemeImage) => <StyledWpImage {...image} />;

export default PostImage;
