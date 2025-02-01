import React from 'react';
import styled from 'styled-components';

const RedLabelWrapper = styled.div`
  outline: 2px solid ${({ theme }) => theme.colors.heatSignature};
  font-size: 22px;
  display: flex;
  align-items: center;
  height: 40px;
  height: 100%;
  width: 100%;
  font-weight: 700;
`;

const MainTexLabel = styled.div`
  background: ${({ theme }) => theme.colors.heatSignature};
  color: ${({ theme }) => theme.colors.white};
  padding-inline: 4px;
`;
const SecondTextLabel = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding-inline: 4px;
`;

export type ITecBadgeProps = Record<'mainTextLabel' | 'secondTextLabel', string>;

const ITecBadge = ({ mainTextLabel = 'I-tec', secondTextLabel }: ITecBadgeProps) => (
  <RedLabelWrapper>
    <MainTexLabel>{mainTextLabel}</MainTexLabel>
    <SecondTextLabel>{secondTextLabel}</SecondTextLabel>
  </RedLabelWrapper>
);

export default ITecBadge;
