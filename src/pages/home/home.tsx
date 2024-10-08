import { Header } from "../../components/header";
import { Profile } from "../../components/profile";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Profile />
      </HomeContainer>
    </>
  );
}
