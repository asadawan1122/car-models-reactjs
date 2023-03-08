import React from "react";
import './CarModalCardmodule.scss';
import { imagePath } from "../../api/Environment";
const CardListCard = (props) => {
    
    return (
        <>
            <div className="card-block">
                <a onClick={props.onClick}>
                    <div className="card-image-container">
                        <img src={imagePath + props.image} className="car-image" />
                    </div>
                    <ul className="card-content-list">
                        <li className="card-content-item">
                            <div className="card-item-block card-content-item-left">
                                <h6 className="card-sm-title">
                                    Name
                                </h6>
                                <p className="card-description">
                                    {props.nameDiscription}
                                </p>
                            </div>
                            <div className="card-item-block card-content-item-left">
                                <h6 className="card-sm-title">
                                    Make
                                </h6>
                                <p className="card-description">
                                    {props.makeDiscription}
                                </p>
                            </div>

                        </li>
                        <li className="card-content-item">

                            <div className="card-item-block card-content-item-left">
                                <h6 className="card-sm-title">
                                    Model
                                </h6>
                                <p className="card-description">
                                    {props.modelDiscription}
                                </p>
                            </div>
                            <div className="card-item-block card-content-item-left">
                                <h6 className="card-sm-title">
                                    Variant
                                </h6>
                                <p className="card-description">
                                    {props.variantDiscription}
                                </p>
                            </div>
                        </li>
                        <li className="card-content-item">
                            <div className="card-item-block discription-block card-content-item-left">
                                <h6 className="card-sm-title">
                                    Description
                                </h6>
                                <p className="card-description">
                                    {props.discription}
                                </p>
                            </div>
                        </li>
                    </ul>
                </a>
            </div>
        </>
    )
}
export default CardListCard;