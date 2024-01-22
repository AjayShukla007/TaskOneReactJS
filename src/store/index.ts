// store.ts

import { createStore } from 'redux';
import userReducer from './userReducer.ts';

const store = createStore(userReducer);

export default store;