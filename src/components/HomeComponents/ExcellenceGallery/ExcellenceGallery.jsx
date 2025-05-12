import React, { useState } from "react";
import styles from "./ExcellenceGallery.module.scss";
import ExcellenceCard from "./ExcellenceCard/ExcellenceCard";
import { excellenceGallery } from "@/data/homeData";

const ExcellenceGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.excellenceContainer}>
            <div className="text-center max-w-[1540px] mx-auto pb-6 md:pb-8">
                <h2 className="text-[#0F4C8F] text-[24px] md:text-[28px] lg:text-[32px] font-[700]">Our Excellence</h2>
            </div>
            <div className={styles.galleryWrapper} onMouseLeave={() => setActiveIndex(0)}>
                {excellenceGallery.map((item, index) => (
                    <ExcellenceCard
                        key={index}
                        image={item.src}
                        years={item.years}
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