import { useContext } from "react";
import { CardPost } from "../../components/CardPost";
import { InputSearch } from "../../components/inputSearch";
import { Profile } from "../../components/profile";
import { HomeContainer, ProfileContainer, CardContainer } from "./styles";
import { PostContext } from "../../contexts/postContext";
import { Link } from "react-router-dom";

export function Home() {
  const { posts, handleSearch } = useContext(PostContext);
  return (
    <>
      <HomeContainer>
        <ProfileContainer>
          <Profile />
          <InputSearch onSearch={handleSearch} query={""} />
        </ProfileContainer>
        <CardContainer>
          {posts.map((post) => {
            return (
              <Link to={`/post/${post.number}`}>
                <CardPost title={post.title} body={post.body} key={post.id} />
              </Link>
            );
          })}
        </CardContainer>
      </HomeContainer>
    </>
  );
}
