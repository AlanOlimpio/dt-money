import { HeaderContainer, HeaderContent } from './HeaderStyles';
import logoImg from '../../assets/logo.svg';
import NewTransactionModal from '../NewTransactionModal';
function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  );
}
export default Header;
