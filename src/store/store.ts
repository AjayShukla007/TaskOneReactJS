// src/redux/store/configureStore.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer.ts';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers as needed
  },
});

export default store;