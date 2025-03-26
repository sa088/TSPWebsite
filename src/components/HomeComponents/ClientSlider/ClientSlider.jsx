import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ClientSlider.module.scss";

import ClientImg01 from "../../../assets/images/HomeImgs/ClientImg01.svg";
import ClientImg02 from "../../../assets/images/HomeImgs/ClientImg02.svg";

const logos = [ClientImg01, ClientImg02];

const ClientSlider = () => {
    const settings = {
        infinite: true,
        speed: 7000, // Faster speed for better smoothness
        slidesToShow: 8,
        slidesToScroll: 8, // Moves 6 logos at a time for smooth effect
        autoplay: true,
        autoplaySpeed: 0, // Continuous scrolling
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 5, slidesToScroll: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 2 } },
        ],
    };

    // Duplicate logos 6 times for infinite smooth effect
    const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <div className={styles.clientsSlider}>
            <p className={styles.clientHeading}>Trusted by 500+ Clients</p>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {repeatedLogos.map((logo, index) => (
                        <div key={index} className={styles.clientLogo}>
                            <img src={logo} alt="Client Logo" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientSlider;