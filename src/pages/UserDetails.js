import React, { useEffect, useState } from "react";
import CarModalForm from "../components/CarModalForm/CarModelForm";
import NavBar from "../components/NavBar/NavBar";
import '../styles/UserDetailsModule.scss';
import { useSelector, useDispatch } from 'react-redux';
import Loader from "../components/loader";
import { toast } from "react-toastify";
import { postData } from "../store/slices/slice2";
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const { loading, error } = useSelector(state => state.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // useEffect(() => {
    //     if (!loading && !error) {
    //         navigate("/data-details")
    //     }
    // }, [loading, error, ]);

    const [carData, setCarData] = useState({
        name: '',
        make: '',
        modal: '',
        variant: '',
        engine: '',
        tryes: '',
        oil: '',
        breaks: '',
        batteries: '',
        description: '',
        image: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setCarData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    }

    const handleChangeFile = (event) => {
        const file = event.target.files[0];

        if (!file) return;
        if (!file.type.startsWith('image/')) {
            toast('File is not an image')
            return;
        }

        setCarData({
            ...carData,
            image: file
        });
    };

    if (error) {
        toast('Network error')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = await validate();
        if (!isValid) {
            toast.warn('Please fill all the required inputs.')
            return
        }

        const formData = new FormData();

        formData.append('name', carData.name);
        formData.append('car_make', carData.make);
        formData.append('car_model', carData.modal);
        formData.append('car_variant', carData.variant);
        formData.append('engine', carData.engine);
        formData.append('tryes', carData.tryes);
        formData.append('oil', carData.oil);
        formData.append('breaks', carData.breaks);
        formData.append('batteries', carData.batteries);
        formData.append('description', carData.description);
        formData.append('image', carData.image);

        dispatch(postData(formData));

        setTimeout(() => {
            if (!loading && !error) {
                navigate("/data-details")
            }
        }, 4000);
    }

    const validate = async () => {
        const { name, make, modal, variant, engine, tryes, oil, breaks, batteries, description, image } = carData;

        if (!name) return false;
        if (!make) return false;
        if (!modal) return false;
        if (!variant) return false;
        if (!engine) return false;
        if (!tryes) return false;
        if (!oil) return false;
        if (!breaks) return false;
        if (!batteries) return false;
        if (!description) return false;
        if (!image) return false;

        return true;
    }


    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <NavBar />
            <section className="form-section section-padding">
                <div className="container">
                    <div className="inner">
                        <div className="form-heading-container">
                            <h2 className="form-heading">Create Car Model</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-container">
                                <div className="form-block">
                                    <CarModalForm label="Name" name="name"
                                        placeholder="Name"
                                        value={carData?.name}
                                        onChange={handleChange}
                                        idName="name" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Make" name="make" placeholder="Make" value={carData?.make} onChange={handleChange} idName="Make" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Model" name="modal" placeholder="Model" value={carData?.modal} onChange={handleChange} idName="model" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Variant" name="variant" placeholder="Variant" value={carData?.variant} onChange={handleChange} idName="variant" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Engine" name="engine" placeholder="Engine" value={carData?.engine} onChange={handleChange} idName="engine" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Tryes" name="tryes" placeholder="Tryes" value={carData?.tryes} onChange={handleChange} idName="tryes" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Oil" name="oil" placeholder="Oil" value={carData?.oil} onChange={handleChange} idName="oil" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Breaks" name="breaks" placeholder="Breaks" value={carData?.breaks} onChange={handleChange} idName="breaks" />
                                </div>
                                <div className="form-block">
                                    <CarModalForm label="Batteries" name="batteries" placeholder="Batteries" value={carData?.batteries} onChange={handleChange} idName="batteries" />
                                </div>
                                <div className="form-block">
                                    <div className="form-group">
                                        <label htmlFor="image" className="label">Upload File</label>
                                        <br />
                                        <input accept="image/*" type='file' name="image" className="file-input" id="image" onChange={handleChangeFile} />
                                    </div>
                                </div>
                                <div className="form-block textarea-block">
                                    <div className="form-group">
                                        <label htmlFor="description" className="label">Description</label>
                                        <br />
                                        <textarea className="car-input" name="description" placeholder="Description" value={carData?.description} onChange={handleChange} id="description" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="form-block textarea-block">
                                    <button type="submit" className="send-button" onClick={handleSubmit}>Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section >

            {loading &&
                <Loader />
            }
        </>
    )
}
export default UserDetails