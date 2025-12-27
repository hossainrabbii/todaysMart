import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialStore {
  userId: string;
}
const initialState: IInitialStore = {
  userId: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload.userId;
    },
    removeUser: (state) => {
      state.userId = "";
    },
  },
});

export const userInfoFromSlice = (state: RootState) => {
  return state.user.userId;
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
