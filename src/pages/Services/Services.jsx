import React, { useEffect, useState } from "react";
import styles from "./Services.module.scss";
import HeroSection from "@/components/ServicesComponents/HeroSection/HeroSection";
import InfoBlocksSection from "@/components/ServicesComponents/InfoBlocksSection/InfoBlocksSection";
import StatsSection from "@/components/ServicesComponents/StatsSection/StatsSection";
import { servicesData } from "@/data/servicesData";
import { useParams } from "react-router-dom";
import ProcessStepsSection from "@/components/ServicesComponents/ProcessStepsSection/ProcessStepsSection";
import TechStackSection from "@/components/ServicesComponents/TechStackSection/TechStackSection";

const Services = () => {
    const { category, service } = useParams();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const slugToCamelCase = (slug) => {
            return slug
                .replace(/&/g, "")
                .replace(/\s+/g, "")
                .split("-")
                .map((word, index) =>
                    index === 0
                        ? word.toLowerCase()
                        : word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join("");
        };
        const dataKey = slugToCamelCase(service);
        setPageData(servicesData[dataKey] || servicesData.webDevelopment);
    }, [service]);

    const slugToReadableText = (slug) => {
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
            .replace("E Commerce", "E-commerce");
    };

    const categoryName = slugToReadableText(category);

    if (!pageData) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

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
            <ProcessStepsSection
                title={pageData.processStepsSection.title}
                description={pageData.processStepsSection.description}
                steps={pageData.processStepsSection.blocks}
            />
            <TechStackSection
                title={pageData.techStackSection.title}
                description={pageData.techStackSection.description}
                techLogos={pageData.techStackSection.techLogos}
            />
            <StatsSection />
        </div>
    );
};

export default Services;