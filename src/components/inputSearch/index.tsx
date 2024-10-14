import { useContext } from "react";
import { InputSearchContainer, Form } from "./styles";
import { PostContext } from "../../contexts/postContext";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const inputSearchSchema = z.object({
  query: z.string(),
  onSearch: z.function(),
});

type inputSearchInput = z.infer<typeof inputSearchSchema>;

export function InputSearch({ onSearch }: inputSearchInput) {
  const { posts } = useContext(PostContext);
  const postCount = posts.length;
  const { register, handleSubmit } = useForm<inputSearchInput>();

  function handleSearchInput(data: inputSearchInput) {
    resolver: zodResolver(inputSearchSchema);
    onSearch(data.query);
  }

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
      <Form onSubmit={handleSubmit(handleSearchInput)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </Form>
    </InputSearchContainer>
  );
}
