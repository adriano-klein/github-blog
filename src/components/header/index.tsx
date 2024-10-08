import banner from "../../assets/banner.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={banner} />
    </HeaderContainer>
  );
}
