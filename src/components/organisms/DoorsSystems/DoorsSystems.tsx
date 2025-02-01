import React, { useState } from 'react';

import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import ChooseSystem, {
  ChooseSystemsType,
  ChooseSystemType,
} from 'components/organisms/ChooseSystem';

import { StyledContent, StyledImage, StyledModels } from './DoorsSystems.styles';
import FadeIn from 'components/atoms/FadeIn';

export type DoorsSystemsType = {
  title: string;
  text: string;
  chooseSystem: ChooseSystemsType;
};

const DoorsSystem = ({ title, text, chooseSystem }: DoorsSystemsType) => {
  const [selectedTag, setSelectedTag] = useState<ChooseSystemType['tag']>(
    chooseSystem?.systems?.[0].tag
  );

  const selectedImage = chooseSystem?.systems?.find(({ tag }) => tag === selectedTag)?.image;

  return (
    <StyledContent>
      <StyledModels>
        <FadeIn>
          <Title {...{ title, type: 'section' }} />
        </FadeIn>
        <FadeIn>
          <Text {...{ text }} />
        </FadeIn>
        {selectedImage ? <StyledImage {...selectedImage} {...{ objectFit: 'contain' }} /> : null}
      </StyledModels>
      <FadeIn>
        <ChooseSystem {...chooseSystem} {...{ selectedTag, setSelectedTag }} />
      </FadeIn>
    </StyledContent>
  );
};

export default DoorsSystem;
