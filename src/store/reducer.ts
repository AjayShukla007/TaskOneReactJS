// src/redux/reducers/userReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { addUser } from './action.ts';

interface UserState {
  users: any[]; // Modify this based on your actual user data structure
}

const initialState: UserState = {
  users: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(addUser, (state, action) => {
    state.users.push(action.payload.userData);
  });
});

export default userReducer;