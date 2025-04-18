import React from "react";
import styles from "./AwardsCertifications.module.scss";

const AwardsCertifications = () => {
    return (
        <div className={styles.awardsWrapper}>
            <section className={styles.awardsSection}>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#0F4C8F] mb-4">
                    Awards & Certifications
                </h2>
                <p className="text-[16px] lg:text-[18px] font-[600]">
                    We ensure high-quality products and maintain transparency throughout
                    the development journey, making our clients an active part of the
                    process.
                </p>

                <div className={styles.connectorGrid}>
                    {/* Top Boxes */}
                    <div className={styles.topRow}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={styles.box}></div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className={styles.connectorLines}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className={styles.lineGroup}>
                                <div className={styles.blueDot}></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Boxes */}
                    <div className={styles.bottomRow}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className={styles.box}></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AwardsCertifications;