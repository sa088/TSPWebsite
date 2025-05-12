import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const footerContactBox = {
    contactNumber: "+44 115 990 3394",
    email: "admin@techsolutionspro.co.uk",
    socialLinks: [
        {
            href: "https://www.linkedin.com/company/tech-solutions-pro/",
            Icon: FaLinkedinIn,
        },
        {
            href: "https://www.facebook.com/techsoltionspro?mibextid=ZbWKwL",
            Icon: FaFacebookF,
        },
        {
            href: "https://www.instagram.com/techsolutionspro.pk/",
            Icon: FaInstagram,
        },
        {
            href: "https://www.youtube.com/channel/UCBQSZ7nAkHEopSGCB26ZPDw/",
            Icon: FaYoutube,
        },
    ],
};

export const servicesLinks = {
    title: "Services",
    links: [
        { category: "Custom Development", name: "Web Development" },
        { category: "Custom Development", name: "Mobile App Development" },
        { category: "Creative Design Studio", name: "UI/UX Design" },
        { category: "Cloud & Automation", name: "AI & Machine Learning" },
        { category: "Cloud & Automation", name: "Cloud & DevOps" },
        { category: "Custom Development", name: "WordPress & CMS Development" },
        { category: "E-commerce & Online Stores", name: "Shopify & E-commerce Solutions" },
        { category: "Digital Growth & Strategy", name: "Digital Marketing" },
        { category: "Creative Design Studio", name: "Graphic Design" },
        { category: "Content & Communication", name: "Technical Content Writing" },
        { category: "Digital Growth & Strategy", name: "SEO Optimization" },
    ]
};

export const industries = {
    title: "Industry",
    links: [
        { name: "E-commerce" },
        { name: "Fintech" },
        { name: "Real Estate" },
        { name: "Healthcare" },
        { name: "Food & Grocery" },
        { name: "Education" }
    ]
};

export const companyLinks = {
    title: "Company",
    links: [
        { name: "About us", url: "#aboutus" },
        { name: "Portfolio", url: "#portfolio" },
        { name: "Blog", url: "#blog" },
        { name: "Careers", url: "#careers" },
        { name: "Contact Us", url: "#contactus" },
        { name: "Privacy Policies", url: "#policies" }
    ]
};
