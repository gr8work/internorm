import styled from 'styled-components';
import wrong from 'assets/icons/wrong.svg';

export const Content = styled.div`
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
    flex-shrink: 0;
    height: max-content;
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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const InputWrapper = styled.label`
  width: 100px;
  display: flex;
  position: relative;
  cursor: pointer;
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

export const InputContent = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-style: normal;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  b {
    font-size: 10px;
    text-transform: none;
  }
`;

export const FileList = styled.div`
  width: calc(100% - 120px);
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CustomButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.redLink};
  font-size: 12px;
  cursor: pointer;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 70px;
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
    button {
      width: 6px;
      height: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-contetn: center;
      position: absolute;
      border: none;
      right: -6px;
      top: -6px;
    }
  }
`;
