import { createSlice } from '@reduxjs/toolkit';
import carModels from './carModels';

const carModelsSlice = createSlice({
    name: 'carModels',
    initialState: {
        carModels,
    },
    reducers: {
        addCarModel: (state, action) => {
            state.carModels.push(action.payload);
        },
        updateCarModel: (state, action) => {
            const carModelIndex = state.carModels.findIndex(carModel => carModel.id === action.payload.id);
            state.carModels[carModelIndex] = action.payload;
        },
        removeCarModel: (state, action) => {
            state.carModels = state.carModels.filter(carModel => carModel.id !== action.payload);
        },
    },
});

export const { addCarModel, updateCarModel, removeCarModel } = carModelsSlice.actions;

export default carModelsSlice.reducer;
