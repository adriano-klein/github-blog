import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 54rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  margin: -5rem;
  padding: 2rem;
`;

export const ProfileContentContainer = styled.div`
  display: flex;

  img {
    width: 12rem;
    height: 12rem;
    margin-right: 2rem;
  }

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  section {
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
        /* color: ${(props) => props.theme["base-label"]}; */
        font-size: 1.5rem;
      }
    }
  }
`;

export const Title = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  a {
    color: ${(props) => props.theme["brand-blue"]};
    text-decoration: none;
    margin-right: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme["brand-blue"]};
  }
`;
