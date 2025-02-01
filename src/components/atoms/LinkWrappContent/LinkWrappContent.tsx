import React, { ReactNode } from 'react';
import { getFitWpUrl } from 'utils/getFitWpLink';

import { LinkWrapContentStyles } from './LinkWrappContent.styles';

const LinkWrapContent = ({
  link,
  children,
}: {
  link?: { url?: string; target?: string } | string;
  children?: ReactNode;
}) => {
  const url = getFitWpUrl(link);

  return <LinkWrapContentStyles {...{ url, children }} />;
};

export default LinkWrapContent;
