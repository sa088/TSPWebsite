import styles from "./DigitalMarketing.module.scss";
import { marketingData } from "@/data/marketingData";
import HeroSection from "@/components/DigitalMarketingComponents/HeroSection/HeroSection";
import ServicesSection from "@/components/DigitalMarketingComponents/ServicesSection/ServicesSection";
import WhyChooseUsSection from "@/components/DigitalMarketingComponents/WhyChooseUsSection/WhyChooseUsSection";

const DigitalMarketing = () => {
    return (
        <>
            <div className={styles.digitalMarketingContainer}>
                {/* Hero Section */}
                <HeroSection
                    tag={marketingData.hero.tag}
                    title={marketingData.hero.title}
                    description={marketingData.hero.description}
                    sideInfo={marketingData.heroSideInfo}
                />

                {/* Services Section */}
                <div className="mt-10 md:mt-12">
                    <ServicesSection servicesData={marketingData.servicesData} />
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className={styles.chooseUsWrapper}>
                <WhyChooseUsSection sliderData={marketingData.sliderData} />
            </div>
        </>
    );
};

export default DigitalMarketing;