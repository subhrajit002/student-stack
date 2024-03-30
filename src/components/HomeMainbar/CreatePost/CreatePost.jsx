import React from 'react'
import './CreatePost.css'


const CreatePost = () => {

    const tags = ['c', 'c++', 'java', 'jvascript', 'react', 'node', 'express', 'python']
    return (
        <div id="content-page" class="content-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 row m-0 p-0">

                        {/* create post  */}
                        <div class="col-sm-12" >
                            <div id="post-modal-data" class="card card-block card-stretch card-height">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Create Post</h4>
                                    </div>
                                </div>
                                <div class="card-body" >
                                    <div class="d-flex align-items-center">
                                        <div class="user-img">
                                            <img src="../assets/images/user/1.jpg" alt="userimg" class="avatar-60 rounded-circle" />
                                        </div>
                                        <form class="post-text ms-3 w-100 " action="javascript:void();">
                                            <input type="text" class="form-control rounded" placeholder="Write something here..."
                                                style={{ border: "none" }} />
                                        </form>
                                    </div>
                                    <hr />
                                    <ul className="post-opt-block d-flex list-inline m-0 p-0 flex-wrap" >
                                        <li className="me-3 mb-md-0 mb-2">
                                            <a href="#" className="btn btn-soft-primary">
                                                <img src="../assets/images/small/07.png" alt="icon" className="img-fluid me-2" />
                                                Photo
                                            </a>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <a href="#" className="btn btn-soft-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <img src="../assets/images/small/08.png" alt="icon" className="img-fluid me-2" /> Tag
                                                Friend
                                            </a>
                                        </li>
                                        <li className="me-3">
                                            <a href="#" className="btn btn-soft-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                                <img src="../assets/images/small/09.png" alt="icon" className="img-fluid me-2" />Tag Topic
                                            </a>
                                        </li>
                                        <li className="me-3" >
                                            <a href="#" className="btn btn-soft-primary">
                                                <i class="fa-solid fa-location-dot" style={{ color: "red" }} /> Check in
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="container" style={{ paddingBottom: "5px" }}>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" type="button">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tag Friend</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Enter  Name</label>
                                            <input type="text" class="form-control" id="tag" name='tag' aria-describedby="emailHelp" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tag Topic</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Enter the topics that describe the best</label>
                                            <input type="text" class="form-control" id="topic" name='topic' aria-describedby="emailHelp" />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* side bar topics  */}
                    {/* <div class="col-lg-4">
                            <div class="card">
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Color</h4>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-primary" id="customCheck-1" checked="" />
                                        <label class="form-check-label" for="customCheck-1"> Primary</label>
                                    </div>

                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-success" id="customCheck-2" checked="" />
                                        <label class="form-check-label" for="customCheck-2">Success</label>
                                    </div><br />
                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-danger" id="customCheck-3" checked />
                                        <label class="form-check-label" for="customCheck-3">Danger</label>
                                    </div>
                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-warning" id="customCheck-4" checked="" />
                                        <label class="form-check-label" for="customCheck-4">Warning</label>
                                    </div><br />
                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-dark" id="customCheck-5" checked="" />
                                        <label class="form-check-label" for="customCheck-5">Dark</label>
                                    </div>
                                    <div class="form-check form-checkbox form-check-inline">
                                        <input type="checkbox" class="form-check-input bg-info" id="customCheck-6" checked="" />
                                        <label class="form-check-label" for="customCheck-6">Info</label>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    <div className="col-lg-4 widget-tags">
                        <h3>Watched Tags</h3>
                        <div className="widget-tags-div">
                            {
                                tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default CreatePost
