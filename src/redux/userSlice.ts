import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
  filter: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  filter: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data as User[];
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: string; value: string }>) => {
      const { key, value } = action.payload;
      state.filter[key] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setFilter } = userSlice.actions;

export default userSlice.reducer;