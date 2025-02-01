import React from 'react';

import {
  StyledButtonsWrapper,
  StyledContentWrapper,
  StyledList,
  TitleDescriptionStyle,
  WrapperSpecialOffer,
  StyledTitle,
  StyledListWrapper,
} from './NewSpecialOffer.styles';

import Text from 'components/atoms/Text';
import Container from 'components/atoms/Container';
import Button, { ButtonType } from 'components/atoms/Button';
import WpImage, { WpImageType } from 'components/atoms/WpImage';
import RichText from 'components/atoms/RichText';
import FadeIn from 'components/atoms/FadeIn';

export type NewSpecialOfferType = {
  title: string;
  subTitle: string;
  description: string;
  titleList: string;
  image: WpImageType;
  buttons: { button: ButtonType }[];
  listItems: {
    text: string;
  }[];
};
const NewSpecialOffer = ({
  title,
  subTitle,
  description,
  titleList,
  listItems,
  image,
  buttons,
}: NewSpecialOfferType) => (
  <WrapperSpecialOffer>
    <TitleDescriptionStyle>
      <FadeIn>{title && <StyledTitle {...{ type: 'section', title, subTitle }} />}</FadeIn>
      <FadeIn>
        <Text text={description} />
      </FadeIn>
    </TitleDescriptionStyle>
    <Container>
      <StyledContentWrapper>
        {listItems && listItems?.length ? (
          <StyledListWrapper>
            <FadeIn>
              <StyledTitle title={titleList} type="section" />
            </FadeIn>
            <FadeIn>
              <StyledList>
                {listItems.map((item) => (
                  <li key={item.text}>
                    <RichText html={item.text} />
                  </li>
                ))}
              </StyledList>
            </FadeIn>
            <FadeIn>
              <StyledButtonsWrapper>
                {buttons?.map(({ button }) => (
                  <Button
                    key={button?.label}
                    text={button?.label}
                    type="white"
                    link={button.link}
                  />
                ))}
              </StyledButtonsWrapper>
            </FadeIn>
          </StyledListWrapper>
        ) : null}
        <div>
          <WpImage {...image} />
        </div>
      </StyledContentWrapper>
    </Container>
  </WrapperSpecialOffer>
);
export default NewSpecialOffer;
