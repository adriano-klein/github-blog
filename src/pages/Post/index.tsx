import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Chat, GithubLogo } from "phosphor-react";
import {
  PostContainer,
  PostTitleContainer,
  PostTitle,
  PostTitleFooter,
  PostContentContainer,
} from "./styles";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostProps {
  id: string;
  title: string;
  body: string;
  number: number;
}

export function Post() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();

  const post = posts.find((post) => post.number === Number(id));
  console.log(post);
  return (
    <PostContainer>
      <PostTitleContainer>
        <PostTitle>
          <span>
            <ArrowLeft size={24} />
            <Link to={"/"}>Voltar</Link>
          </span>
          <span>
            <GithubLogo size={24} />
            <a href={post.html_url} target="_blank">
              Ver no Github
            </a>
          </span>
        </PostTitle>
        <h1> {post.title} </h1>
        <PostTitleFooter>
          <span>
            <GithubLogo size={24} />
            {post.user.login}
          </span>
          <span>
            <Calendar size={24} />
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <Chat size={24} />
            {`${post.comments} comentários`}
          </span>
        </PostTitleFooter>
      </PostTitleContainer>
      <PostContentContainer>{post.body}</PostContentContainer>
    </PostContainer>
  );
}
