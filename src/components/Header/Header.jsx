import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import styles from "./Header.module.scss";
import TSPActualLogo from "../../assets/logos/TSPActualLogo.svg";
import TSPWhiteLogo from "../../assets/logos/TSPWhiteLogo.svg";
import StrategyIcon from "../../assets/images/HeaderImgs/ServicesIcon01.svg";
import SoftwareIcon from "../../assets/images/HeaderImgs/ServicesIcon02.svg";
import PerformanceIcon from "../../assets/images/HeaderImgs/ServicesIcon03.svg";
import AIIcon from "../../assets/images/HeaderImgs/ServicesIcon04.svg";
import BusinessIcon from "../../assets/images/HeaderImgs/ServicesIcon05.svg";
import EngagementIcon from "../../assets/images/HeaderImgs/ServicesIcon06.svg";
import SolutionsViewImg from "../../assets/images/HeaderImgs/SolutionsViewImg.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown && !event.target.closest(`.${styles.dropdownContainer}`) && !event.target.closest(`.${styles.megaMenu}`)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    // Function to handle navigation to service detail page
    const handleServiceNav = (categoryTitle, serviceItem) => {
        // Close dropdown
        setActiveDropdown(null);

        // Create a URL-friendly slug for both category and service
        const categorySlug = categoryTitle.toLowerCase().replace(/\s+/g, '-');
        const serviceSlug = serviceItem.toLowerCase().replace(/\s+/g, '-');

        // Navigate to the service-specific page with slugs as parameters
        navigate(`/services/${categorySlug}/${serviceSlug}`);
    };

    // Function to handle navigation to solution page
    const handleSolutionNav = (solutionName) => {
        // Close dropdown
        setActiveDropdown(null);

        // Create a URL-friendly slug for the solution
        const solutionSlug = solutionName.toLowerCase().replace(/\s+/g, '-');

        // Navigate to the solution-specific page
        navigate(`/solutions/${solutionSlug}`);
    };

    const servicesData = [
        {
            title: "Strategic Guidance",
            icon: StrategyIcon,
            items: [
                "Ideation & Discovery",
                "Market Analysis",
                "Strategic Product Planning",
                "UI/UX Design"
            ]
        },
        {
            title: "Software Engineering & Development",
            icon: SoftwareIcon,
            items: [
                "Custom Product Development",
                "End-to-End App Development",
                "Application Modernization",
                "AI Software Development",
                "Cloud Engineering"
            ]
        },
        {
            title: "Performance optimization",
            icon: PerformanceIcon,
            items: [
                "Software Assessment",
                "Quality Assurance",
                "Support & Maintenance"
            ]
        },
        {
            title: "AI Solutions & Innovations",
            icon: AIIcon,
            items: [
                "Generative AI",
                "Machine Learning",
                "Chatbots & Voice Assistants",
                "AI PoC & MVP"
            ]
        },
        {
            title: "Business Solutions",
            icon: BusinessIcon,
            items: [
                "Financial Management Solutions",
                "Talent Acquisition & HR Solutions",
                "Brand Promotion & Digital Strategy"
            ]
        },
        {
            title: "Engagement Models",
            icon: EngagementIcon,
            items: [
                "Dedicated Team",
                "Global Development Hub",
                "Fixed Price Projects"
            ]
        },
    ];

    // Updated solutions data to match the design
    const solutionsData = {
        title: "Solutions",
        options: [
            "Work Force Management",
            "MS Dynamics 365",
            "ERP Next",
            "Salesforce",
            "Shopify",
            "Work Force Management",
            "MS Dynamics 365",
            "ERP Next",
            "Salesforce",
            "Shopify",
            "Work Force Management",
            "MS Dynamics 365",
            "ERP Next",
            "Salesforce",
            "Shopify",
        ],
        featuredImage: SolutionsViewImg,
    };

    return (
        <>
            <header className={`${styles.header} ${(isScrolled || location.pathname !== "/") ? styles.scrolled : ""} ${activeDropdown ? styles.dropdownActive : ""}`}>
                <div className={styles.logo}>
                    <img src={((location.pathname !== "/" && !activeDropdown) || (isScrolled && !activeDropdown)) ? TSPActualLogo : TSPWhiteLogo} alt="Company Logo" />
                </div>
                <nav className={styles.nav}>
                    <Link to="/">Company</Link>
                    <div className={styles.dropdownContainer}>
                        <button
                            className={styles.dropdownButton}
                            onClick={() => toggleDropdown('services')}
                        >
                            Services
                            <FaChevronDown className={`${styles.dropdownIcon} ${activeDropdown === 'services' ? styles.rotate : ''}`} />
                        </button>
                    </div>
                    <div className={styles.dropdownContainer}>
                        <button
                            className={styles.dropdownButton}
                            onClick={() => toggleDropdown('solutions')}
                        >
                            Solutions
                            <FaChevronDown className={`${styles.dropdownIcon} ${activeDropdown === 'solutions' ? styles.rotate : ''}`} />
                        </button>
                    </div>
                    <Link to="/digital-marketing">Digital Marketing</Link>
                    <Link to="/join">Join TSP</Link>
                    <button className={styles.contactButton}>
                        <div className={styles.contactButtonWrapper}>
                            Contact Us <FaArrowRight size={30} className={styles.arrowIcon} />
                        </div>
                    </button>
                </nav>
            </header>

            {/* Megamenu Dropdown for Services */}
            {activeDropdown === 'services' && (
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

            {/* Megamenu Dropdown for Solutions */}
            {activeDropdown === 'solutions' && (
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
                            <h4 className={styles.featuredTitle}>View Our Featured Products</h4>
                            <div className={styles.featuredImageContainer}>
                                <img src={solutionsData.featuredImage} alt="Featured Products" className={styles.featuredImage} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;