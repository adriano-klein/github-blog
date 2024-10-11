import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;

export const PostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between !important;
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem;
  margin-top: -6rem;
  border-radius: 0.5rem;
  position: relative;
  z-index: 10;

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme["base-span"]};

    svg {
      margin-right: 0.5rem;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["post-title"]};
  }
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const PostTitleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
`;

export const PostContentContainer = styled.article`
  padding: 2.5rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme["base-text"]};

  a {
    color: ${(props) => props.theme["brand-blue"]};
  }
`;
