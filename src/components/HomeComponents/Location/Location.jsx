import React from "react";
import styles from "./Location.module.scss";
import { MapPin } from "lucide-react";
import MapImg from "../../../assets/images/HomeImgs/MapImg.svg";

const Location = () => {
    return (
        <div className={styles.locationWrapper}>
            <section className={styles.locationSection}>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#0F4C8F] mb-4">
                    Our Location
                </h2>
                <p className="text-[16px] lg:text-[18px] font-[600]">
                    We ensure high-quality products and maintain transparency throughout
                    the development journey, making our clients an active part of the
                    process.
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