import { createSlice, configureStore } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chatlist",
  initialState: {
    currentChat: null,
    chatListBox: [],
    userInfo: {
      avartar: "",
      name: ""
    }
  },
  reducers: {
    handleCurrentChat: (state, param) => {
      state.currentChat = param?.payload;
    },
    login: (state, param) => {
      state.userInfo = param?.payload;
    }
  }
});

export const { handleCurrentChat, login } = ChatSlice.actions;

export const store = configureStore({
  reducer: {
    chatReducer: ChatSlice.reducer
  }
});
