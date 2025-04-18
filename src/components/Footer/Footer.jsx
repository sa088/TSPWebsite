import React from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";
import { footerLinks } from "./footerData";
import { cn } from "@/lib/utils";
import ReactFlagsSelect from "react-flags-select";
import TSPWhiteLogo from "../../assets/logos/TSPWhiteLogo.svg";
import { Mail } from "lucide-react";
import { FiPhoneCall } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    const totalStars = 5;
    const rating = 4.8;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars > 0 && rating - filledStars < 1;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    const [email, setEmail] = useState("");
    const [selected, setSelected] = useState("GB");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        setEmail("");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                                <a href="tel:+449595554514" className={styles.contactLink}>
                                    +449595554514
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
                                    href="mailto:info@techsolutionspro.com"
                                    className={styles.contactLink}
                                >
                                    info@techsolutionspro.com
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
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                >
                                    <FaLinkedinIn size={24} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                >
                                    <FaFacebookF size={24} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="w-full xl:w-3/4 flex flex-col md:flex-row justify-between gap-5 md:gap-8 px-8 md:py-6">
                        {footerLinks.map((section) => (
                            <div key={section.title} className={styles.linkSection}>
                                <h3 className={styles.sectionTitle}>{section.title}</h3>
                                <ul className={styles.linkList}>
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
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

                    <div className={styles.flagsDropdownWrapper}>
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            showSelectedLabel={false}
                            showOptionLabel={false}
                            countries={["GB", "PK", "FR", "DE", "ES", "IT", "JP", "CN", "US"]}
                            className={styles.flagDropdown}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;