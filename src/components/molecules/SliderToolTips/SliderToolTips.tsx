import React from 'react';
import {
  DotPointToolTip,
  StyledStatsToolTip,
  StyledStatTooltip,
  WrapperImgToolTip,
} from './SliderToolTips.styles';
import { ListQualityDescription } from 'components/organisms/QualityTooltips/QualityTooltips.styles';
import Title from 'components/atoms/Title';

export type SliderToolTipType = {
  image: {
    altText: string;
    localFile: {
      publicURL: string;
    };
  };
  toolTips: {
    positionTop: number;
    positionLeft: number;
    text: string;
  }[];
  subTitle: string;
  title: string;
  list: { text: string }[];
};

export interface PositionOfDot {
  topPercent: number;
  leftPercent: number;
}

const SliderToolTips = ({ image, subTitle, title, list, toolTips = [] }: SliderToolTipType) => (
  <div>
    <WrapperImgToolTip>
      <img src={image.localFile.publicURL} alt={image.altText} />
      <StyledStatsToolTip role="list">
        {toolTips?.map((toolTip) => (
          <StyledStatTooltip
            topPercent={toolTip.positionTop}
            leftPercent={toolTip.positionLeft}
            key={toolTip.text}
            data-tip={toolTip?.text ?? ''}
          >
            <DotPointToolTip key={toolTip.text} />
          </StyledStatTooltip>
        ))}
      </StyledStatsToolTip>
    </WrapperImgToolTip>
    <Title title={title} type="product-title" subTitle={subTitle} />
    <ListQualityDescription>
      {list?.map(({ text }) => (
        <li key={text}>{text}</li>
      ))}
    </ListQualityDescription>
  </div>
);
export default SliderToolTips;
