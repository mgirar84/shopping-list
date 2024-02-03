import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding: 1em;
  margin: unset;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em;
  background-color: #f9f9f9;
  margin-bottom: 0.25em;
  border-radius: 4px;
`;


// todo: fix colours and make it generic
export const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #cc0000;
  }
`;