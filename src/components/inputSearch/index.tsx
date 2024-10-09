import { InputSearchContainer, Form } from "./styles";

export function InputSearch() {
  return (
    <InputSearchContainer>
      <div>
        <h3>Busque por conteúdo</h3>
        <p>6 publicações</p>
      </div>
      <Form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </InputSearchContainer>
  );
}
