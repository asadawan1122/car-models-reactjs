import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import '../styles/CarDetailsmodule.scss';
import Loader from "../components/loader";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const CarDetails = ({ route, navigation }) => {
    const { state } = useLocation();
    const { payload } = state;

    return (
        <>
            <NavBar uerName="User" />

            <section className="car-detail-section section-padding">
                <div className="container">
                    <div className="detail-main">
                        <div className="car-detail-left">
                            <div className="detail-heading-container">
                                <h3>about</h3>
                                <h2>{payload?.name}</h2>
                            </div>
                        </div>
                        <div className="car-detail-right">
                            <div className="detail-content-container">
                                <h4 className="detail-right-heading">What mentaincences are required?</h4>
                                <p className="detail-paragraph">
                                    <b>Engine: </b>
                                    {payload?.maintenance_data?.engine}
                                </p>
                                <p className="detail-paragraph">
                                    <b>Tryes: </b>
                                    {payload?.maintenance_data?.tryes}
                                </p>
                                <p className="detail-paragraph">
                                    <b>Oil: </b>
                                    {payload?.maintenance_data?.oil}
                                </p>
                                <p className="detail-paragraph">
                                    <b>Breaks: </b>
                                    {payload?.maintenance_data?.breaks}
                                </p>
                                <p className="detail-paragraph">
                                    <b>Batteries: </b>
                                    {payload?.maintenance_data?.batteries}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CarDetails;