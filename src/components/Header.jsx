import ButtonPrimary from '../atoms/ButtonPrimary';
import Logo from './Logo';
import logo from 'assets/images/logo.png'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  return(
    <Container className="row">
      <LogoWrapper className="col-xs-12 col-sm-4">
        <Logo
          onClick={ () => navigate('/') }
          title="Notomatic"
          subtitle="Manage your notes"
          image={ logo }/>
      </LogoWrapper>
      <ButtonWrapper
        className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary
          onClick={ () => navigate('/note/new') }>
          Add Note +
        </ButtonPrimary>
      </ButtonWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.4);
`
const LogoWrapper = styled.div``
const ButtonWrapper = styled.div``
export default Header