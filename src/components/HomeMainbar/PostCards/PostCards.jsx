import React from 'react'
import { Link } from 'react-router-dom'

const PostCards = () => {
    return (
        <div id="content-page" className="content-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 row m-0 p-0">
                        <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src="../assets/images/user/01.jpg" alt="" />
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div className="">
                                                        <h5 className="mb-0 d-inline-block">Anna Sthesia</h5>
                                                        <span className="mb-0 d-inline-block">Add New Post</span>
                                                        <p className="mb-0 text-primary">Just Now</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                <i className="ri-more-fill"></i>
                                                            </span>
                                                            <div className="dropdown-menu m-0 p-0">
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-user-unfollow-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Unfollow User</h6>
                                                                            <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                                        </div>
                                                                    </div>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                            commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                            massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                            <div className="row-span-2 row-span-md-1">
                                                <img src="../assets/images/page-img/p2.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                            <div className="row-span-1">
                                                <img src="../assets/images/page-img/p1.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                            <div className="row-span-1 ">
                                                <img src="../assets/images/page-img/p3.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                <img src="../assets/images/icon/01.png" className="img-fluid" alt="" />
                                                            </span>
                                                            <div className="dropdown-menu py-2">
                                                                <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Like"><img
                                                                        src="../assets/images/icon/01.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Love"><img
                                                                        src="../assets/images/icon/02.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Happy"><img
                                                                        src="../assets/images/icon/03.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="HaHa"><img
                                                                        src="../assets/images/icon/04.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Think"><img
                                                                        src="../assets/images/icon/05.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Sade"><img
                                                                        src="../assets/images/icon/06.png" className="img-fluid" alt="" /></a>
                                                                <a className="me-2" href="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Lovely"><img
                                                                        src="../assets/images/icon/07.png" className="img-fluid" alt="" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                140 Likes
                                                            </span>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Max Emum</a>
                                                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                                                <a className="dropdown-item" href="#">Tara Misu</a>
                                                                <a className="dropdown-item" href="#">Midge Itz</a>
                                                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                                                <a className="dropdown-item" href="#">Other</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <div className="dropdown">
                                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" role="button">
                                                            20 Comment
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Max Emum</a>
                                                            <a className="dropdown-item" href="#">Bill Yerds</a>
                                                            <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                                            <a className="dropdown-item" href="#">Tara Misu</a>
                                                            <a className="dropdown-item" href="#">Midge Itz</a>
                                                            <a className="dropdown-item" href="#">Sal Vidge</a>
                                                            <a className="dropdown-item" href="#">Other</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                                <Link to="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn"
                                                    aria-controls="share-btn"><i className="ri-share-line"></i>
                                                    <span className="ms-1">99 Share</span></Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src="../assets/images/user/02.jpg" alt="userimg"
                                                            className="avatar-35 rounded-circle img-fluid" />
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="javascript:void();">like</Link>
                                                            <Link to="javascript:void();">reply</Link>
                                                            <Link to="javascript:void();">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src="../assets/images/user/03.jpg" alt="userimg"
                                                            className="avatar-35 rounded-circle img-fluid" />
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="javascript:void();">like</Link>
                                                            <Link to="javascript:void();">reply</Link>
                                                            <Link to="javascript:void();">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                            <div className="comment-attagement d-flex">
                                                <Link to="javascript:void();"><i className="ri-link me-3"></i></Link>
                                                <Link to="javascript:void();"><i className="ri-user-smile-line me-3"></i></Link>
                                                <Link to="javascript:void();"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="user-post-data">
                                        <div className="d-flex justify-content-between">
                                            <div className="me-3">
                                                <img className="rounded-circle img-fluid" src="../assets/images/user/01.jpg" alt="" />
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <div className="">
                                                        <h5 className="mb-0 d-inline-block">Anna Sthesia</h5>
                                                        <span className="mb-0 d-inline-block">Add New Post</span>
                                                        <p className="mb-0 text-primary">Just Now</p>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                <i className="ri-more-fill"></i>
                                                            </span>
                                                            <div className="dropdown-menu m-0 p-0">
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <div className="h4">
                                                                            <i className="ri-save-line"></i>
                                                                        </div>
                                                                        <div className="data ms-2">
                                                                            <h6>Save Post</h6>
                                                                            <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Hide Post</h6>
                                                                            <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a className="dropdown-item p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-user-unfollow-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Unfollow User</h6>
                                                                            <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                                        </div>
                                                                    </div>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at
                                            commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                                            massa sed rhoncus</p>
                                    </div>
                                    <div className="user-post">
                                        <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                            <div className="row-span-2 row-span-md-1">
                                                <img src="../assets/images/page-img/p2.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                            <div className="row-span-1">
                                                <img src="../assets/images/page-img/p1.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                            <div className="row-span-1 ">
                                                <img src="../assets/images/page-img/p3.jpg" alt="post-image"
                                                    className="img-fluid rounded w-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-area mt-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <div className="like-block position-relative d-flex align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <div className="like-data">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                <img src="../assets/images/icon/01.png" className="img-fluid" alt="" />
                                                            </span>
                                                            <div className="dropdown-menu py-2">
                                                                <Link className="ms-2 me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Like"><img
                                                                        src="../assets/images/icon/01.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Love"><img
                                                                        src="../assets/images/icon/02.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Happy"><img
                                                                        src="../assets/images/icon/03.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="HaHa"><img
                                                                        src="../assets/images/icon/04.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Think"><img
                                                                        src="../assets/images/icon/05.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Sade"><img
                                                                        src="../assets/images/icon/06.png" className="img-fluid" alt="" /></Link>
                                                                <Link className="me-2" to="#" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title="Lovely"><img
                                                                        src="../assets/images/icon/07.png" className="img-fluid" alt="" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="total-like-block ms-2 me-3">
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false" role="button">
                                                                140 Likes
                                                            </span>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">Max Emum</a>
                                                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                                                <a className="dropdown-item" href="#">Tara Misu</a>
                                                                <a className="dropdown-item" href="#">Midge Itz</a>
                                                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                                                <a className="dropdown-item" href="#">Other</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="total-comment-block">
                                                    <div className="dropdown">
                                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" role="button">
                                                            20 Comment
                                                        </span>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Max Emum</a>
                                                            <a className="dropdown-item" href="#">Bill Yerds</a>
                                                            <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                                            <a className="dropdown-item" href="#">Tara Misu</a>
                                                            <a className="dropdown-item" href="#">Midge Itz</a>
                                                            <a className="dropdown-item" href="#">Sal Vidge</a>
                                                            <a className="dropdown-item" href="#">Other</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                                <Link to="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn"
                                                    aria-controls="share-btn"><i className="ri-share-line"></i>
                                                    <span className="ms-1">99 Share</span></Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <ul className="post-comments list-inline p-0 m-0">
                                            <li className="mb-2">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src="../assets/images/user/02.jpg" alt="userimg"
                                                            className="avatar-35 rounded-circle img-fluid" />
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Monty Carlo</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="javascript:void();">like</Link>
                                                            <Link to="javascript:void();">reply</Link>
                                                            <Link to="javascript:void();">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src="../assets/images/user/03.jpg" alt="userimg"
                                                            className="avatar-35 rounded-circle img-fluid" />
                                                    </div>
                                                    <div className="comment-data-block ms-3">
                                                        <h6>Paul Molive</h6>
                                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                                            <Link to="javascript:void();">like</Link>
                                                            <Link to="javascript:void();">reply</Link>
                                                            <Link to="javascript:void();">translate</Link>
                                                            <span> 5 min </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                            <div className="comment-attagement d-flex">
                                                <Link to="javascript:void();"><i className="ri-link me-3"></i></Link>
                                                <Link to="javascript:void();"><i className="ri-user-smile-line me-3"></i></Link>
                                                <Link to="javascript:void();"><i className="ri-camera-line me-3"></i></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCards
