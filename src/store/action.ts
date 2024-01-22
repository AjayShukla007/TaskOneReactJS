// src/redux/actions/userActions.ts
import { createAction } from '@reduxjs/toolkit';

export const addUser = createAction<{ userData: any }>('user/addUser');