import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: ["Admin", "Manager", "End-User"],
  loginDetail: "None",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.loginDetail = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;
