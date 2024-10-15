import { useContext } from "react";
import { ProfileContainer, ProfileContentContainer, Title } from "./styles";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { PostContext } from "../../contexts/postContext";

export function Profile() {
  const { profile } = useContext(PostContext);
  return (
    <ProfileContainer>
      <ProfileContentContainer>
        <img src={profile.avatar_url} />
        <span>
          <Title>
            <h3> {profile.name} </h3>
            <span>
              <a href={profile.html_url} target="_blank">
                <ArrowSquareOut />
              </a>
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
              {profile.login}
            </span>
            <span>
              <Buildings />
              {profile.company}
            </span>
            <span>
              <Users />
              {`${profile.followers} seguidores`}
            </span>
          </section>
        </span>
      </ProfileContentContainer>
    </ProfileContainer>
  );
}
