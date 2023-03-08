import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../api';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getDataStart: state => {
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getDataStart,
  getDataSuccess,
  getDataFailure,
} = dataSlice.actions;

export const fetchData = () => async dispatch => {
  try {
    dispatch(getDataStart());
    const data = await getData();
    dispatch(getDataSuccess(data));
  } catch (error) {
    dispatch(getDataFailure(error.message));
  }
};

export default dataSlice.reducer;
