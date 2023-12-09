import { ImgContainer } from "./styles";
import CoverImage from "../../assets/Cover.svg";

export function Header() {
  return(
    <ImgContainer>
      <img src={CoverImage} alt="Imagem de capa da página com o logo em azul com o texto GitHub Blog" />
    </ImgContainer>
  )
}