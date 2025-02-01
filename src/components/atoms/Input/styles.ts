import styled from 'styled-components';
import { media } from 'theme/media';
import { IInputWrapper } from './interface';
import wrong from 'assets/icons/wrong.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .erro-form {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: #ed1c23;
    display: flex;
    gap: 5px;
    &:before {
      content: '';
      width: 14px;
      height: 16px;
      display: block;
      background: url('${wrong}');
      background-size: 14px 16px;
    }
  }
`;

const CustomCheckbox = styled.input<IInputWrapper>`
  display: none;
  label {
    font-style: ${({ name }) => (name === 'policy' ? 'italic' : 'normal')};
  }
`;

const FileWrapper = styled.div`
  height: 43px;
  max-width: 70px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FileInput = styled.input<IInputWrapper>`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: 2;
`;

const CustomTextarea = styled.textarea<IInputWrapper>`
  font-family: ${({ theme }) => theme.font};
  width: 100%;
  height: 139px;
  border: none;
  border-radius: 21px;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  padding: 13px 21px;
  resize: none;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 300;
  ${media.up('lg')} {
    height: 88px;
  }
`;

const CustomInput = styled.input<IInputWrapper>`
  width: 100%;
  height: 41px;
  border: none;
  border-radius: 21px;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  padding: 0 15px;
  resize: none;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.grayBar};
  font-weight: 300;
  flex-shrink: 0;

  &.error {
    border: 1px solid #ed1c23;
    margin-bottom: 5px;
  }
`;

export { Wrapper, CustomCheckbox, FileWrapper, FileInput, CustomTextarea, CustomInput };
