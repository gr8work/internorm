import RichText from 'components/atoms/RichText';
import React, { useState } from 'react';

import { Wrapper, StyledButton, StyledArrowDownIcon, StyledContent } from './Accordion.styles';

export type AccordionType = {
  title: string;
  richTextContent?: string;
  componentContent?: JSX.Element;
  className?: string;
  isAccordionOpen?: boolean;
};

const Accordion = ({
  title,
  richTextContent,
  componentContent,
  className,
  isAccordionOpen = false,
}: AccordionType) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isAccordionOpen);

  const renderRichTextContent = richTextContent ? (
    <StyledContent>
      <RichText html={richTextContent} />
    </StyledContent>
  ) : null;

  const renderComponentContent = componentContent ? (
    <StyledContent>{componentContent}</StyledContent>
  ) : null;

  return (
    <Wrapper isCollapsed={isCollapsed} className={className}>
      <StyledButton onClick={() => setIsCollapsed((prevState) => !prevState)}>
        {title}
        <StyledArrowDownIcon />
      </StyledButton>
      {renderRichTextContent}
      {renderComponentContent}
    </Wrapper>
  );
};

export default Accordion;
