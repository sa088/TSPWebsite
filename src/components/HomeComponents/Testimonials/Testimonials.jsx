import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.scss";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "Legacy Solutions Engineer",
        rating: 5.0,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: "/images/testimonial1.jpg",
    },
    {
        id: 2,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 5.0,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: "/images/testimonial2.jpg",
    },
    {
        id: 3,
        name: "Michael Smith",
        role: "Software Consultant",
        rating: 5.0,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: "/images/testimonial3.jpg",
    },
    {
        id: 4,
        name: "Sarah Johnson",
        role: "Project Manager",
        rating: 5.0,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: "/images/testimonial4.jpg",
    },
];

const Testimonials = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }, // Show 1 slide on smaller screens
        ],
    };

    return (
        <div className={styles.testimonialsSection}>
            
            <div className={styles.contentWrapper}>
                {/* Heading Section */}
                <div className={styles.heading}>
                    <h2>See what people say about Tech Solutions Pro</h2>
                    <p>
                        Discover what our clients have to say about their experience with
                        our services throughout the project. These customer reviews will
                        help you make an informed decision when choosing us over other
                        software development companies.
                    </p>
                </div>

                {/* Subheading */}
                <h3 className={styles.subHeading}>
                    Exceeding Expectations, Delivering Excellence
                </h3>

                {/* Testimonials Slider */}
                <Slider {...sliderSettings} className={styles.slider}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className={styles.profileImage}
                                    />
                                </div>
                                <div className={styles.textContent}>
                                    <div className={styles.rating}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={styles.starIcon} size={18} />
                                        ))}
                                        <span>{testimonial.rating} rating</span>
                                    </div>
                                    <p className={styles.reviewText}>{testimonial.review}</p>
                                    <div className={styles.clientInfo}>
                                        <p className={styles.clientName}>{testimonial.name}</p>
                                        <p className={styles.clientRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Google Rating Section */}
                <div className={styles.googleRating}>
                    <img
                        src="/images/google-logo.png"
                        alt="Google Rating"
                        className={styles.googleLogo}
                    />
                    <div className={styles.ratingInfo}>
                        <div className={styles.starRow}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={styles.starIcon} size={20} />
                            ))}
                            <span>4.8</span>
                        </div>
                        <a href="#" className={styles.viewReviews}>
                            See all our reviews
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;