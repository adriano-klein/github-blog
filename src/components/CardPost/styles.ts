import styled from "styled-components";

export const CardPostContainer = styled.article`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 6px;
  padding: 1rem;
  min-height: 16.25rem;
  max-height: 26rem;
  box-sizing: border-box;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  section {
    /* Ajustando o texto dentro do container */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
