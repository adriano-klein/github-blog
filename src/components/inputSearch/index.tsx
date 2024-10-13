import { useContext } from "react";
import { InputSearchContainer, Form } from "./styles";
import { PostContext } from "../../contexts/postContext";

export function InputSearch() {
  const { posts } = useContext(PostContext);
  const postCount = posts.length;
  return (
    <InputSearchContainer>
      <div>
        <h3>Busque por conteúdo</h3>
        <p>
          {postCount === 1
            ? `${postCount} publicação`
            : `${postCount} publicações`}
        </p>
      </div>
      <Form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </InputSearchContainer>
  );
}
