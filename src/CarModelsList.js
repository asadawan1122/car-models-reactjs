import React from 'react';
// import { useSelector } from 'react-redux';
import './CarModelsList.module.scss';

function CarModelsList() {
    // const carModels = useSelector(state => state.carModels.carModels);

    return (
        <div className="car-models-list">
            {/* {carModels.map(carModel => (
                <div className="car-model" key={carModel.id}>
                    <h3>{carModel.name}</h3>
                    <p>Maintenance: {carModel.maintenance.join(', ')}</p>
                </div>
            ))} */}
            datas
        </div>
    );
}

export default CarModelsList;
