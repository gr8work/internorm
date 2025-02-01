import React from 'react';

import { ButtonType } from 'components/atoms/Button';

import {
  StyledDescription,
  StyledMoreButton,
  StyledSubTitle,
  StyledSystem,
  StyledSystemButton,
  StyledSystemContent,
  StyledSystemList,
  StyledTitle,
  StyledWrapper,
} from './ChooseSystem.styles';
import { WpImageType } from 'components/atoms/WpImage';

export type ChooseSystemsType = {
  text?: string;
  systems: ChooseSystemType[];
  selectedTag?: string;
  setSelectedTag?: React.Dispatch<React.SetStateAction<string>>;
};

export type ChooseSystemType = {
  image: WpImageType;
  title: string;
  tag: string;
  description: string;
  button: ButtonType;
};

const ChooseSystem = ({ text, systems, selectedTag, setSelectedTag }: ChooseSystemsType) => (
  <StyledWrapper>
    {text ? <StyledSubTitle subTitle={text} /> : null}
    <StyledSystemList role="list" items={systems?.length}>
      {systems?.map((system: ChooseSystemType) => (
        <li key={system.title}>
          <StyledSystem
            tabIndex={-1}
            isSelected={selectedTag === system.tag}
            onClick={setSelectedTag ? () => setSelectedTag(system.tag) : undefined}
          >
            <StyledSystemContent>
              <StyledSystemButton
                type="button"
                isSelected={selectedTag === system.tag}
                onClick={setSelectedTag ? () => setSelectedTag(system.tag) : undefined}
              >
                <StyledTitle>{system.title}</StyledTitle>
              </StyledSystemButton>
              <StyledDescription>{system.description}</StyledDescription>
            </StyledSystemContent>
            <StyledMoreButton
              text={system.button.label}
              type={system.button.type}
              link={system.button.link}
              isSelected={selectedTag === system.tag}
            />
          </StyledSystem>
        </li>
      ))}
    </StyledSystemList>
  </StyledWrapper>
);

export default ChooseSystem;
