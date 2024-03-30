import React from 'react'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <div className="iq-sidebar  sidebar-default ">
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="active">
                                <a href="../dashboard/index.html" className=" ">
                                    <i className="las la-newspaper"></i><span>Newsfeed</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="../app/profile.html" className=" ">
                                    <i className="las la-user"></i><span>Profile</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="../app/group.html" className=" ">
                                    <i className="las la-users"></i><span>Group</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="../app/todo.html" className=" ">
                                    <i className="las la-check-circle"></i><span>Todo</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="../dashboard/calendar.html" className=" ">
                                    <i className="las la-calendar"></i><span>Calendar</span>
                                </a>
                            </li>

                            <li className="">
                                <a href="#ui-elements" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false"><i
                                    className="ri-focus-2-line"></i><span>Ui-Elements</span><i
                                        className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                <ul id="ui-elements" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a href="#ui-kit" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false"><i
                                            className="ri-pencil-ruler-line"></i><span>UI Kit</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="ui-kit" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                            <li className="">
                                                <a href="../dashboard/ui-color.html"><i className="ri-font-color"></i>Colors</a>
                                            </li>
                                            <li className=" ">
                                                <a href="../dashboard/ui-typography.html"><i className="ri-text"></i>Typography</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-alerts.html"><i className="ri-alert-line"></i>Alerts</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-badges.html"><i className="ri-building-3-line"></i>Badges</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-breadcrumb.html"><i className="ri-menu-2-line"></i>Breadcrumb</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-buttons.html"><i
                                                    className="ri-checkbox-blank-line"></i>Buttons</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-cards.html"><i className="ri-bank-card-line"></i>Cards</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-carousel.html"><i className="ri-slideshow-line"></i>Carousel</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-embed-video.html"><i className="ri-slideshow-2-line"></i>Video</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-grid.html"><i className="ri-grid-line"></i>Grid</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-images.html"><i className="ri-image-line"></i>Images</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-list-group.html"><i className="ri-file-list-3-line"></i>list
                                                    Group</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-modal.html"><i className="ri-stop-mini-line"></i>Modal</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-notifications.html"><i
                                                    className="ri-notification-line"></i>Notifications</a>
                                            </li>
                                            <li className="">
                                                <a href="ui-pagination.html"><i className="ri-pages-line"></i>Pagination</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-popovers.html"><i
                                                    className="ri-folder-shield-2-line"></i>Popovers</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-progressbars.html"><i
                                                    className="ri-battery-low-line"></i>Progressbars</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-tabs.html"><i className="ri-database-line"></i>Tabs</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/ui-tooltips.html"><i className="ri-record-mail-line"></i>Tooltips</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="#forms" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                            className="ri-profile-line"></i><span>Forms</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="forms" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                            <li className="">
                                                <a href="../dashboard/form-layout.html"><i className="ri-tablet-line"></i>Form Elements</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-validation.html"><i className="ri-device-line"></i>Form
                                                    Validation</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-switch.html"><i className="ri-toggle-line"></i>Form Switch</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-chechbox.html"><i className="ri-checkbox-line"></i>Form
                                                    Checkbox</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-radio.html"><i className="ri-radio-button-line"></i>Form
                                                    Radio</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="#wizard-form" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                            className="ri-archive-drawer-line"></i><span>Forms
                                                Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="wizard-form" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                            <li className="">
                                                <a href="../dashboard/form-wizard.html"><i className="ri-clockwise-line"></i>Simple
                                                    Wizard</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-wizard-validate.html"><i
                                                    className="ri-clockwise-2-line"></i>Validate Wizard</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/form-wizard-vertical.html"><i
                                                    className="ri-anticlockwise-line"></i>Vertical Wizard</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="#tables" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                            className="ri-table-line"></i><span>Table</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="tables" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                            <li className="">
                                                <a href="../dashboard/tables-basic.html"><i className="ri-table-line"></i>Basic Tables</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/data-table.html"><i className="ri-database-line"></i>Data Table</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/table-editable.html"><i className="ri-refund-line"></i>Editable
                                                    Table</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="#icons" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                            className="ri-list-check"></i><span>Icons</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="icons" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                                            <li className="">
                                                <a href="../dashboard/icon-fontawesome-5.html"><i className="ri-facebook-fill"></i>Font
                                                    Awesome 5</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/icon-lineawesome.html"><i className="ri-keynote-line"></i>line
                                                    Awesome</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/icon-remixicon.html"><i
                                                    className="ri-remixicon-line"></i>Remixicon</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="#pages" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                    className="ri-pages-line"></i><span>Pages</span><i
                                        className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                <ul id="pages" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a href="#authentication" className="  collapsed" data-bs-toggle="collapse"
                                            aria-expanded="false"><i className="ri-pages-line"></i><span>Authentication</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="authentication" className="iq-submenu collapse" data-bs-parent="#pages">
                                            <li className="">
                                                <a href="../dashboard/sign-in.html"><i className="ri-login-box-line"></i>Login</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/sign-up.html"><i className="ri-login-circle-line"></i>Register</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-recoverpw.html"><i className="ri-record-mail-line"></i>Recover
                                                    Password</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-confirm-mail.html"><i className="ri-file-code-line"></i>Confirm
                                                    Mail</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-lock-screen.html"><i className="ri-lock-line"></i>Lock
                                                    Screen</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a href="#extra-pages" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i
                                            className="ri-pantone-line"></i><span>Extra Pages</span><i
                                                className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                        <ul id="extra-pages" className="iq-submenu collapse" data-bs-parent="#pages">
                                            <li className="">
                                                <a href="../dashboard/pages-timeline.html"><i
                                                    className="ri-map-pin-time-line"></i>Timeline</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-invoice.html"><i
                                                    className="ri-question-answer-line"></i>Invoice</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/blank-page.html"><i className="ri-invision-line"></i>Blank Page</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-error.html"><i className="ri-error-warning-line"></i>Error
                                                    404</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-error-500.html"><i className="ri-error-warning-line"></i>Error
                                                    500</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-pricing.html"><i className="ri-price-tag-line"></i>Pricing</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-pricing-one.html"><i
                                                    className="ri-price-tag-2-line"></i>Pricing 1</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-maintenance.html"><i
                                                    className="ri-archive-line"></i>Maintenance</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-comingsoon.html"><i className="ri-mastercard-line"></i>Coming
                                                    Soon</a>
                                            </li>
                                            <li className="">
                                                <a href="../dashboard/pages-faq.html"><i className="ri-compasses-line"></i>Faq</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-5"></div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
