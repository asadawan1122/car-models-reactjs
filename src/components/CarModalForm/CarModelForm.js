import React from "react";
import './CarModalFormmodule.scss';

const CarModalForm = (props) => {
    return (
        <>
            <div className="form-group">
                <label className="form-label" htmlFor={props.name} >{props.label}</label>
                <br/>
                <input name={props.name} type="text" className="car-input" id={props.idName} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
            </div>
        </>
    )
}
export default CarModalForm;