// all data
import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    value: {
        userEmail: '',
        userID: '',
        journals: []
    }
}

const UserDataSlice = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.value = {
        userEmail: action.payload.userEmail,
        userID: action.payload.userID,
        journals: action.payload.journals
      }
    },
    clearUserData(state) {
      state.value = {
        userEmail: '',
        userID: '',
        journals: []
      }
    }
  },
})

export const { setUserData, clearUserData } = UserDataSlice.actions
export default UserDataSlice.reducer