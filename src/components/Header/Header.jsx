import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";
import TSPActualLogo from "../../assets/logos/TSPActualLogo.svg";
import TSPWhiteLogo from "../../assets/logos/TSPWhiteLogo.svg";
import { servicesData, solutionsData } from "@/data/headerData";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef(null);

    const handleContactClick = () => {
        setMobileMenuOpen(false);
        navigate("/contact");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    // Reset mobile menu state on location change
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    const toggleMobileSubmenu = (menu) => {
        setMobileSubmenuOpen(mobileSubmenuOpen === menu ? null : menu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setMobileMenuOpen(false);
                setMobileSubmenuOpen(null);
            } else {
                setActiveDropdown(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeDropdown &&
                !event.target.closest(`.${styles.dropdownContainer}`) &&
                !event.target.closest(`.${styles.megaMenu}`)
            ) {
                setActiveDropdown(null);
            }

            if (
                mobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest(`.${styles.mobileMenuToggle}`)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeDropdown, mobileMenuOpen]);

    const handleServiceNav = (categoryTitle, serviceItem) => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileSubmenuOpen(null);

        // Create a URL-friendly slug: replace spaces and slashes with "-"
        const sanitizeSlug = (str) => str.toLowerCase().replace(/[\s/]+/g, "-");

        const categorySlug = sanitizeSlug(categoryTitle);
        const serviceSlug = sanitizeSlug(serviceItem);
        navigate(`/services/${categorySlug}/${serviceSlug}`);
    };

    const handleSolutionNav = (solutionName) => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileSubmenuOpen(null);

        const solutionSlug = solutionName.toLowerCase().replace(/\s+/g, "-");
        navigate(`/solutions/${solutionSlug}`);
    };

    const headerClass = `
        ${styles.header} 
        ${isScrolled || location.pathname !== "/" ? styles.scrolled : ""} 
        ${activeDropdown ? styles.dropdownActive : ""}
        ${mobileMenuOpen ? styles.mobileMenuActive : ""}
    `;

    return (
        <>
            <header className={headerClass}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img
                            src={
                                (location.pathname !== "/" &&
                                    !activeDropdown &&
                                    !mobileMenuOpen) ||
                                    (isScrolled && !activeDropdown && !mobileMenuOpen)
                                    ? TSPActualLogo
                                    : TSPWhiteLogo
                            }
                            alt="Company Logo"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    <Link to="/">Company</Link>
                    <div className={styles.dropdownContainer}>
                        <button
                            className={styles.dropdownButton}
                            onClick={() => toggleDropdown("services")}
                        >
                            Services
                            <FaChevronDown
                                className={`${styles.dropdownIcon} ${activeDropdown === "services" ? styles.rotate : ""
                                    }`}
                            />
                        </button>
                    </div>
                    <div className={styles.dropdownContainer}>
                        <button
                            className={styles.dropdownButton}
                            onClick={() => toggleDropdown("solutions")}
                        >
                            Solutions
                            <FaChevronDown
                                className={`${styles.dropdownIcon} ${activeDropdown === "solutions" ? styles.rotate : ""
                                    }`}
                            />
                        </button>
                    </div>
                    <Link to="/digital-marketing">Digital Marketing</Link>
                    <Link to="/careers">Join TSP</Link>
                    <button className={styles.contactButton} onClick={handleContactClick}>
                        <div className={styles.contactButtonWrapper}>
                            Contact Us <FaArrowRight size={30} className={styles.arrowIcon} />
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileMenuToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Mobile Navigation Menu */}
            <div
                className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
                ref={menuRef}
            >
                <nav className={styles.mobileNav}>
                    <Link to="/" className={styles.mobileNavLink}>
                        Company
                    </Link>

                    <div className={styles.mobileDropdown}>
                        <button
                            className={styles.mobileDropdownToggle}
                            onClick={() => toggleMobileSubmenu("services")}
                        >
                            Services
                            <FaChevronDown
                                className={`${styles.mobileDropdownIcon} ${mobileSubmenuOpen === "services" ? styles.rotate : ""}`}
                            />
                        </button>

                        {mobileSubmenuOpen === "services" && (
                            <div className={styles.mobileSubmenu}>
                                {servicesData.map((category, index) => (
                                    <div key={index} className={styles.mobileCategory}>
                                        <div className={styles.mobileCategoryHeader}>
                                            <img
                                                src={category.icon}
                                                alt={category.title}
                                                className={styles.mobileCategoryIcon}
                                            />
                                            <h3 className={styles.mobileCategoryTitle}>
                                                {category.title}
                                            </h3>
                                        </div>
                                        <ul className={styles.mobileServicesList}>
                                            {category.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <button
                                                        className={styles.mobileServiceLink}
                                                        onClick={() =>
                                                            handleServiceNav(category.title, item)
                                                        }
                                                    >
                                                        {item}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.mobileDropdown}>
                        <button
                            className={styles.mobileDropdownToggle}
                            onClick={() => toggleMobileSubmenu("solutions")}
                        >
                            Solutions
                            <FaChevronDown
                                className={`${styles.mobileDropdownIcon} ${mobileSubmenuOpen === "solutions" ? styles.rotate : ""}`}
                            />
                        </button>

                        {mobileSubmenuOpen === "solutions" && (
                            <div className={styles.mobileSubmenu}>
                                <h3 className={styles.mobileSolutionsTitle}>
                                    {solutionsData.title}
                                </h3>
                                <div className={styles.mobileSolutionsGrid}>
                                    {solutionsData.options.map((solution, index) => (
                                        <button
                                            key={index}
                                            className={styles.mobileSolutionPill}
                                            onClick={() => handleSolutionNav(solution)}
                                        >
                                            {solution}
                                        </button>
                                    ))}
                                </div>
                                <div className={styles.mobileFeaturedProducts}>
                                    <h4 className={styles.mobileFeaturedTitle}>
                                        View Our Featured Products
                                    </h4>
                                    <div className={styles.mobileFeaturedImageContainer}>
                                        <img
                                            src={solutionsData.featuredImage}
                                            alt="Featured Products"
                                            className={styles.mobileFeaturedImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/digital-marketing" className={styles.mobileNavLink}>
                        Digital Marketing
                    </Link>
                    <Link to="/careers" className={styles.mobileNavLink}>
                        Join TSP
                    </Link>

                    <button
                        className={styles.mobileContactButton}
                        onClick={handleContactClick}
                    >
                        Contact Us <FaArrowRight className={styles.mobileArrowIcon} />
                    </button>
                </nav>
            </div>

            {/* Desktop Megamenu Dropdown for Services */}
            {!mobileMenuOpen && activeDropdown === "services" && (
                <div className={styles.megaMenu}>
                    <div className={styles.megaMenuContainer}>
                        {servicesData.map((category, index) => (
                            <div key={index} className={styles.megaMenuCategory}>
                                <div className={styles.categoryHeader}>
                                    <div className={styles.iconContainer}>
                                        <img src={category.icon} alt={category.title} />
                                    </div>
                                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                                </div>
                                <ul>
                                    {category.items.map((item, idx) => (
                                        <li key={idx}>
                                            <button
                                                className={styles.serviceLink}
                                                onClick={() => handleServiceNav(category.title, item)}
                                            >
                                                {item}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Megamenu Dropdown for Solutions */}
            {!mobileMenuOpen && activeDropdown === "solutions" && (
                <div className={styles.megaMenu}>
                    <div className={styles.solutionsContainer}>
                        <h3 className={styles.solutionsTitle}>{solutionsData.title}</h3>
                        <div className={styles.solutionsRow}>
                            {solutionsData.options.map((solution, index) => (
                                <button
                                    key={index}
                                    className={styles.solutionPill}
                                    onClick={() => handleSolutionNav(solution)}
                                >
                                    {solution}
                                </button>
                            ))}
                        </div>
                        <div className={styles.featuredProducts}>
                            <h4 className={styles.featuredTitle}>
                                View Our Featured Products
                            </h4>
                            <div className={styles.featuredImageContainer}>
                                <img
                                    src={solutionsData.featuredImage}
                                    alt="Featured Products"
                                    className={styles.featuredImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;