import { createSlice } from '@reduxjs/toolkit';
import { createData } from '../../api';


const createDataSlice = createSlice({
  name: 'createData',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    createDataStart: state => {
      state.loading = true;
      state.error = null;
    },
    createDataSuccess: (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    createDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createDataStart,
  createDataSuccess,
  createDataFailure,
} = createDataSlice.actions;

export function postData(data) {
  return async dispatch => {
    try {
      dispatch(createDataStart());
      const newData = await createData(data);
      dispatch(createDataSuccess(newData));
    } catch (error) {
      dispatch(createDataFailure(error.message));
    }
  };
}

export default createDataSlice.reducer;
