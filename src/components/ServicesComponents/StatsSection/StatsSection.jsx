import React from "react";
import styles from "./StatsSection.module.scss";
import GeneralButton from "@/components/common/GeneralButton/GeneralButton";
import { useNavigate } from "react-router-dom";

const stats = {
    title: "Minimize development time while ensuring your product stands out",
    items: [
        {
            value: "15+",
            label: "Years of ultimate experience",
        },
        {
            value: "100+",
            label: "Digital Products Delivered",
        },
        {
            value: "80+",
            label: "Team of Experts",
        },
        {
            value: "96%",
            label: "Customer Satisfaction",
        },
    ],
};

const StatsSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    };

    return (
        <div className={styles.statsContainer}>
            <div className={styles.statsContent}>
                <p className={styles.statsTitle}>{stats.title}</p>
                <GeneralButton
                    label="Contact Us Now"
                    type="white"
                    onClick={handleContactClick}
                />
            </div>

            <div className={styles.statsGrid}>
                {stats.items.map((stat, index) => (
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