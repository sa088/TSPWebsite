import React from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";
import { companyLinks, footerContactBox, industries, servicesLinks } from "../../data/footerData";
import { cn } from "@/lib/utils";
import TSPWhiteLogo from "../../assets/logos/TSPWhiteLogo.svg";
import { Mail } from "lucide-react";
import { FiPhoneCall } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
// import ReactFlagsSelect from "react-flags-select";

const Footer = () => {
    const navigate = useNavigate();
    const totalStars = 5;
    const rating = 4.8;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars > 0 && rating - filledStars < 1;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    const [email, setEmail] = useState("");
    // const [selected, setSelected] = useState("GB");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        setEmail("");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleServiceNav = (serviceCategory, serviceTitle) => {
        if (serviceTitle === "Digital Marketing") {
            navigate("/digital-marketing");
            return;
        }
        const sanitizeSlug = (str) => str.toLowerCase().replace(/[\s/]+/g, "-");
        const categorySlug = sanitizeSlug(serviceCategory);
        const serviceSlug = sanitizeSlug(serviceTitle);
        navigate(`/services/${categorySlug}/${serviceSlug}`);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.scrollBtnContainer}>
                    <button onClick={scrollToTop} className={styles.scrollTopBtn}>
                        <IoIosArrowDropupCircle size={45} color="#FFFFFF" />
                    </button>
                </div>

                <div className="flex flex-col xl:flex-row justify-between gap-x-20 gap-y-10 mb-10">
                    {/* Contact Information */}
                    <div className={cn(styles.contactBox, "w-full xl:w-1/4 sm:min-w-[max-content]")}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}>
                                <FiPhoneCall size={20} />
                            </div>
                            <div className={styles.contactText}>
                                <p>Call Us</p>
                                <a href={`tel:${footerContactBox.contactNumber}`} className={styles.contactLink}>
                                    {footerContactBox.contactNumber}
                                </a>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}>
                                <Mail size={20} />
                            </div>
                            <div className={styles.contactText}>
                                <p>Email Us</p>
                                <a
                                    href={`mailto:${footerContactBox.email}`}
                                    className={styles.contactLink}
                                >
                                    {footerContactBox.email}
                                </a>
                            </div>
                        </div>

                        <div className={styles.googleRating}>
                            <FcGoogle size={40} />
                            <div className={styles.ratingInfo}>
                                <div className={styles.ratingText}>Google Rating</div>
                                <div className={styles.starRow}>
                                    <span className={styles.ratingNumber}>
                                        {rating.toFixed(1)}
                                    </span>
                                    {[...Array(filledStars)].map((_, i) => (
                                        <FaStar key={`full-${i}`} className={styles.starIcon} />
                                    ))}
                                    {hasHalfStar && <FaStarHalfAlt className={styles.starIcon} />}
                                    {[...Array(emptyStars)].map((_, i) => (
                                        <FaRegStar key={`empty-${i}`} className={styles.starIcon} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialsBox}>
                            <p className={styles.socialText}>Our Socials</p>
                            <div className={styles.socialIcons}>
                                {footerContactBox.socialLinks?.map((link, index) => {
                                    const IconComponent = link.Icon;
                                    return (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialIcon}
                                        >
                                            <IconComponent size={24} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="w-full xl:w-3/4 flex flex-col md:flex-row justify-between gap-5 md:gap-8 px-8 md:py-6">

                        {/* Services Section */}
                        <div className={styles.linkSection}>
                            <h3 className={styles.sectionTitle}>{servicesLinks.title}</h3>
                            <ul className={styles.linkList}>
                                {servicesLinks.links.map((link, index) => (
                                    <li key={index}>
                                        <button
                                            className={styles.serviceLink}
                                            onClick={() => handleServiceNav(link.category, link.name)}
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industry Section */}
                        <div className={styles.linkSection}>
                            <h3 className={styles.sectionTitle}>{industries.title}</h3>
                            <ul className={styles.linkList}>
                                {industries.links.map((link, index) => (
                                    <li key={index}>
                                        <span className={styles.industryNames}>{link.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div className={styles.linkSection}>
                            <h3 className={styles.sectionTitle}>{companyLinks.title}</h3>
                            <ul className={styles.linkList}>
                                {companyLinks.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} className={styles.serviceLink}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletterContainer}>
                    <h3 className={styles.newsletterTitle}>Newsletter Sign Up</h3>
                    <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email here..."
                            className={styles.newsletterInput}
                            required
                        />
                        <button type="submit" className={styles.submitBtn}>
                            Submit
                        </button>
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={TSPWhiteLogo} alt="Tech Solutions Pro Ltd" />
                        </Link>
                    </div>

                    <p className={styles.copyright}>
                        © 2025 Tech Solutions Pro • All Rights Reserved
                    </p>

                    {/* <div className={styles.flagsDropdownWrapper}>           // TODO: Hidden Currently
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            showSelectedLabel={false}
                            showOptionLabel={false}
                            countries={["GB", "PK", "FR", "DE", "ES", "IT", "JP", "CN", "US"]}
                            className={styles.flagDropdown}
                        />
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;