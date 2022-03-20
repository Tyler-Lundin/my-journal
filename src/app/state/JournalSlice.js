// Journal Data
import { createSlice } from "@reduxjs/toolkit"
const initialState = { 
    value: {
      isOpen: false,
      title: 'journal',
      pages: [],
      unsaved: false,
      journalList: [],
      idList: [],
      createNewTitle: '',
      listNeedsUpdate: false
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
    setJournalList (state, action) {
      state.value.journalList = action.payload
    },
    setIDList (state, action) {
      state.value.idList = action.payload
    },
    setCreateNewTitle (state, action) {
      state.value.createNewTitle = action.payload
    },
    setListNeedsUpdate (state, action) {
      state.value.listNeedsUpdate = action.payload
    }
  },
})

export const { setJournalOpen, setTitle, setPages, setUnsaved, setJournalList, setIDList, setCreateNewTitle, setListNeedsUpdate } = journalSlice.actions
export default journalSlice.reducer