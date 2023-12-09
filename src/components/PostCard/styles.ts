import styled from 'styled-components';

export const PostContainer = styled.article`
  width: 416px;
  padding: 2rem;
  background-color: ${props => props.theme['base-post']};

  section {
    line-height: 160%;
    margin-top: 1.25rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    section {
      font-size: 2.5rem;
    }

    h1, span {
      font-size: 4.5rem;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span {
    font-size: 0.75rem;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;

    span {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }
`