import { createSlice, configureStore, } from '@reduxjs/toolkit'

const ChatSlice = createSlice({
  name: 'chatlist',
  initialState: {
    currentChat: null,
    chatListBox: []
  },
  reducers: {
    handleCurrentChat: (state, param) => {
      (state.currentChat as any) = param.payload
    }
  }
})

export const { handleCurrentChat } = ChatSlice.actions

export const store = configureStore({
  reducer: {
    chatReducer: ChatSlice.reducer
  }
})
