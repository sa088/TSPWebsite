import React, { useState } from "react";
import styles from "./ServicesGrid.module.scss";
import { Button } from "@/components/ui/button";
import { servicesGrid, servicesHeader } from "@/data/homeData";

const ServicesGrid = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className={styles.servicesContainer}>
            <div className="max-w-[1540px] mx-auto">
                <h2 className="text-[#0F4C8F] text-[24px] md:text-[28px] lg:text-[32px] font-[700] mb-3">
                    {servicesHeader.title}
                </h2>
                <p className="text-[16px] lg:text-[18px] font-[600] mb-3">
                    {servicesHeader.description}
                </p>
            </div>
            <div className={styles.gridContainer}>
                {servicesGrid.map((service) => (
                    <div
                        key={service.id}
                        className={`${styles.card} ${hoveredCard === service.id ? styles.hovered : ""}`}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <img src={service.image} alt={service.title} />
                        <div className={styles.overlay}>
                            <div className={styles.overlayTitle}>{service.title}</div>
                        </div>
                        <div className={styles.hoverContent}>
                            <h3 className={styles.hoverTitle}>{service.title}</h3>
                            <p className={styles.hoverDescription}>{service.description}</p>
                            <Button className={styles.learnMoreBtn}>
                                Learn More
                                <span className={styles.customIcon}>
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <rect x="8" y="4" width="7" height="7" fill="currentColor" />
                                            <rect x="15" y="11" width="7" height="7" fill="currentColor" />
                                            <rect x="8" y="18" width="7" height="7" fill="currentColor" />
                                        </g>
                                    </svg>
                                </span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;