import { ArrowLeft, Calendar, Chat, GithubLogo } from "phosphor-react";
import {
  PostContainer,
  PostTitleContainer,
  PostTitle,
  PostTitleFooter,
  PostContentContainer,
} from "./styles";

export function Post() {
  return (
    <PostContainer>
      <PostTitleContainer>
        <PostTitle>
          <span>
            <ArrowLeft size={24} />
            Voltar
          </span>
          <span>
            <GithubLogo size={24} />
            Ver no Github
          </span>
        </PostTitle>
        <h1>JavaScript data types and data structures</h1>
        <PostTitleFooter>
          <span>
            <GithubLogo size={24} />
            adriano-klein
          </span>
          <span>
            <Calendar size={24} />
            Há 1 dia
          </span>
          <span>
            <Chat size={24} />5 comentários
          </span>
        </PostTitleFooter>
      </PostTitleContainer>
      <PostContentContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum, nunc nec varius aliquam, justo tortor vestibulum erat, nec
          ullamcor
        </p>

        <p>
          <a href="#">Lorem ipsum dolor sit</a> amet, consectetur adipiscing
          elit. Nullam interdum, nunc nec varius aliquam, justo tortor
          vestibulum erat, nec ullamcor
        </p>
      </PostContentContainer>
    </PostContainer>
  );
}
