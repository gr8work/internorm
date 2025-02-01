import RichText from 'components/atoms/RichText';
import { WpImageType } from 'components/atoms/WpImage';
import ArrowIconRight from 'assets/icon-components/ArrowIconRight';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyledAboveCiteText,
  StyledBackgroundImage,
  StyledCite,
  StyledCiteAuthor,
  StyledContainer,
  StyledHiddenText,
  StyledMoreButton,
  StyledSeparator,
  StyledWrapper,
} from './ManifestInternorm.styles';
import { getWindowWidth } from 'utils/browser';

export type ManifestInternormType = {
  backgroundImage: WpImageType;
} & Record<
  'aboveCiteText' | 'buttonTextClose' | 'buttonTextOpen' | 'citeAuthor' | 'hiddenText' | 'cite',
  string
>;

const ManifestInternorm = ({
  backgroundImage,
  aboveCiteText,
  buttonTextClose,
  buttonTextOpen,
  hiddenText,
  citeAuthor,
  cite,
}: ManifestInternormType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('');
  const width = getWindowWidth();
  const hddenTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hiddenTextHeight = `${hddenTextRef?.current?.scrollHeight}px`;
    setHeight(hiddenTextHeight);
  }, [width]);

  const citeWithSign = cite
    .replace('<h2>', '<h2><span>„</span>')
    .replace('<p>', '<p><span>„</span>')
    .replace('<h3>', '<h3><span>„</span>');

  return (
    <StyledWrapper>
      <StyledBackgroundImage {...backgroundImage} objectPosition="center top" />
      <StyledContainer>
        <StyledAboveCiteText>{aboveCiteText}</StyledAboveCiteText>
        <StyledCite>
          <RichText {...{ html: citeWithSign }} />
        </StyledCite>
        <StyledCiteAuthor>{citeAuthor}</StyledCiteAuthor>
        <StyledSeparator />
        <StyledHiddenText ref={hddenTextRef} {...{ isOpen, height }}>
          <RichText {...{ html: hiddenText }} />
        </StyledHiddenText>
        <StyledMoreButton onClick={() => setIsOpen((prev) => !prev)} data-open={isOpen}>
          {isOpen ? buttonTextClose : buttonTextOpen}
          <ArrowIconRight />
        </StyledMoreButton>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default ManifestInternorm;
