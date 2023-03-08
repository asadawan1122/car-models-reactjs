import axios from 'axios';
import { api, baseURL } from './Environment';

const instance = axios.create({
    baseURL: baseURL,
});

export const getData = async () => {
    try {
        const response = await instance.get(api.listCars);
        return response.data[0].data.cars;
    } catch (error) {
        throw error;
    }
};

export const getDatail = async () => {
    try {
        const response = await instance.get(api.getCarDetail);
        return response.data[0].data.cars;
    } catch (error) {
        throw error;
    }
};

export const createData = async (data) => {
    try {
        const response = await instance.post(api.storeCar, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
