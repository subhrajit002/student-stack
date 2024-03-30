import React, { useState } from 'react'
import validation from './SignupValidation'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    // const [values, setValues] = useState({
    //     full_name: '',
    //     email: '',
    //     user_name: '',
    //     password: ''
    // });

    // const navigate = useNavigate();

    // const [errors, setErrors] = useState({})

    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] })) 
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(validation(values));
    //     if (errors.full_name === "" && errors.email === "" && errors.user_name === "" && errors.password === "") {
    //         axios.post('http://localhost:5000/sign-up', values)
    //             .then(res => {
    //                 navigate('/auth');
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }


    const [values, setValues] = useState({
        full_name: '',
        email: '',
        user_name: '',
        password: '',
        topics: [] // Include a state to hold selected topics
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
    };

    // const handleCheckboxChange = (event) => {
    //     const { name, checked } = event.target;
    //     const { name, checked } = event.target;
    //     setValues((prev) => ({
    //         ...prev,
    //         topics: checked ? [...prev.topics, name] : prev.topics.filter((topic) => topic !== name)
    //     }));
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(validation(values));
        try {
            const response = await axios.post('http://localhost:5000/sign-up', values);
            console.log(response.data); // Handle successful registration
            navigate('/auth');
        } catch (error) {
            console.error('Registration failed:', error); // Handle registration error
        }
    };
    return (
        <div className="wrapper">
            <section className="sign-in-page">
                <div id="container-inside">
                    <div id="circle-small"></div>
                    <div id="circle-medium"></div>
                    <div id="circle-large"></div>
                    <div id="circle-xlarge"></div>
                    <div id="circle-xxlarge"></div>
                </div>
                <div className="container p-0">
                    <div className="row no-gutters">
                        <div className="col-md-12 bg-white pt-5 pt-5 pb-lg-0 pb-5 mt-3">
                            <div className="sign-in-from">
                                <h1 className="mb-0 text-center" id="custom-rs-1">Sign Up</h1>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label className="form-label" for="email">Full Name:</label>
                                                    <input type="text" className="form-control" id="email1"
                                                        placeholder="Enter Your Full Name:" name='full_name' onChange={handleInput} />
                                                    {errors.full_name && <span className='text-danger'>{errors.full_name}</span>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label className="form-label" for="email">Email address:</label>
                                                    <input type="email" className="form-control" id="email1"
                                                        placeholder="Enter Your Email:" name='email' onChange={handleInput} />
                                                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label className="form-label" for="email">User Name:</label>
                                                    <input type="text" className="form-control" id="email1"
                                                        placeholder="Enter Your User Name:" name='user_name' onChange={handleInput} />
                                                    {errors.user_name && <span className='text-danger'>{errors.user_name}</span>}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label className="form-label" for="email">Password:</label>
                                                    <input type="password" className="form-control" id="email1"
                                                        placeholder="Enter Your Password:" name='password' onChange={handleInput} />
                                                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <div className="header-title">
                                                    <h4 className="card-title">Topics:</h4>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p>Select the Topics which you want to see in your feed....</p>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='Web_Development' id="customCheck-1" />
                                                    <label className="form-check-label" htmlFor="customCheck-1">Web Development</label>
                                                </div>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='Android Development' id="customCheck-2" />
                                                    <label className="form-check-label" htmlFor="customCheck-2">Android Development</label>
                                                </div>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='AI' id="customCheck-3" />
                                                    <label className="form-check-label" htmlFor="customCheck-2">AI</label>
                                                </div>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='ML' id="customCheck-4" />
                                                    <label className="form-check-label" htmlFor="customCheck-2">ML</label>
                                                </div>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='IOT' id="customCheck-5" />
                                                    <label className="form-check-label" htmlFor="customCheck-2">IOT</label>
                                                </div>
                                                <div className="form-check form-checkbox form-check-inline">
                                                    <input type="checkbox" className="form-check-input bg-success" name='IOS DEV' id="customCheck-5" />
                                                    <label className="form-check-label" htmlFor="customCheck-2">IOS DEV</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp
