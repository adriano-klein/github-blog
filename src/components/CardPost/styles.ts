import styled from "styled-components";

export const CardPostContainer = styled.article`
  background-color: ${(props) => props.theme["base-post"]};
  max-width: auto;
  border-radius: 6px;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;
