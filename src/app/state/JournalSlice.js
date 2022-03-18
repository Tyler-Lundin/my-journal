// Journal Data
import { createSlice } from "@reduxjs/toolkit"
const initialState = { 
    value: {
      isOpen: false,
      title: 'journal',
      pages: [],
      unsaved: false
    } 
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    setJournalOpen (state, action) {
      state.value.isOpen = action.payload
    },
    setTitle (state, action) {
      state.value.title = action.payload
    },
    setPages (state, action) {
      state.value.pages = action.payload
    },
    setUnsaved (state, action) {
      state.value.unsaved = action.payload
    },
  },
})

export const { setJournalOpen, setTitle, setPages, setUnsaved } = journalSlice.actions
export default journalSlice.reducer