import styled from "styled-components";

export const InputSearchContainer = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};

    p {
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    background-color: ${(props) => props.theme["base-input"]};
    height: 3rem;
    border: 0.3px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    padding: 1rem;
  }
`;
