import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 0 auto
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 3rem;
  margin-bottom: 14.62rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`