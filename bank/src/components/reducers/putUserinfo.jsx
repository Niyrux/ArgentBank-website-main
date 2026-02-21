import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const putUserdata = createAsyncThunk(
  'user/putUserdata',
  async (newUserData, { rejectWithValue, getState }) => { 
    try {
       const token = getState().user.token;
      if (!token) {
        throw new Error('No token found in localStorage');
      }

      const response = await axios.put('http://localhost:3001/api/v1/user/profile', newUserData, { 
        headers: {
          Authorization: `Bearer ${token}`
          
        }
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const putUserInfo = createSlice({
  name: 'put',
  initialState: {
    data: {
      lastname: "",
      firstname: "",

    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putUserdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putUserdata.fulfilled, (state, action) => {
        state.loading = false;
        state.data.firstname = action.payload.body.firstName; 
        state.data.lastname = action.payload.body.lastName; 
        state.error = null;
      })
      .addCase(putUserdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default putUserInfo.reducer;
