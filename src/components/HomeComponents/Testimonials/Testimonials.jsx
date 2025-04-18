import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./Testimonials.module.scss";
import GoogleRating from "./GoogleRating/GoogleRating";
import TestimonialImg01 from "../../../assets/images/HomeImgs/TestimonialImg01.png";

const testimonials = [
    {
        id: 1,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 4.5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 2,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 3,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 3.5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 4,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 4,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
];

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className={styles.starIcon} />);
    }
    if (hasHalf) {
        stars.push(<FaStarHalfAlt key="half" className={styles.starIcon} />);
    }
    while (stars.length < 5) {
        stars.push(
            <FaRegStar key={`empty-${stars.length}`} className={styles.starIcon} />
        );
    }

    return stars;
};

const Testimonials = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.testimonialsSection}>
            <div className={styles.contentWrapper}>
                {/* Heading Section */}
                <h2 className={styles.sectionHeading}>
                    See what people say about Tech Solutions Pro
                </h2>
                <p className={styles.sectionDescription}>
                    Discover what our clients have to say about their experience with our
                    services throughout the project. These customer reviews will help you
                    make an informed decision when choosing us over other software
                    development companies.
                </p>

                {/* Google Rating Section */}
                <div className={styles.ratingSection}>
                    <h3 className={styles.sectionText}>
                        Exceeding Expectations, delivering Excellence
                    </h3>
                    <GoogleRating rating={4.8} />
                </div>

                {/* Testimonials Slider */}
                <div className={styles.sliderWrapper}>
                    <Slider {...sliderSettings} className={styles.slider}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className={styles.slide}>
                                <div className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className={styles.profileImage}
                                        />
                                    </div>
                                    <div className={styles.textContent}>
                                        <div className={styles.rating}>
                                            {renderStars(testimonial.rating)}
                                            <span className={styles.ratingText}>
                                                {testimonial.rating.toFixed(1)} rating
                                            </span>
                                        </div>
                                        <p className={styles.reviewText}>"{testimonial.review}"</p>
                                        <div className={styles.clientInfo}>
                                            <p className={styles.clientName}>{testimonial.name}</p>
                                            <p className={styles.clientRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;