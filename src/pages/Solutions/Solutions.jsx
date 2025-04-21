import React, { useEffect, useState } from "react";
import styles from "./Solutions.module.scss";
import HeroSection from "@/components/SolutionsComponents/HeroSection/HeroSection";
import InfoBlocksSection from "@/components/SolutionsComponents/InfoBlocksSection/InfoBlocksSection";
import StatsSection from "@/components/SolutionsComponents/StatsSection/StatsSection";
import { solutionsData } from "@/data/solutionsData";
import { useParams } from "react-router-dom";

const Solutions = () => {
    const { solution } = useParams();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const slugToCamelCase = (slug) => {
            return slug
                .split("-")
                .map((word, index) =>
                    index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join("");
        };
        const dataKey = slugToCamelCase(solution);
        setPageData(solutionsData[dataKey] || solutionsData.msDynamics365);
    }, [solution]);

    if (!pageData) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    };

    return (
        <div className={styles.solutionsContainer}>
            <HeroSection
                category={"Solutions"}
                title={pageData.hero.title}
                description={pageData.hero.description}
                sideInfo={pageData.sideInfo}
            />
            <div className={styles.infoSectionContainer}>
                <h2 className="text-center text-[20px] md:text-[24px] lg:text-[28px] font-[600] text-[#1E1E1E] mb-6 md:mb-8">
                    {pageData.infoSection.title}
                </h2>
                <InfoBlocksSection blocks={pageData.infoSection.blocks} />
            </div>
            <StatsSection title={pageData.stats.title} stats={pageData.stats.items} />
        </div>
    );
};

export default Solutions;