import React from 'react';
import { IAboutHoursList } from './interface';
import { StyledWrapper } from './styles';

const AboutHoursList = ({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}: IAboutHoursList) => (
  <StyledWrapper>
    <li>Poniedziałek: {monday}</li>
    <li>Wtorek: {tuesday}</li>
    <li>Środa: {wednesday}</li>
    <li>Czwartek: {thursday}</li>
    <li>Piątek: {friday}</li>
    <li>Sobota: {saturday}</li>
  </StyledWrapper>
);

export default AboutHoursList;
