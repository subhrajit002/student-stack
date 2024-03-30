import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import './Auth.css';
import validation from './LoginValidation';

const Auth = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }
    return (
        <>
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
                            <div className="col-md-6 text-center pt-5">
                                <div className="sign-in-detail text-white">
                                    <Link className="sign-in-logo mb-5" to="#">
                                        <img src="../assets/images/logo.png" className="img-fluid" alt="logo" />
                                    </Link>
                                    <div className="sign-slider overflow-hidden ">
                                        <ul className="swiper-wrapper list-inline m-0 p-0 ">
                                            <li className="swiper-slide">
                                                <img src="../assets/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Find new friends</h4>
                                                <p>It is a long established fact that a reader will be distracted by the
                                                    readable content.</p>
                                            </li>
                                            <li className="swiper-slide">
                                                <img src="../assets/images/login/2.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Connect with the world</h4>
                                                <p>It is a long established fact that a reader will be distracted by the
                                                    readable content.</p>
                                            </li>
                                            <li className="swiper-slide">
                                                <img src="../assets/images/login/3.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Create new events</h4>
                                                <p>It is a long established fact that a reader will be distracted by the
                                                    readable content.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5" >
                                <div className="sign-in-from">
                                    <h1 className="mb-0">Sign in</h1>
                                    <p>Enter your email address and password to access admin panel.</p>
                                    <form className="mt-4" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" name='email'  className="form-control mb-0" id="exampleInputEmail1"
                                                placeholder="Enter email" onChange={handleInput} />
                                            {errors.email && <span className='text-danger'>{errors.email}</span> }
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                                            <Link to="#" className="float-end">Forgot password?</Link>
                                            <input type="password"  name='password' className="form-control mb-0" id="exampleInputPassword1"
                                                placeholder="Password" onChange={handleInput} />
                                            {errors.password && <span className='text-danger'>{errors.password}</span> }
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <button type="submit" className="btn btn-primary float-end">Sign in</button>
                                        </div>
                                        <div className="sign-info">
                                            <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link
                                                to="/sign-up">Sign up</Link></span>
                                            <ul className="iq-social-media">
                                                <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                                <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                                <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Auth;
