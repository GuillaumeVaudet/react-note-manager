import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "App";
import Note from './pages/Note';
import NoteBrowse from './pages/NoteBrowse';
import NoteCreate from './pages/NoteCreate';
import PageNotFound from './pages/PageNotFound';
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App /> }>
            <Route path="/" element={ <NoteBrowse /> } />
            <Route path="/note/:id" element={ <Note /> } />
            <Route path="/note/new" element={ <NoteCreate /> } />
            <Route path="*" element={ <PageNotFound /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
