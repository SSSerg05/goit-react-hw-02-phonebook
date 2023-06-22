import styled from "@emotion/styled";

export const List = styled.ul`
  text-decoration: none;
  margin: 0;
  padding-left: 0;
  list-style: none;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    background-color: lightcyan;
  }
`
export const ItemText = styled.p`
  min-width: 250px;
  margin: 0;
  padding: 4px;
`
export const ItemButton = styled.button`
  display: inline-block;
  min-width: 75px;
  height: 24px;
  margin: 0;
  padding: 0;
`
