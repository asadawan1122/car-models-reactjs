import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './slices/slice1';
import createDataSlice from './slices/slice2';

const store = configureStore({
    reducer: {
        data: dataSlice,
        createData: createDataSlice,
    },
});

export default store;
