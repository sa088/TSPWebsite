import React, { useState } from "react";
import styles from "./HeroSection.module.scss";
import { cn } from "@/lib/utils";
import GeneralButton from "@/components/common/GeneralButton/GeneralButton";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const HeroSection = ({ category, title, description }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample blog data
    const blogs = [
        {
            badge: "Blog",
            title: "Unlocking the Power of Custom Product Development",
            content:
                "Custom product development enables businesses to create solutions tailored to specific market needs.",
        },
        {
            badge: "Blog",
            title: "5 Key Strategies for Successful Product Launches",
            content:
                "Learn the essential steps to ensure your product launch meets market expectations and business goals.",
        },
        {
            badge: "Blog",
            title: "How User Research Drives Innovation",
            content:
                "Discover how gathering user insights can transform your product development process.",
        },
    ];

    const totalSlides = blogs.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    return (
        <div
            className={cn(
                styles.heroContainer,
                "w-full flex flex-col lg:flex-row gap-12"
            )}
        >
            <div className={cn(styles.leftPanel, "lg:w-2/3")}>
                <div className={styles.badge}>
                    <span>{category}</span>
                </div>
                <h1 className={styles.title}>{title}</h1>
                <div className="ps-6">
                    <p className={styles.description}>{description}</p>
                    <GeneralButton label="Let’s Innovate Together" />
                </div>
            </div>

            <div className={cn(styles.rightPanel, "lg:w-1/3")}>
                <div className={styles.slidesDetailCard}>
                    <div className={styles.cardBadge}>{blogs[currentSlide].badge}</div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{blogs[currentSlide].title}</h2>
                        <p className={styles.cardText}>{blogs[currentSlide].content}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        {/* Dots */}
                        <div className="flex space-x-2">
                            {blogs.map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-[#0F4C8F]" : "bg-[#FFFFFF]"
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                ></span>
                            ))}
                        </div>
                        {/* Arrows */}
                        <div className="flex gap-2">
                            {currentSlide !== 0 && (
                                <button onClick={prevSlide} className="cursor-pointer">
                                    <FiArrowLeftCircle size={32} color="#FFFFFF" />
                                </button>
                            )}
                            {currentSlide !== totalSlides - 1 && (
                                <button onClick={nextSlide} className="cursor-pointer">
                                    <FiArrowRightCircle size={32} color="#FFFFFF" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;