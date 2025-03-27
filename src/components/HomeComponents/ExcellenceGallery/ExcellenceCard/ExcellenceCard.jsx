import React from "react";
import styles from "./ExcellenceCard.module.scss";

const ExcellenceCard = ({ image, text, isExpanded, onHover }) => {
    return (
        <div
            className={`${styles.excellenceCard} ${isExpanded ? styles.expanded : ""}`}
            onMouseEnter={onHover}
        >
            <img src={image} alt="Excellence" />
            {isExpanded && (
                <div className={styles.cardOverlay}>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default ExcellenceCard;