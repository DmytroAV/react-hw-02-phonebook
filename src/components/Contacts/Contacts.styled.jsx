import styled from 'styled-components';

export const ContainerContacts = styled.ul`
  display: grid;
  width: 100%;
  padding: 20px 12px 10px 30px;
  gap: 20px;
  list-style: none;
`;

export const InputFilterContacts = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  width: 80%;
  :focus {
    border: 1px solid #0c0;
  }
`;

export const ListContact = styled.li`
  list-style-type: none;
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
`;
