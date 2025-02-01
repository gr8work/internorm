import React, { FC } from 'react';
import { Wrapper, Content, ListButton, FixedButton } from './styles';
import { ISideBar } from './interface';
import Button from 'components/atoms/Button';
import List from 'components/molecules/List';
import { StyledSendButton } from '../NavBar/styles';

export const SideBar: FC<ISideBar> = ({
  text,
  items,
  questionText,
  questionTo,
  isOpen,
  index,
  changedIndex,
}) => (
  <Wrapper isOpen={isOpen} id="primary-navigation">
    <Content>
      <List
        type="links-sidebar"
        items={items}
        index={index}
        changedIndexList={(index: any) => changedIndex(index)}
      />
      {/* <ListButton>
        <Button type="grey" text={questionText} link={questionTo} />
      </ListButton> */}
    </Content>
    <FixedButton>
       {/* <Button type="red-sidebar" text={text} link="/strefa-architekta" />  */}
        <Button type="red-sidebar" text={"Wyslij zapytanie"} link="#formularz-kontaktowy" /> 
        {/* <StyledSendButton
              active
              activeScroll
              link="#formularz-kontaktowy"
              type="grey"
              text="Wyślij zapytanie"
            />  */}
    </FixedButton>
  </Wrapper>
);
