import { noteReducer, noteSlice } from './note/note-slice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    NOTE: noteReducer
  },
});
