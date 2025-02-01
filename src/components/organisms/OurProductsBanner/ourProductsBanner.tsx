import React, { FC } from 'react';
import { IOurProductsBanner } from 'components/organisms/OurProductsBanner/interface';
import {
  ColumnImageOurProductsBanner,
  ColumnTextOurProductsBanner,
  ContainerOurBackground,
  RowOurProductsBanner,
  StyledWpImage,
} from 'components/organisms/OurProductsBanner/styles';
import ContentLeftOurProductsBanner from 'components/molecules/ContentLeftOurProductsBanner';

export const OurProductsBanner: FC<IOurProductsBanner> = ({
  description,
  subTitle,
  title,
  image,
  contactButton,
  kindButton,
}) => (
  <ContainerOurBackground>
    <RowOurProductsBanner>
      <ColumnTextOurProductsBanner>
        <ContentLeftOurProductsBanner
          {...{ subTitle, title, description, contactButton, kindButton }}
        />
      </ColumnTextOurProductsBanner>
      <ColumnImageOurProductsBanner>
        <StyledWpImage {...image} />
      </ColumnImageOurProductsBanner>
    </RowOurProductsBanner>
  </ContainerOurBackground>
);
