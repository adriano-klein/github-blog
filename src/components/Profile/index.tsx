import ProfileImage from '../../assets/ProfileImage.png'
import GithubIcon from '../../assets/icon.svg'
import Company from '../../assets/company.svg'
import Followers from '../../assets/followers.svg'
import GoIcon from '../../assets/goIcon.svg'
import { Description, InfoContainer, NameAndGithub, ProfileContainer, IconContainer } from './styles'

export function Profile(){
  return (

    <ProfileContainer>
        <div>
          <img src={ProfileImage} alt="Imagem de perfil" />
        </div>
      <InfoContainer>
        <NameAndGithub>
          <h1>Cameron Williamson</h1>
          <div>
            <p>github</p>
            <img src={GoIcon}/>
          </div>
        </NameAndGithub>
        <Description>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </Description>
        <IconContainer>
          <section>
            <img src={GithubIcon} alt="Icone do Github"/>
            <p>cameronwll</p>
          </section>
          
          <section>
            <img src={Company} alt="Icone da de uma empresa"/>
            <p>Rocketseat</p>
          </section>

          <section>
            <img src={Followers} alt="Icone dos seguidores"/>
            <p>32 seguidores</p>
          </section>
        </IconContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}