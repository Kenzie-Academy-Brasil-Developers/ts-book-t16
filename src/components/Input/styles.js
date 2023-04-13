import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 2rem;
  }
  
  label {
    color: var(--color-secondary);
  }
  
  input {
    background-color: var(--color-secondary);
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: var(--color-primary);
    width: 100%;
  }

  p {
    color: var(--color-error);
    font-size: 1.4rem;
    
    margin-top: 1px;
    margin-bottom: 6px;
  }
`;
