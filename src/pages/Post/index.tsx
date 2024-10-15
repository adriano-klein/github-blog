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
import ReactMarkdown from "react-markdown";

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
            <Link to={"/"}>
              <ArrowLeft size={24} />
              Voltar
            </Link>
          </span>
          <span>
            <Link to={post.html_url} target="_blank">
              <GithubLogo size={24} />
              Ver no Github
            </Link>
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
            {post.comments <= 1
              ? `${post.comments} comentário`
              : `${post.comments} comentários`}
          </span>
        </PostTitleFooter>
      </PostTitleContainer>
      <PostContentContainer>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContentContainer>
    </PostContainer>
  );
}
