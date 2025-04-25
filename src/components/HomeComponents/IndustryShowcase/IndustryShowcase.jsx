import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./IndustryShowcase.module.scss";
import { cn } from "@/lib/utils";
import { industriesIcons, industryShowcase } from "@/data/homeData";

const IndustryShowcase = () => {
    return (
        <section className={cn(styles.industryShowcase, "container mx-auto")}>
            <div className={styles.industryContent}>
                <p className={styles.sectionHeading}>{industryShowcase.heading}</p>
                <p className={styles.sectiontext}>{industryShowcase.description}</p>
                {/* <p className={styles.sectiontext}>
                    Our expertise spans various industries, including E-commerce, Finance,
                    Healthcare, Education, Real Estate, Retail, Travel, Entertainment, and
                    more.
                </p> */}
                <Button className={styles.discoverButton}>Discover Our Work</Button>
            </div>

            <div className={styles.industryIcons}>
                {industriesIcons.map((industry) => (
                    <div
                        key={industry.id}
                        className={styles.industryIcon}
                        style={{ top: industry.top, left: industry.left }}
                    >
                        <img src={industry.icon} alt={`Industry Icon ${industry.id}`} />
                        <p className={styles.industryTitle}>{industry.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustryShowcase;