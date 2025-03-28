import React, { useState } from "react";
import styles from "./ExcellenceGallery.module.scss";
import ExcellenceCard from "./ExcellenceCard/ExcellenceCard";
import ExcellenceImg01 from "../../../assets/images/HomeImgs/ExcellenceImg01.svg";
import ExcellenceImg02 from "../../../assets/images/HomeImgs/ExcellenceImg02.svg";
import ExcellenceImg03 from "../../../assets/images/HomeImgs/ExcellenceImg03.svg";
import ExcellenceImg04 from "../../../assets/images/HomeImgs/ExcellenceImg04.svg";
import ExcellenceImg05 from "../../../assets/images/HomeImgs/ExcellenceImg05.svg";

const images = [
    { src: ExcellenceImg01, text: "10+ Years of experience in social media marketing" },
    { src: ExcellenceImg02, text: "10+ Years of experience in social media marketing" },
    { src: ExcellenceImg03, text: "10+ Years of experience in social media marketing" },
    { src: ExcellenceImg04, text: "10+ Years of experience in social media marketing" },
    { src: ExcellenceImg05, text: "10+ Years of experience in social media marketing" },
];

const ExcellenceGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.excellenceContainer}>
            <div className="text-center pb-8">
                <h2 className="text-[#0F4C8F] text-[32px] font-[700]">Our Excellence</h2>
            </div>
            <div className={styles.galleryWrapper} onMouseLeave={() => setActiveIndex(0)}>
                {images.map((item, index) => (
                    <ExcellenceCard
                        key={index}
                        image={item.src}
                        text={item.text}
                        isExpanded={index === activeIndex}
                        onHover={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExcellenceGallery;