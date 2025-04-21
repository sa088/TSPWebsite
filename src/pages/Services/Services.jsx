import React, { useEffect, useState } from "react";
import styles from "./Services.module.scss";
import HeroSection from "@/components/ServicesComponents/HeroSection/HeroSection";
import InfoBlocksSection from "@/components/ServicesComponents/InfoBlocksSection/InfoBlocksSection";
import StatsSection from "@/components/ServicesComponents/StatsSection/StatsSection";
import { servicesData } from "@/data/servicesData";
import { useParams } from "react-router-dom";

const Services = () => {
    const { category, service } = useParams();
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
        const dataKey = slugToCamelCase(service);
        setPageData(servicesData[dataKey] || servicesData.productDevelopment);
    }, [service]);

    const slugToReadableText = (slug) => {
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const categoryName = slugToReadableText(category);

    if (!pageData) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    };

    return (
        <div className={styles.servicesContainer}>
            <HeroSection
                category={categoryName}
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

export default Services;