import React from 'react';
import {
  WrapContentSocialShare,
  ShareLink,
  SocialFacebookIconStyle,
  SocialInstagramIconStyle,
  SocialTwitterIconStyle,
  WrapperShareLinks,
  StyledText,
} from './SocialShare.styles';

export interface SocialShareIcon {
  background: string;
}

const SocialShare = () => {
  const linkOfPage = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <WrapContentSocialShare>
      <StyledText text="Udostępnij wpis swoim znajomym!" />
      <WrapperShareLinks>
        <ShareLink href={`https://www.facebook.com/sharer.php?u=${linkOfPage}`}>
          <SocialFacebookIconStyle />
        </ShareLink>
        <ShareLink>
          <SocialInstagramIconStyle />
        </ShareLink>
        <ShareLink href={`https://twitter.com/intent/tweet?url="${linkOfPage}`}>
          <SocialTwitterIconStyle />
        </ShareLink>
      </WrapperShareLinks>
    </WrapContentSocialShare>
  );
};
export default SocialShare;
