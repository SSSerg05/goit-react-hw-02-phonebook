import styled from "@emotion/styled";

export const FieldBox = styled.div`
  position: relative;
  margin-bottom: 8px;
`

export const FieldLabel = styled.label`
  display: block;
  padding: 0 4px;
`

export const FieldInput = styled.input`
    display: block;

    width: 100%;
    /* height: 40px; */
    outline: 1px solid rgba(33, 33, 33, 0.2);
    background-color: transparent;
    border-radius: 4px;
    border: none;

    padding: 8px;
`

export const FieldPosition = styled.span`
  position: relative;
  margin-top: 4px;


  &:hover > .FieldInput, 
  &:focus-within > .FieldInput {
    outline: 1px solid blue;
    transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
