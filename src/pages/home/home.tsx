import { CardPost } from "../../components/CardPost";
import { Header } from "../../components/header";
import { InputSearch } from "../../components/inputSearch";
import { Profile } from "../../components/profile";
import { HomeContainer, ProfileContainer, CardContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
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
