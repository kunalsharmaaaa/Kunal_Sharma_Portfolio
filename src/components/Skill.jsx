import React from "react";

const Skill = () => {
    return (
        <div id="skill" className="skills-section pt-24 lg:pt-28 xl:pt-32 h-auto">
            <div className="container mx-auto">
                <div className="section-heading relative overflow-hidden pb-14 text-center">
                    <h2 className="relative z-10 mb-2 uppercase text-[36px] text-white font-bold">My Skills</h2>
                    <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary !bg-opacity-20">
                        <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
                    </span>
                    <span
                        className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
                        style={{ "will-change": "transform" }}
                    >
                        Skills
                    </span>
                </div>
                <div className="skills-wrapper mt-14">
                    <div className="grid grid-cols-4 gap-7">
                        <div
                            className="col-span-4 sm:col-span-2 lg:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
                                <div className="relative mb-2 inline-block text-primary">
                                    <svg
                                        className="circle"
                                        width="120"
                                        height="120"
                                        viewBox="0 0 120 120"
                                    >
                                        <circle
                                            className="circlebg"
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            pathLength="1"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                        ></circle>
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                            opacity="1"
                                            pathLength="1"
                                            stroke-dashoffset="0px"
                                            stroke-dasharray="0.80px 1px"
                                        ></circle>
                                    </svg>
                                    {/* Circle Skill Percent */}
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-white/[0.7]">
                                        85%
                                    </span>
                                </div>
                                <h5 className="text-white text-[18px] font-[600]">Data Analytics</h5>
                            </div>
                        </div>
                        <div
                            className="col-span-4 sm:col-span-2 lg:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
                                <div className="relative mb-2 inline-block text-primary">
                                    <svg
                                        className="circle"
                                        width="120"
                                        height="120"
                                        viewBox="0 0 120 120"
                                    >
                                        <circle
                                            className="circlebg"
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            pathLength="1"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                        ></circle>
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54   "
                                            stroke-linecap="round"
                                            stroke-width="12"
                                            opacity="1"
                                            pathLength="1"
                                            stroke-dashoffset="0px"
                                            stroke-dasharray="0.85px 1px"
                                        ></circle>
                                    </svg>
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-white/[0.7]">
                                        80%
                                    </span>
                                </div>
                                <h5 className="text-white text-[18px] font-[600]">BI Dashboards Developerment</h5>
                            </div>
                        </div>
                        <div
                            className="col-span-4 sm:col-span-2 lg:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
                                <div className="relative mb-2 inline-block text-primary">
                                    <svg
                                        className="circle"
                                        width="120"
                                        height="120"
                                        viewBox="0 0 120 120"
                                    >
                                        <circle
                                            className="circlebg"
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            pathLength="1"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                        ></circle>
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                            opacity="1"
                                            pathLength="1"
                                            stroke-dashoffset="0px"
                                            stroke-dasharray="0.75px 1px"
                                        ></circle>
                                    </svg>
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-white/[0.7]">
                                        75%
                                    </span>
                                </div>
                                <h5 className="text-white text-[18px] font-[600]">Database Management</h5>
                            </div>
                        </div>
                        <div
                            className="col-span-4 sm:col-span-2 lg:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="circleprogress card hovercard relative p-4 text-center md:p-5">
                                <div className="relative mb-2 inline-block text-primary">
                                    <svg
                                        className="circle"
                                        width="120"
                                        height="120"
                                        viewBox="0 0 120 120"
                                    >
                                        <circle
                                            className="circlebg"
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            pathLength="1"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                        ></circle>
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="54"
                                            stroke-linecap="round"
                                            stroke-width="12"
                                            opacity="1"
                                            pathLength="1"
                                            stroke-dashoffset="0px"
                                            stroke-dasharray="0.80px 1px"
                                        ></circle>
                                    </svg>
                                    <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 transform text-center text-xl text-white/[0.7]">
                                        85%
                                    </span>
                                </div>
                                <h5 className="text-white text-[18px] font-[600]">Power BI Consultant</h5>
                            </div>
                        </div>
                    </div>
                    <div className="py-7"></div>
                    <div className="grid grid-cols-2 gap-7">
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Database Design - <span className="text-primary">(80%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "80%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            {/* Progress Bar Skill Percent */}
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Mongo DB - <span className="text-primary">(70%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "70%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Python - <span className="text-primary">(75%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "75%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "none" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    SQL Server - <span className="text-primary">(85%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "85%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "translateY(20px) translateZ(0px)" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Power BI - <span className="text-primary">(80%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "80%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "translateY(20px) translateZ(0px)" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Tebleau - <span className="text-primary">(75%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "75%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "translateY(20px) translateZ(0px)" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Excel - <span className="text-primary">(80%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "80%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-2 md:col-span-1"
                            style={{ "opacity": "1", "transform": "translateY(20px) translateZ(0px)" }}
                        >
                            <div className="progress text-white font-[600] text-[20px]">
                                <h5>
                                    Database Mangement - <span className="text-primary">(85%)</span>
                                </h5>
                                <div className="progress-bar relative h-4 w-full rounded-full bg-primary !bg-opacity-20">
                                    <span
                                        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
                                        style={{ "width": "85%", "transform": "none", "transform-origin": "0% 50% 0px" }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
