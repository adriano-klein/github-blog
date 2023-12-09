import styled from 'styled-components';


export const FormContainer = styled.form`
margin-top: 4.5rem;

div {
  display: flex;
  justify-content: space-between;

  h3 {
  @media (max-width: 768px) {
      font-size: 3rem;
    }
}
}

input {
  width:  100%;
  padding: 16px;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${props => props.theme['base-border']};
  background: ${props => props.theme['base-input']};
  margin-top: 0.75rem;

  &::placeholder {
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
}

@media (max-width: 768px) {
      height: 8rem;
    }
  
}

span {
  @media (max-width: 768px) {
      font-size: 2rem;
    }
}
`

