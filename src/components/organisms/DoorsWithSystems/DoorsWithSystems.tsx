import React from 'react';

import FrontDoors, { FrontDoorsType } from 'components/organisms/FrontDoors';
import DoorsSystem, { DoorsSystemsType } from 'components/organisms/DoorsSystems';
import Button, { ButtonType } from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

import downloadArrow from 'assets/icons/download-arrow.svg';

import {
  StyledButtons,
  StyledContent,
  StyledDownloadLink,
  StyledWrapper,
} from './DoorsWithSystems.styles';
import { CustomThemeColorType } from 'theme/styled';
import FadeIn from 'components/atoms/FadeIn';

export type DoorsWithSystemsType = {
  category: FrontDoorsType;
  systems: DoorsSystemsType;
  buttonsDivider: string;
  contactButton?: ButtonType;
  downloadButton?: ButtonType;
  sectionColor?: CustomThemeColorType;
  isCategorySectionReverse?: FrontDoorsType['isCategorySectionReverse'];
};

const DoorsWithSystems = ({
  category,
  systems,
  contactButton,
  downloadButton,
  buttonsDivider,
  sectionColor = 'alabaster',
  isCategorySectionReverse,
}: DoorsWithSystemsType) => (
  <StyledWrapper {...{ sectionColor }}>
    <StyledContent>
      <FrontDoors {...category} {...{ isCategorySectionReverse }} />
      <DoorsSystem {...systems} />
      <FadeIn>
        <StyledButtons>
          {contactButton?.label || contactButton?.link ? (
            <Button {...{ text: contactButton.label, link: contactButton.link, type: 'red' }} />
          ) : null}
          {buttonsDivider &&
          (contactButton?.label || contactButton?.link) &&
          downloadButton?.label ? (
            <p>{buttonsDivider}</p>
          ) : null}
          {downloadButton?.label ? (
            <StyledDownloadLink>
              {downloadButton?.label} <Icon src={downloadArrow} />
            </StyledDownloadLink>
          ) : null}
        </StyledButtons>
      </FadeIn>
    </StyledContent>
  </StyledWrapper>
);

export default DoorsWithSystems;
