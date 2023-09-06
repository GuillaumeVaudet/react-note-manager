import { func, string } from 'prop-types';
import styled from 'styled-components'
const Logo = ({ image, title, subtitle, onClick }) => {
  return (
    <>
      <Container onClick={ onClick }>
        <Img src={ image } alt="logo" />
        <LogoTxt>{ title }</LogoTxt>
      </Container>
      <Subtitle>{ subtitle }</Subtitle>
    </>
  );
}

Logo.propTypes = {
  image: string,
  title: string,
  subtitle: string,
  onClick: func
}
const Container = styled.div`
  display: flex;
  /* Otherwise the clickable area for the logo is to wide */
  width: fit-content;
  cursor: pointer;
`
const Img = styled.img`
  height: 40px
`
const LogoTxt = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #0d6efd;
`
const Subtitle = styled.div`
  color: #b8b8b8;
  word-wrap: break-word;
`

export default Logo