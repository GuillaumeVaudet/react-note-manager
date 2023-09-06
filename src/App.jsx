import Header from './components/Header'
import { NoteAPi } from './api/note-api';
import { Outlet } from 'react-router-dom'
import { setNoteList } from './store/note/note-slice';
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
      <Outlet/>
    </div>
  )
}

export default App