import React from "react";

const Services = () => {
    return (
        <div
            name="section-service"
            className="services-section pt-24 lg:pt-28 xl:pt-32"
        >
            <div className="container mx-auto">
                <div className="section-heading relative overflow-hidden pb-14 text-center">
                    <h2 className="relative z-10 mb-2 uppercase text-[36px] text-white font-bold">My Services</h2>
                    <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary !bg-opacity-20">
                        <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
                    </span>
                    <span
                        className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
                        style={{ "will-change": "transform" }}
                    >
                        Services
                    </span>
                </div>
                <div className="services-wrapper grid grid-cols-3 gap-7 mt-12">
                    <div
                        className="col-span-3 lg:col-span-1"
                        data-projection-id="46"
                        style={{ "opacity": "1", "transform": "none" }}
                    >
                        <div className="service card hovercard relative overflow-hidden p-4 md:p-5" count="01">
                            <span className="service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary !bg-opacity-10 p-5 text-4xl text-primary">
                                <div className="fill-current text-primary">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="auto"
                                            height="auto"
                                            className="injected-svg"
                                            data-src="/icons/quill-pen-line.svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            fill="currentColor"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </span>
                            {/* Services Content */}
                            <h5>Data Analytics</h5>
                            <p>
                                Quickly develop and deploy analytic workloads to unlock data and 
                                Insights faster by helping you develop and deploy data, analytics
                                and AI.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-span-3 lg:col-span-1"
                        data-projection-id="47"
                        style={{ "opacity": "1", "transform": "none" }}
                    >
                        <div className="service card hovercard relative overflow-hidden p-4 md:p-5" count="02">
                            <span className="service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary !bg-opacity-10 p-5 text-4xl text-primary">
                                <div className="fill-current text-primary">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="auto"
                                            height="auto"
                                            className="injected-svg"
                                            data-src="/icons/code-s-slash-line.svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            fill="currentColor"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </span>
                            {/* Services Content */}
                            <h5>BI Dashboards Development</h5>
                            <p>
                                Developing dashboard that helps people see and understand their 
                                Data. Transform Data into Actionable Insights with Power BI.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-span-3 lg:col-span-1"
                        data-projection-id="48"
                        style={{ "opacity": "1", "transform": "none" }}
                    >
                        <div className="service card hovercard relative overflow-hidden p-4 md:p-5" count="03">
                            <span className="service-icon mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary !bg-opacity-10 p-5 text-4xl text-primary">
                                <div className="fill-current text-primary">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="auto"
                                            height="auto"
                                            className="injected-svg"
                                            data-src="/icons/smartphone-line.svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            fill="currentColor"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </span>
                            {/* Services Content */}
                            <h5>Power BI Consultant</h5>
                            <p>
                                As a Power BI Consulting partner, we remain client 
                                focused to create a Business Intelligence framework for your organization's desicion-making processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
