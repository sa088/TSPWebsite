import React from "react";
import styles from "./TechStackSection.module.scss";

const TechStackSection = ({ title, description, techLogos }) => {
    return (
        <div className={styles.techStackContainer}>
            <div className="text-center mb-10">
                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-[600] mb-4">
                    {title}
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[22px] font-[600] text-[#4A4A4A]">
                    {description}
                </p>
            </div>

            <div className={styles.techGridContainer}>
                {techLogos.map(logo => (
                    <div className={styles.techLogoCard} key={logo.id} id={`tech-card-${logo.id}`}>
                        <img src={logo.src} alt={logo.alt} className={styles.techLogo} id={`tech-logo-${logo.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackSection;