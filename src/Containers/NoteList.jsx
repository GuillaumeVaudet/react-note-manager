import TextCard from '../components/TextCard';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoteList = () => {

  const noteList = useSelector(store => store.NOTE.noteList)
  const navigate = useNavigate()
  return(
    <CardsContainer className="row">
      {
        noteList.map( (note) => {
          return(
            <NotesContainer key={ note.id }>
              <TextCard
                title={ note.title }
                subtitle={ note.subtitle }
                content={ note.content }
                onClick={ () => navigate('/note/' + note.id ) }
                onClickTrash={ () => alert('on click trash') }
              ></TextCard>
            </NotesContainer>
          )
        })
      }
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const NotesContainer = styled.div`
  display: flex;
  width: 300px;
  margin: 15px;
  
`
export default NoteList