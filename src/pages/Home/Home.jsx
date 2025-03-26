import React from "react";
import styles from "./Home.module.scss";
import ClientSlider from "../../components/HomeComponents/ClientSlider/ClientSlider";
import WhoWeAre from "../../components/HomeComponents/WhoWeAre/WhoWeAre";


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

                <div className={styles.whoWeAre}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.textContent}>
                            <h2>Who We Are</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <button className={styles.learnMoreBtn}>Get to Know Us</button>
                        </div>
                        <div className={styles.imageContent}>
                            <img src="/path/to/team-meeting-image.png" alt="Team Meeting" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;