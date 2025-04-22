import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ClientSlider.module.scss";
import { clientLogos } from "@/data/homeData";

const ClientSlider = () => {
    const settings = {
        infinite: true,
        speed: 7000, // Faster speed for better smoothness
        slidesToShow: 6,
        slidesToScroll: 6, // Moves 6 logos at a time for smooth effect
        autoplay: true,
        autoplaySpeed: 0, // Continuous scrolling
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 5, slidesToScroll: 5 } },
            { breakpoint: 1199, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            // { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
    };

    return (
        <div className={styles.clientsSlider}>
            <p className={styles.clientHeading}>Trusted by 500+ Clients</p>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {clientLogos.map((logo, index) => (
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