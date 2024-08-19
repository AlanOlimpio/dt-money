import {
  HeaderContainer,
  HeaderContent,
  NewTrasactionButton,
} from './HeaderStyles';
import logoImg from '../../assets/logo.svg';
function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTrasactionButton>Nova transação</NewTrasactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
export default Header;
