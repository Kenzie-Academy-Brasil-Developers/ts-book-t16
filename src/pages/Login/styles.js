import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  min-height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 110px);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    border-radius: 30px;
    background-color: var(--color-transparent);
  }


  button {
    margin-top: 20px;
  }
`;
