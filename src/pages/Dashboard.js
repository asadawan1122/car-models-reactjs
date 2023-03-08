import React from "react";
import Logo from '../images/logo.png';
import { useNavigate } from "react-router-dom";
import '../styles/Dashboardmodule.scss';
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="dashboard-section section-padding">
                <div className="container">
                    <div className="inner">
                        <div className="dashbaord-content-container">
                            <div className="dashboard-logo-container">
                                <img src={Logo} className="dashboard-logo" />
                            </div>
                            <div className="dashboard-button-container">
                                <button onClick={() => navigate('/data-details')} type="button" className="dashboard-button">Admin</button>
                                <button onClick={() => navigate('/car-modal-list')} type="button" className="dashboard-button">User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Dashboard;