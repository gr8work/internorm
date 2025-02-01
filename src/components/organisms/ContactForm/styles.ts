import styled from 'styled-components';
import { media } from 'theme/media';
import { ICol } from './interface';
import WrongClose from 'assets/icons/wrong-close.svg';
import Good from 'assets/icons/good.svg';

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
  gap: 37px;
  ${media.up('lg')} {
    max-width: 1200px;
    padding: 0;
    flex-direction: row;
    gap: 68px;
  }
  ${media.up('xl')} {
    max-width: 1426px;
  }
`;

const Description = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  ${media.up('lg')} {
    flex-grow: 1;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 26px;
    align-items: end;
    position: relative;
    padding-top: 80px;
    postion: relative;
    &:after {
      content: '';
      width: 1px;
      height: 794px;
      background-color: ${({ theme }) => theme.colors.gray};
      position: absolute;
      top: 0;
      right: -9px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 30px;
  ${media.up('lg')} {
    max-width: 461px;
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
`;

const InputList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  div {
    gap: 0;
    label{
      height: 40px;
    }
    &:first-child {
      flex-grow: 1;
      width: calc(90% - 20px);
    }
    &:nth-child(2) {
      flex: 1 0 10%;
    }
    flex: 1 0 calc(50% - 20px);
  }
  ${media.up('xl')} {
    div {
      &:first-child {
        flex-grow: 1;
        width: calc(30% - 20px);
      }
      &:nth-child(2) {
        flex: 1 0 10%;
      }
      flex: 1 0 calc(25% - 20px);
    }
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  padding: 15px 18px 15px 47px;
  background: #FFD0D1;
  filter: drop-shadow(0px 13px 16px rgba(0, 0, 0, 0.16));
  position: relative;
  border-radius: 10px;
  &:before{
    content: '';
    width: 14px;
    height: 14px;
    background: url("${WrongClose}");
    background-size: 14px;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
  }
  .title{
    font-size: 14px;
    line-height: 18px;
    color: #ED1C23;
    font-weight: 700;
    text-transform: uppercase;
  }
  .content{
    font-size: 14px;
    line-height: 18px;
    color: #ED1C23;
    font-weight: 400;
  }
`

const SuccessBox = styled.div`
  width: 100%;
  padding: 15px 18px 15px 47px;
  background: #E0E7D5;
  filter: drop-shadow(0px 13px 16px rgba(0, 0, 0, 0.16));
  position: relative;
  border-radius: 10px;
  &:before{
    content: '';
    width: 14px;
    height: 14px;
    background: url("${Good}");
    background-size: 14px;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
  }
  .title{
    font-size: 14px;
    line-height: 18px;
    color: #058900;
    font-weight: 700;
    text-transform: uppercase;
  }
  .content{
    font-size: 14px;
    line-height: 18px;
    color: #058900;
    font-weight: 400;
  }
`

export { Wrapper, Content, Description, Container, Form, FormBody, Col, InputList, ErrorBox, SuccessBox };
