import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonPrimary = ({ children, onClick }) => {
  return(
    <Button
      className="btn btn-primary"
      onClick={ onClick }
      type="button">
      { children }
    </Button>)
}

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

const Button = styled.button`
  border-radius: 50px;
  font-weight: bold;
  width: 180px;
  height: 50px;
`
export default ButtonPrimary