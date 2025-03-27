import React from "react";
import styles from "./Home.module.scss";
import ClientSlider from "../../components/HomeComponents/ClientSlider/ClientSlider";
import WhoWeAre from "../../components/HomeComponents/WhoWeAre/WhoWeAre";
import IndustryShowcase from "@/components/HomeComponents/IndustryShowcase/IndustryShowcase";
import ExcellenceGallery from "@/components/HomeComponents/ExcellenceGallery/ExcellenceGallery";


const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroFrame}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            TechSolutions Pro is your trusted, full-service digital & software company.
                        </h1>
                        <p className={styles.heroSubtitle}>
                            From strategy to success, we power your growth.
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.scrollContent}>
                <div className="container mx-auto pt-28 pb-8 px-4 md:px-8">
                    <ClientSlider />
                    <WhoWeAre />
                </div>
                <div className={styles.discoverWrapper}>
                    <IndustryShowcase />
                </div>
                <ExcellenceGallery />

            </div>

        </div>
    );
};

export default Home;