import { ProfileContainer, ProfileContentContainer, Title } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import avatar from "../../assets/avatar.png";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContentContainer>
        <img src={avatar} />
        <span>
          <Title>
            <h3>Adriano Klein</h3>
            <span>
              <a href="#">GITHUB</a>
              <ArrowSquareOut />
            </span>
          </Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            doloribus numquam velit ullam, voluptates in minima aliquid itaque?
            Voluptatem, iure! Atque exercitationem maxime earum dolore repellat,
            unde similique. Rerum, consequatur.
          </p>
          <section>
            <span>
              <GithubLogo />
              Github
            </span>
            <span>
              <Buildings />
              Company
            </span>
            <span>
              <Users />
              Follows
            </span>
          </section>
        </span>
      </ProfileContentContainer>
    </ProfileContainer>
  );
}
