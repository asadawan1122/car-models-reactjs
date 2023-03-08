import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import '../styles/table.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from "../components/NavBar/NavBar";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../store/slices/slice1';
import Loader from "../components/loader";
import { toast } from "react-toastify";
import '../styles/CarModalListmodule.scss';
import { Link } from 'react-router-dom';

function DataTable() {
    const { data, loading, error } = useSelector(state => state.data);
    const [list, setList] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        if (data.length > 0) {
            setDataForTable(data)
        }

    }, [data])

    const setDataForTable = (items) => {
        const temp = items?.map(element => ({
            name: element.name,
            make: element.car_make,
            modal: element.car_model,
            variant: element.car_variant,
            engine: element.maintenance_data.engine,
            tryes: element.maintenance_data.tryes,
            oil: element.maintenance_data.oil,
            breaks: element.maintenance_data.breaks,
            batteries: element.maintenance_data.batteries,
            description: element.description,
        }));

        const columns = [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Make',
                field: 'make',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Modal',
                field: 'modal',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Variant',
                field: 'variant',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Engine',
                field: 'engine',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Tryes',
                field: 'tryes',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Oil',
                field: 'oil',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Breaks',
                field: 'breaks',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Batteries',
                field: 'batteries',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
                width: 300
            }
        ];

        const tableData = {
            columns,
            rows: temp
        };



        setList(tableData)
    };

    if (error) {
        toast('Network error')
    }

    return (
        <>
            <NavBar uerName="Admin" />
            <section className="card-list-section section-padding">
                <div className="container">
                    <div className="inner">
                        <div className="car-list-header">
                            <div className="car-list-heading-container">
                                <h2 className="car-list-heading">Models List</h2>
                            </div>

                            <Link
                                to={"/user-details"}
                            >
                                <h6>Add new model</h6>
                            </Link>

                        </div>
                        {loading ?
                            <Loader />
                            :
                            <div className="container mt-5">
                                {list?.rows?.length > 0 ? (
                                    <MDBDataTable
                                        striped
                                        bordered
                                        hover
                                        data={list}
                                    />
                                ) : (
                                    <div>
                                        Loading data...
                                    </div>
                                )}

                            </div>
                        }
                    </div>
                </div>
            </section>


        </>

    );
} export default DataTable;