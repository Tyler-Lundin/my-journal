// Page Data
import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    value: {
      message: '',
      response: false,
      isOpen: false
    }
}

const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    setMessage(state, action) {
      state.value.message = action.payload
    },
    setResponse(state, action) {
      state.value.response = action.payload
    },
    setOpen(state, action) {
      state.value.isOpen = action.payload
    }
  },
})

export const { setMessage, setResponse, setOpen  } = promptSlice.actions
export default promptSlice.reducer