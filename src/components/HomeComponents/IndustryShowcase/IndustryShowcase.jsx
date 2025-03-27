import React from "react";
import { Button } from "@/components/ui/button";
import styles from "./IndustryShowcase.module.scss";
import IndustryIcon from "../../../assets/images/HomeImgs/IndustryIcon.svg";
import { cn } from "@/lib/utils";

const industries = [
    { id: 1, top: "12%", left: "11%" },
    { id: 2, top: "18%", left: "25%" },
    { id: 3, top: "38%", left: "2%" },
    { id: 4, top: "78%", left: "22%" },
    { id: 5, top: "82%", left: "64%" },
    { id: 6, top: "65%", left: "75%" },
    { id: 7, top: "28%", left: "94%" },
    { id: 8, top: "22%", left: "82%" },
];

const IndustryShowcase = () => {
    return (
        <section className={cn(styles.industryShowcase, "container mx-auto")}>
            <div className={styles.industryContent}>
                <p className={styles.sectionHeading}>Driving Digital Success Across Industries</p>
                <p className={styles.sectiontext}>
                    At TechSolutions Pro, we specialize in delivering cutting-edge digital
                    marketing and custom software development solutions. With a proven
                    track record of helping businesses grow, we cater to enterprises of
                    all sizes, from startups to industry leaders.
                </p>
                <p className={styles.sectiontext}>
                    Our expertise spans various industries, including E-commerce, Finance,
                    Healthcare, Education, Real Estate, Retail, Travel, Entertainment, and
                    more.
                </p>
                <Button className={styles.discoverButton}>Discover Our Work</Button>
            </div>

            <div className={styles.industryIcons}>
                {industries.map((industry) => (
                    <div
                        key={industry.id}
                        className={styles.industryIcon}
                        style={{ top: industry.top, left: industry.left }}
                    >
                        <img src={IndustryIcon} alt={`Industry Icon ${industry.id}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustryShowcase;