import React from 'react';

import {
  QualityTooltipsContainer,
  QualityTooltipsTitle,
  QualityTooltipsWrapper,
  TextDescriptionQuality,
  WrapperDescriptionQuality,
  WrapperSwiperToolTip,
  ListQualityDescription,
  PaginationSliderTooltip,
  StyledSlider,
  StyledButton,
} from './QualityTooltips.styles';
import { ButtonType } from 'components/atoms/Button';
import SliderToolTips, { SliderToolTipType } from 'components/molecules/SliderToolTips';
import { StyledReactTooltip } from 'components/molecules/SliderToolTips/SliderToolTips.styles';
import FadeIn from 'components/atoms/FadeIn';

export const customPaging = (i: number) => <span>{i + 1}</span>;

export const appendDots = (dots: React.ReactNode) => (
  <PaginationSliderTooltip>
    <ul> {dots} </ul>
  </PaginationSliderTooltip>
);
export type QualityTooltipsType = {
  title: string;
  descFirst: string;
  listQuality: { text: string }[];
  descSecond: string;
  button: ButtonType;
  toolTipSliders: SliderToolTipType[];
};

const QualityTooltips = ({
  title,
  listQuality,
  toolTipSliders,
  descSecond,
  descFirst,
  button,
}: QualityTooltipsType) => (
  <QualityTooltipsWrapper id="jakosc">
    <QualityTooltipsContainer>
      <WrapperDescriptionQuality>
        <FadeIn>
          <QualityTooltipsTitle>{title}</QualityTooltipsTitle>
        </FadeIn>
        <FadeIn>
          <TextDescriptionQuality>
            <strong>{descFirst}</strong>
          </TextDescriptionQuality>
        </FadeIn>
        <FadeIn>
          <ListQualityDescription>
            {listQuality?.map(({ text }) => (
              <li key={text}>{text}</li>
            ))}
          </ListQualityDescription>
        </FadeIn>
        <FadeIn>
          <TextDescriptionQuality>{descSecond}</TextDescriptionQuality>
        </FadeIn>
        <FadeIn>
          <StyledButton {...{ text: button.label, link: button.link }} type="red-light" />
        </FadeIn>
      </WrapperDescriptionQuality>
      <WrapperSwiperToolTip>
        <StyledReactTooltip type="light" effect="solid" />
        <StyledSlider
          variant="secondaryLeft"
          slides={toolTipSliders.map((slide) => (
            <SliderToolTips key={slide.title} {...slide} />
          ))}
        />
      </WrapperSwiperToolTip>
    </QualityTooltipsContainer>
  </QualityTooltipsWrapper>
);

export default QualityTooltips;
