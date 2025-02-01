import styled from 'styled-components';
import { media } from 'theme/media';
import WrongClose from 'assets/icons/wrong-close.svg';
import Good from 'assets/icons/good.svg';
import { ICol } from '../ContactForm/interface';

const Wrapper = styled.div`
  width: 100%;
  padding: 54px 0 60px;
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};

  ${media.up('lg')} {
    padding: 100px 0 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;

  ${media.up('lg')} {
    max-width: 1220px;
    padding: 0;
    flex-direction: row;
    gap: 60px;
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 39px;

  ${media.up('md')} {
    flex-grow: 5;
    padding: 0 30px 66px;
  }
`;

const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

const Col = styled.div<ICol>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ type }) => (type === 'textarea' ? '14px' : '30px')};
  gap: ${({ type }) => (type === 'textarea' ? '26px' : '0')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  textarea {
    height: 200px;
  }
`;

const InputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  div {
    gap: 0;
    display: flex;
    flex: 1 0 calc(100% - 20px);

    label {
      height: 40px;
    }

    input {
      height: 40px;
    }
  }

  ${media.up('md')} {
    div {
      flex: 1 0 calc(30% - 20px);

      &:first-child {
        flex-basis: calc(30% - 20px);
      }

      &:nth-child(2) {
        flex-basis: calc(25% - 20px);
      }

      &:nth-child(3) {
        flex-basis: calc(35% - 20px);
      }

      &:nth-child(4) {
        flex-basis: calc(50% - 20px);
      }

      &:nth-child(5) {
        flex-basis: calc(20% - 20px);
      }

      &:nth-child(6) {
        flex-basis: calc(30% - 20px);
      }
    }
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  padding: 15px 18px 15px 47px;
  background: #ffd0d1;
  filter: drop-shadow(0px 13px 16px rgba(0, 0, 0, 0.16));
  position: relative;
  border-radius: 10px;
  &:before {
    content: '';
    width: 14px;
    height: 14px;
    background: url('${WrongClose}');
    background-size: 14px;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
  }
  .title {
    font-size: 14px;
    line-height: 18px;
    color: #ed1c23;
    font-weight: 700;
    text-transform: uppercase;
  }
  .content {
    font-size: 14px;
    line-height: 18px;
    color: #ed1c23;
    font-weight: 400;
  }
`;

const SuccessBox = styled.div`
  width: 100%;
  padding: 15px 18px 15px 47px;
  background: #e0e7d5;
  filter: drop-shadow(0px 13px 16px rgba(0, 0, 0, 0.16));
  position: relative;
  border-radius: 10px;
  &:before {
    content: '';
    width: 14px;
    height: 14px;
    background: url('${Good}');
    background-size: 14px;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
  }
  .title {
    font-size: 14px;
    line-height: 18px;
    color: #058900;
    font-weight: 700;
    text-transform: uppercase;
  }
  .content {
    font-size: 14px;
    line-height: 18px;
    color: #058900;
    font-weight: 400;
  }
`;

export { Wrapper, Container, Form, FormBody, Col, InputList, ErrorBox, SuccessBox };
