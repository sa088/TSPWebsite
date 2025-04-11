import React from "react";
import styles from "./StatsSection.module.scss";
import { ArrowRight } from "lucide-react";

const StatsSection = ({ title, buttonText, stats }) => {
    return (
        <div className={styles.statsContainer}>
            <div className={styles.content}>
                <h2 className={styles.statsTitle}>{title}</h2>
                <button className={styles.statsButton}>
                    {buttonText}
                    <ArrowRight size={18} />
                </button>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;