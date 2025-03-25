import React from "react";
import styles from "./Home.module.scss";
import ClientImg01 from "../../assets/images/HomeImgs/ClientImg01.svg";
import ClientImg02 from "../../assets/images/HomeImgs/ClientImg02.svg";


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

            {/* <div className={styles.scrollContent}>
                <section className={styles.content}>
                    <h2>Trusted by 500+ Clients</h2>
                    <p>
                        Our clients include Pixel Events, Bello Food, Clipperz, Auto Max, and
                        more.
                    </p>
                </section>

                <section className={styles.content}>
                    <h2>Who We Are</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                </section>

                <section className={styles.content}>
                    <h2>Driving Digital Success Across Industries</h2>
                    <p>
                        At TechSolutions Pro, we specialize in delivering cutting-edge digital
                        marketing and custom software development solutions.
                    </p>
                </section>
            </div> */}

            <div className={styles.scrollContent}>
                <div className={styles.clientsSlider}>
                    <p className={styles.clientHeading}>Trusted by 500+ Clients</p>
                    <div className={styles.clientLogos}>
                        <img src={ClientImg01} alt="Clipperz" />
                        <img src={ClientImg02} alt="Auto Max" />
                        <img src={ClientImg01} alt="Pixel Events" />
                        <img src={ClientImg02} alt="Bello Food" />
                    </div>
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