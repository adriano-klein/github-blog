import { useEffect, useState } from "react";
import { CardPost } from "../../components/CardPost";
import { InputSearch } from "../../components/inputSearch";
import { Profile } from "../../components/profile";
import { HomeContainer, ProfileContainer, CardContainer } from "./styles";
import { api } from "../../libs/axios";

export function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get("https://api.github.com/users/adriano-klein").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <HomeContainer>
        <ProfileContainer>
          <Profile />
          <InputSearch />
        </ProfileContainer>
        <CardContainer>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </CardContainer>
      </HomeContainer>
    </>
  );
}
