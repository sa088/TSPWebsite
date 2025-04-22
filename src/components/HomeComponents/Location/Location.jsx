import React from "react";
import styles from "./Location.module.scss";
import { MapPin } from "lucide-react";
import MapImg from "../../../assets/images/HomeImgs/MapImg.svg";
import { locationHeader } from "@/data/homeData";

const Location = () => {
    return (
        <div className={styles.locationWrapper}>
            <section className={styles.locationSection}>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#0F4C8F] mb-4">
                    {locationHeader.title}
                </h2>
                <p className="text-[16px] lg:text-[18px] font-[600]">
                    {locationHeader.description}
                </p>

                <div className={styles.mapWrapper}>
                    <img src={MapImg} alt="World Map" className={styles.mapImage} />
                    <MapPin
                        className={`${styles.pin} ${styles.pin1}`}
                        color="green"
                    />
                    <MapPin
                        className={`${styles.pin} ${styles.pin2}`}
                        color="purple"
                    />
                </div>
            </section>
        </div>
    );
};

export default Location;