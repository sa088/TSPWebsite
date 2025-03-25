import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Header.module.scss";
import TSPActualLogo from "../../assets/logos/TSPActualLogo.svg";
import TSPWhiteLogo from "../../assets/logos/TSPWhiteLogo.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.logo}>
                <img src={isScrolled ? TSPActualLogo : TSPWhiteLogo} alt="Company Logo" />
            </div>
            <nav className={styles.nav}>
                <Link to="/">Company</Link>
                <Link to="/services">Services</Link>
                <Link to="/solutions">Solutions</Link>
                <Link to="/digital-marketing">Digital Marketing</Link>
                <Link to="/join">Join TSP</Link>
                <button className={styles.contactButton}>
                    <div className={styles.contactButtonWrapper}>
                        Contact Us <FaArrowRight size={30} className={styles.arrowIcon} />
                    </div>
                </button>
            </nav>
        </header>
    );
};

export default Header;