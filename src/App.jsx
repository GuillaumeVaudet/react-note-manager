import Header from './components/Header'
import { NoteAPi } from './api/note-api';
import { Outlet } from 'react-router-dom'
import { setNoteList } from './store/note/note-slice';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch()

  async function fetchAllNotes(){
    const noteList =  await NoteAPi.fetchAll()
    dispatch(setNoteList(noteList))
  }

  useEffect(() => {
    fetchAllNotes()
  }, [])

  return(
    <div className="container-fluid">
      <Header></Header>
      <OutletContainer>
        <Outlet/>
      </OutletContainer>
    </div>
  )
}

const OutletContainer = styled.div`
  padding: 50px;
`
export default App