import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  padding: 2rem;
  background-color: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  border-radius: 8px;
  margin-top: -5rem;
  position: relative;
  z-index: 1;

  img {
    border-radius: 10px ;
    width: 148px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    img {
      width: 18.75rem;
    }
  }
`

export const InfoContainer = styled.div`
  margin: 0 2rem;
`

export const NameAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.75rem;

  p {
    color: ${props => props.theme.blue};
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  img {
    width: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    flex-direction: column;

    div {
      margin: 0 auto;

      p {
        font-size: 2rem;
      }

      img {
        width: 1.8rem;
        margin-left: 0.5rem;
      }
    }
  }
`

export const Description = styled.div`
  display: flex;
  margin-top: 0.5rem;
  line-height: 160%;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    img {
      width: 1.125rem;
    }

    p {
      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    @media (max-width: 768px) {
      img {
        width: 5rem;
      }
    }
  }
`