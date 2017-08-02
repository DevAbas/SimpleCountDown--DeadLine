import styled from 'styled-components';
import { DefaultStyle } from './globalStyle';

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  background-color: white;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  box-shadow: 1px 1px 50px #1950cc;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

export const DateWrap = styled.div`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const DateItem = styled.div`
  display: inline;
  margin-right: 20px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 10px 5px;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  padding: 10px 35px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover {
    background: #7f8c8d;
    color: #eee;
  }
`;
