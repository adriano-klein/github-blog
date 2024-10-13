import { useContext } from "react";
import { CardPost } from "../../components/CardPost";
import { InputSearch } from "../../components/inputSearch";
import { Profile } from "../../components/profile";
import { HomeContainer, ProfileContainer, CardContainer } from "./styles";
import { PostContext } from "../../contexts/postContext";
import { Link } from "react-router-dom";

export function Home() {
  const { posts } = useContext(PostContext);

  return (
    <>
      <HomeContainer>
        <ProfileContainer>
          <Profile />
          <InputSearch />
        </ProfileContainer>
        <CardContainer>
          {posts.map((post) => {
            return (
              <Link to={`/post/${post.number}`}>
                <CardPost key={post.id} title={post.title} body={post.body} />
              </Link>
            );
          })}
        </CardContainer>
      </HomeContainer>
    </>
  );
}
