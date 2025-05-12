import React from "react";
import styles from "./ExcellenceCard.module.scss";

const ExcellenceCard = ({ image, years, text, isExpanded, onHover }) => {
    return (
        <div
            className={`${styles.excellenceCard} ${isExpanded ? styles.expanded : ""}`}
            onMouseEnter={onHover}
        >
            <img src={image} alt="Excellence" />
            {isExpanded && (
                <div className={styles.cardOverlay}>
                    <p className="text-[18px] md:text-[22px] font-[700]">{years}</p>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default ExcellenceCard;