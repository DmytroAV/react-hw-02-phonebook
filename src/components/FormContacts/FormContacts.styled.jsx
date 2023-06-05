import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 20px 12px 10px 20px;
  gap: 20px;
`;

export const ContainerInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const SpanTitle = styled.span`
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
`;

export const InputField = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  :focus {
    border: 1px solid #0c0;
  }
`;

export const BtnAddContacts = styled.button`
  border: none;
  padding: 8px 15px 8px 15px;
  background: #ff8500;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  margin: 10px 10px 0 0;
  width: 150px;
  :hover {
    background: #ea7b00;
    color: #fff;
  }
`;
