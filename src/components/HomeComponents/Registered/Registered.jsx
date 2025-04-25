import React from "react";
import styles from "./Registered.module.scss";
import { bottomLogos, registeredHeader, topLogos } from "@/data/homeData";

const Registered = () => {
    return (
        <div className={styles.registrationSection}>
            <div className={styles.registrationWrapper}>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#0F4C8F] mb-4">
                    {registeredHeader.title}
                </h2>
                <p className="text-[16px] lg:text-[18px] font-[600] mb-10 md:mb-15">
                    {registeredHeader.description}
                </p>
                <div className={styles.logosContainer}>
                    <div className="flex justify-evenly items-center gap-3 sm:gap-5 md:gap-10 w-full">
                        {topLogos.map((logo) => (
                            <div key={logo.id} className={styles.topLogoWrapper}>
                                <div className={styles.logoBox}>
                                    <img
                                        src={logo.icon}
                                        alt={logo.altText}
                                        className={styles.logoIcon}
                                    />
                                </div>
                                <div className={styles.verticalConnector}></div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.horizontalLine}></div>

                    <div className="flex justify-evenly items-center gap-3 sm:gap-5 md:gap-10 w-full">
                        {bottomLogos.map((logo) => (
                            <div key={logo.id} className={styles.bottomLogoWrapper}>
                                <div className={styles.logoBox}>
                                    <img
                                        src={logo.icon}
                                        alt={logo.altText}
                                        className={styles.logoIcon}
                                    />
                                </div>
                                <div className={styles.verticalConnector}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registered;