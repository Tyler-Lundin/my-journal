// Page Data
import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    value: {
      currentPage: '',
      pageList: [],
      currentIndex: 1,
      journalID: ''
    }
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.value.currentPage = action.payload
    },
    setPageList(state, action) {
      state.value.pageList = action.payload
    },
    setCurrentIndex(state, action) {
      state.value.currentIndex = action.payload
    },
    setJournalID(state, action) {
      state.value.journalID = action.payload
    },
  },
})

export const { setCurrentPage, setPageList, setCurrentIndex, setJournalID } = counterSlice.actions
export default counterSlice.reducer