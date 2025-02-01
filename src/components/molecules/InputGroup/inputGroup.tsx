import React, { FC } from 'react';
import { IInputGroup } from './interface';
import { Wrapper, List } from './styles';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import RichText from 'components/atoms/RichText';
import Text from 'components/atoms/Text';

export const InputGroup: FC<IInputGroup> = ({ checked, value, error, type, text, input, items, handleChange }) => (
  <Wrapper type={type}>
    {text && <Label><RichText html={text} /></Label>}
    {items ? (
      <List type={type}>
        {items.map(({ name, type, placeholder, text }, index) => (
          <Input
            key={text}
            text={text}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            checked={checked}
            handleChange={(e: any) => handleChange(e)}
          />
        ))}
      </List>
    ) : (
      input && (
        <Input
          name={input.name}
          type={input.type}
          error={error}
          value={input.value}
          placeholder={input.placeholder}
          checked={checked}
          handleChange={(e: any) => handleChange(e)}
        />
      )
    )}
    {error &&<Text className='erro-form' text={error} />}
  </Wrapper>
);
