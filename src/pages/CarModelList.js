import React, { useEffect } from "react";
import CardListCard from "../components/CarModalCard/CarModelCard";
import NavBar from "../components/NavBar/NavBar";
import '../styles/CarModalListmodule.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../store/slices/slice1';
import Loader from "../components/loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const CarModalList = () => {
    const { data, loading, error } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    if (error) {
        toast('Network error')
    }


    const handleClick = async (data) => {
        navigate('/card-details', { state: { payload: data } });
    }

    return (
        <>
            <NavBar uerName="User" />
            {/* Card section start */}
            {loading ?
                <Loader />
                :
                <section className="card-list-section section-padding">
                    <div className="container">
                        <div className="inner">
                            <div className="car-list-header">
                                <div className="car-list-heading-container">
                                    <h2 className="car-list-heading">Models List</h2>
                                </div>
                                <div className="select-container">
                                    <select className="car-list-select">
                                        <option value="null" disabled>Sort by:</option>
                                        <option value="someOption">Make</option>
                                        <option value="otherOption">Other option</option>
                                    </select>
                                </div>
                            </div>
                            <ul className="card-list">
                                {data?.map(item => (
                                    <li className="card-list-item" key={item.id}>
                                        <CardListCard
                                            onClick={() => handleClick(item)}
                                            to={() => handleClick(item)}
                                            image={item.image}
                                            nameDiscription={item.name}
                                            makeDiscription={item.car_make}
                                            modelDiscription={item.car_model}
                                            variantDiscription={item.car_variant}
                                            discription={item.description} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            }
            {/* card  section end */}
        </>
    )
}
export default CarModalList;