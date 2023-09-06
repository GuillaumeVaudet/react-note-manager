import { func, string } from 'prop-types';
import { Trash } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { useState } from 'react';

const TextCard = ({ title, subtitle, content, onClickTrash, onClick}) => {
  function onClickTrash_(e){
    onClickTrash()
    e.stopPropagation()
  }
  return(
    <Container
      onClick={ onClick }
      className="card">
      <div className="card-body">
        <TitleRow>
          <h5 className="card-title">{ title }</h5>
          <TrashIcon
            size={ 20 }
            onClick={ onClickTrash_ }
          />
        </TitleRow>
        <h6 className="card-subtitle mb-2 text-muted">{ subtitle }</h6>
        <TextContent className="card-text">
          { content }
        </TextContent>
      </div>
    </Container>
  )
}

TextCard.propTypes = {
  title: string,
  subtitle: string,
  content: string,
  onClickTrash: func,
  onClick: func
}

const Container = styled.div`
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 300px;
  width: 300px;
  padding: 20px;
  border-color: transparent;
  transition: border-color 0.3s ease-in-out;
  &:hover{
    border-color: #0d6efd;
  }
`
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const TrashIcon = styled(Trash)`
  color: #b8b8b8;
  &:hover{
    color: #FF7373
  }
`

const TextContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`
export default TextCard