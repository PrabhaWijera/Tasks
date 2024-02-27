import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UserGetAsyc = createAsyncThunk("UserDo/UserGetAsyc", async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  if (responce.ok) {
    const UserData =await responce.json();
    return { UserData };
  }
  throw new Error("Failed to fetch User Data");
});

const UserSlice = createSlice({
  name: "UserDo",
  initialState: [],
  reducers: {},
  extraReducers:(builder)=> {
    builder.addCase(UserGetAsyc.fulfilled,(state,action)=>{
        return action.payload.UserData;
    })
  },
});
export default UserSlice.reducer;
