import { PencilFill, TrashFill} from 'react-bootstrap-icons'
import ButtonPrimary from '../atoms/ButtonPrimary';
import { string } from 'prop-types';
import styled from 'styled-components';

const NoteForm = ({ title, }) => {
  return(
    <Container>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">
            { title }
          </h2>
        </div>
        <StyledPencilFill className="col-1"/>
        <StyledTrashFill className="col-1"/>
      </div>
      <TitleInput>
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"/>
      </TitleInput>
      <TextArea className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          name="content"
          rows="5"
          className="form-control"/>
      </TextArea>
      <SubmitButton>
        <ButtonPrimary>Submit</ButtonPrimary>
      </SubmitButton>
    </Container>
  )
}

NoteForm.propTypes = {
  title: string
}

const Container = styled.div`
  padding: 50px;
  border-radius: 22px;
  background-color: white;
`

const StyledPencilFill = styled(PencilFill)`
  cursor: pointer;
`

const StyledTrashFill = styled(TrashFill)`
  cursor: pointer;
`

const TitleInput = styled.div`
  max-width: 300px;
`

const TextArea = styled.div`
  
`

const SubmitButton = styled.div`
  text-align: right;
`
export default NoteForm