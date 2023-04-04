import styled from "styled-components";

export const Container = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    max-width: 220px;
    background-color: var(--color-transparent);

    border-radius: 20px;
    padding: 14px;

    color: var(--color-secondary);
    text-decoration: none;

    span:first-of-type {
      margin-top: 18px;
      font-weight: bold;
    }
  }

  img {
    width: 185px;
    height: 275px;
    border-radius: 20px;
  }
`;
