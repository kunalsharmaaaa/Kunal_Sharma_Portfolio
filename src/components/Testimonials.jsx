import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules'
// Import Swiper styles
import "swiper/css";



const Testimonials = () => {
    return (
        <div
            name="section-reviews"
            className="reviews-section pt-24 lg:pt-28 xl:pt-32"
        >
            <div className="container mx-auto">
                <div className="section-heading relative overflow-hidden pb-14 text-center">
                    <h2 className="relative z-10 mb-2 uppercase text-[36px] text-white font-bold">
                        Client Reviews
                    </h2>
                    <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary !bg-opacity-20">
                        <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
                    </span>
                    <span
                        className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
                        style={{ "will-change": "transform" }}
                    >
                        Reviews
                    </span>
                </div>
                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },

                        992: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                    }}
                >
                    <div className="swiper-holder">
                        {/* Add New Testimonial Slide card */}
                        <SwiperSlide>
                            <div className="review card mt-11 p-4 md:p-5">
                                <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
                                    <span
                                        style={{
                                            "box-sizing": "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: "1",
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                "box-sizing": "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: "1",
                                                border: "0px",
                                                margin: "0px",
                                                padding: "100% 0px 0px",
                                            }}
                                        ></span>
                                        {/* Change Testimonial Image in src with correct file path */}
                                        <img
                                            alt="user image"
                                            src="assets/img/team1.jpg"
                                            decoding="async"
                                            data-nimg="responsive"
                                            style={{
                                                position: "absolute",
                                                inset: "0px",
                                                "box-sizing": "border-box",
                                                padding: "0px",
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: "0px",
                                                height: "0px",
                                                "min-width": "100%",
                                                "max-width": "100%",
                                                "min-height": "100%",
                                                "max-height": "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                                {/* Change Testimonial name */}
                                <h5 className="mb-0 text-white text-[19px] font-[600]">David Chester</h5>
                                {/* Edit Position */}
                                <p className="mb-2 text-body">
                                    <small>Client - Envato.com</small>
                                </p>
                                <div className="review-stars mb-3">
                                    <div
                                        className="star-ratings"
                                        title="5 Stars"
                                        style={{
                                            position: "relative",
                                            "box-sizing": "border-box",
                                            display: "inline-block",
                                        }}
                                    >
                                        <svg
                                            className="star-grad"
                                            style={{
                                                position: "absolute",
                                                "z-index": "0",
                                                width: "0px",
                                                height: "0px",
                                                visibility: "hidden",
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="starGrad272527516232957"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="100%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Change Feedback Content */}
                                <p>
                                    Working with Bieber is very good experience for me. He’s
                                    a good person. If I need developer in future, I’ll
                                    definately hire him.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review card mt-11 p-4 md:p-5">
                                <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
                                    <span
                                        style={{
                                            "box-sizing": "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: "1",
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                "box-sizing": "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: "1",
                                                border: "0px",
                                                margin: "0px",
                                                padding: "100% 0px 0px",
                                            }}
                                        ></span>
                                        <img
                                            alt="user image"
                                            src="assets/img/team2.jpg"
                                            decoding="async"
                                            data-nimg="responsive"
                                            style={{
                                                position: "absolute",
                                                inset: "0px",
                                                "box-sizing": "border-box",
                                                padding: "0px",
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: "0px",
                                                height: "0px",
                                                "min-width": "100%",
                                                "max-width": "100%",
                                                "min-height": "100%",
                                                "max-height": "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                                <h5 className="mb-0 text-white text-[19px] font-[600]">Emma Watson</h5>
                                <p className="mb-2 text-body">
                                    <small>Client - Envato.com</small>
                                </p>
                                <div className="review-stars mb-3">
                                    <div
                                        className="star-ratings"
                                        title="4.2 Stars"
                                        style={{
                                            position: "relative",
                                            "box-sizing": "border-box",
                                            display: "inline-block",
                                        }}
                                    >
                                        <svg
                                            className="star-grad"
                                            style={{
                                                position: "absolute",
                                                "z-index": "0",
                                                width: "0px",
                                                height: "0px",
                                                visibility: "hidden",
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="starGrad272527516232957"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="100%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Working with Bieber is very good experience for me. He’s
                                    a good person. If I need developer in future, I’ll
                                    definately hire him.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review card mt-11 p-4 md:p-5">
                                <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
                                    <span
                                        style={{
                                            "box-sizing": "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: "1",
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                "box-sizing": "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: "1",
                                                border: "0px",
                                                margin: "0px",
                                                padding: "100% 0px 0px",
                                            }}
                                        ></span>
                                        <img
                                            alt="user image"
                                            src="assets/img/team3.jpg"
                                            decoding="async"
                                            data-nimg="responsive"
                                            style={{
                                                position: "absolute",
                                                inset: "0px",
                                                "box-sizing": "border-box",
                                                padding: "0px",
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: "0px",
                                                height: "0px",
                                                "min-width": "100%",
                                                "max-width": "100%",
                                                "min-height": "100%",
                                                "max-height": "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                                <h5 className="mb-0 text-white text-[19px] font-[600]">Emma Watson</h5>
                                <p className="mb-2 text-body">
                                    <small>Client - Envato.com</small>
                                </p>
                                <div className="review-stars mb-3">
                                    <div
                                        className="star-ratings"
                                        title="4.2 Stars"
                                        style={{
                                            position: "relative",
                                            "box-sizing": "border-box",
                                            display: "inline-block",
                                        }}
                                    >
                                        <svg
                                            className="star-grad"
                                            style={{
                                                position: "absolute",
                                                "z-index": "0",
                                                width: "0px",
                                                height: "0px",
                                                visibility: "hidden",
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="starGrad272527516232957"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="100%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Working with Bieber is very good experience for me. He’s
                                    a good person. If I need developer in future, I’ll
                                    definately hire him.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review card mt-11 p-4 md:p-5">
                                <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
                                    <span
                                        style={{
                                            "box-sizing": "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: "1",
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                "box-sizing": "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: "1",
                                                border: "0px",
                                                margin: "0px",
                                                padding: "100% 0px 0px",
                                            }}
                                        ></span>
                                        <img
                                            alt="user image"
                                            src="assets/img/team4.jpg"
                                            decoding="async"
                                            data-nimg="responsive"
                                            style={{
                                                position: "absolute",
                                                inset: "0px",
                                                "box-sizing": "border-box",
                                                padding: "0px",
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: "0px",
                                                height: "0px",
                                                "min-width": "100%",
                                                "max-width": "100%",
                                                "min-height": "100%",
                                                "max-height": "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                                <h5 className="mb-0 text-white text-[19px] font-[600]">Emma Watson</h5>
                                <p className="mb-2 text-body">
                                    <small>Client - Envato.com</small>
                                </p>
                                <div className="review-stars mb-3">
                                    <div
                                        className="star-ratings"
                                        title="4.2 Stars"
                                        style={{
                                            position: "relative",
                                            "box-sizing": "border-box",
                                            display: "inline-block",
                                        }}
                                    >
                                        <svg
                                            className="star-grad"
                                            style={{
                                                position: "absolute",
                                                "z-index": "0",
                                                width: "0px",
                                                height: "0px",
                                                visibility: "hidden",
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="starGrad272527516232957"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="100%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Working with Bieber is very good experience for me. He’s
                                    a good person. If I need developer in future, I’ll
                                    definately hire him.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="review card mt-11 p-4 md:p-5">
                                <div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
                                    <span
                                        style={{
                                            "box-sizing": "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: "1",
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                        }}
                                    >
                                        <span
                                            style={{
                                                "box-sizing": "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: "1",
                                                border: "0px",
                                                margin: "0px",
                                                padding: "100% 0px 0px",
                                            }}
                                        ></span>
                                        <img
                                            alt="user image"
                                            src="assets/img/team2.jpg"
                                            decoding="async"
                                            data-nimg="responsive"
                                            style={{
                                                position: "absolute",
                                                inset: "0px",
                                                "box-sizing": "border-box",
                                                padding: "0px",
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: "0px",
                                                height: "0px",
                                                "min-width": "100%",
                                                "max-width": "100%",
                                                "min-height": "100%",
                                                "max-height": "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                                <h5 className="mb-0 text-white text-[19px] font-[600]">Emma Watson</h5>
                                <p className="mb-2 text-body">
                                    <small>Client - Envato.com</small>
                                </p>
                                <div className="review-stars mb-3">
                                    <div
                                        className="star-ratings"
                                        title="4.2 Stars"
                                        style={{
                                            position: "relative",
                                            "box-sizing": "border-box",
                                            display: "inline-block",
                                        }}
                                    >
                                        <svg
                                            className="star-grad"
                                            style={{
                                                position: "absolute",
                                                "z-index": "0",
                                                width: "0px",
                                                height: "0px",
                                                visibility: "hidden",
                                            }}
                                        >
                                            <defs>
                                                <linearGradient
                                                    id="starGrad272527516232957"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-first"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="0%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                    <stop
                                                        offset="100%"
                                                        className="stop-color-final"
                                                        style={{
                                                            "stop-color": "rgb(255, 210, 51)",
                                                            "stop-opacity": "1",
                                                        }}
                                                    ></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                        <div
                                            className="star-container"
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                                "padding-left": "2px",
                                                "padding-right": "2px",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 51 48"
                                                className="widget-svg"
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    transition: "transform 0.2s ease-in-out 0s",
                                                }}
                                            >
                                                <path
                                                    className="star"
                                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                    style={{
                                                        fill: "rgb(255, 210, 51)",
                                                        transition: "fill 0.2s ease-in-out 0s",
                                                    }}
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    Working with Bieber is very good experience for me. He’s
                                    a good person. If I need developer in future, I’ll
                                    definately hire him.
                                </p>
                            </div>
                        </SwiperSlide>
                        <button className="swiper-button-prev"></button>
                        <button className="swiper-button-next"></button>
                    </div>
                </Swiper>
            </div>
        </div >
    );
};

export default Testimonials;
