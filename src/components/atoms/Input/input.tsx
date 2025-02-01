import React, { FC } from 'react';
import Label from 'components/atoms/Label';
import Text from 'components/atoms/Text';
import { IInput } from './interface';
import {
  Wrapper,
  CustomCheckbox,
  FileWrapper,
  FileInput,
  CustomTextarea,
  CustomInput,
} from './styles';

// Do zrobienia file
// Dodać typ do text

export const Input: FC<IInput> = ({
  checked,
  value,
  text,
  name,
  type,
  error,
  placeholder,
  handleChange,
  className,
}) => {
  if (text && (type === 'radio' || type === 'checkbox')) {
    return (
      <Wrapper className={className}>
        <Label type={type} typeText={name === 'policy' ? 'italic' : 'normal'}>
          <CustomCheckbox
            name={name}
            type={type}
            error={error}
            placeholder={placeholder}
            value={type === 'checkbox' ? '' : text}
            checked={type === 'checkbox' ? checked : text === value}
            onChange={(e: any) => (handleChange ? handleChange(e) : null)}
          />
          <span />
          {text}
        </Label>
        {error && <Text className="erro-form" text={error} />}
      </Wrapper>
    );
  }
  if (type === 'file') {
    return (
      <FileWrapper>
        <FileInput
          name={name}
          type={type}
          error={error}
          placeholder={placeholder}
          onChange={(e: any) => (handleChange ? handleChange(e) : null)}
        />
        <Text type="red-file" text="<span>dodaj kolejny +</span>" />
      </FileWrapper>
    );
  }
  if (type === 'textarea') {
    return (
      <CustomTextarea
        name={name}
        type={type}
        error={error}
        placeholder={placeholder}
        value={value}
        defaultValue={value}
        onChange={(e: any) => (handleChange ? handleChange(e) : null)}
      />
    );
  }
  return (
    <CustomInput
      name={name}
      type={type}
      error={error}
      className={error ? 'error' : ''}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => (handleChange ? handleChange(e) : null)}
    />
  );
};
