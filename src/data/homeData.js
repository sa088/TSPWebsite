// Client Slider Data
const images = import.meta.glob(
    "../assets/images/HomeImgs/ClientsLogoIcons/ClientImg*.svg",
    { eager: true }
);

export const clientLogos = Object.values(images).map((img) => img.default);

// Who We Are Section Data
import WhoWeAreImg from "../assets/images/HomeImgs/WhoWeAreImg.svg";

export const whoWeAre = {
    heading: "Who We Are",
    title: `Your Trusted Local Tech Partner For Modern Solutions.`,
    description: `Founded in 2019, Tech Solutions Pro has evolved into a powerhouse tech company. 
                With offices in Nottingham and Islamabad, our team of IT specialists, designers, and developers 
                devise cutting-edge solutions in web development and digital marketing. We amplify business growth and 
                secure success through pioneering technology, delivering measurable results with unwavering commitment.`,
    image: WhoWeAreImg,
};

// Industry Showcase Data
import HealthCareIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon01-HealthCare.svg";
import LawFirmsIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon02-LawFirms.svg";
import EcommerceIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon03-Ecommerce.svg";
import FoodIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon04-Food.svg";
import CooperateIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon05-Cooperate.svg";
import AutoMobileIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon06-AutoMobile.svg";
import EventIcon from "../assets/images/HomeImgs/IndustriesIcons/Icon07-Event.svg";

export const industryShowcase = {
    heading: "Driving Digital Success Across Industries",
    description: `We help industries flourish with powerful digital solutions. Whether it’s crafting 
                targeted ads to amplify sales, executing cost-effective marketing for stronger returns, or sculpting 
                dynamic WordPress sites, Shopify stores, and bespoke websites, we engineer solutions that command impact. 
                We prioritise real growth and stand poised to catapult your business ahead in the digital landscape.`,
};

export const industriesIcons = [
    { id: 1, top: "4%", left: "30%", icon: HealthCareIcon, title: "Health Care & Life Sciences" },
    { id: 2, top: "16%", left: "12%", icon: LawFirmsIcon, title: "Law Firms" },
    { id: 3, top: "44%", left: "6%", icon: EcommerceIcon, title: "E-commerce" },
    { id: 4, top: "78%", left: "22%", icon: FoodIcon, title: "Food industries" },
    { id: 5, top: "76%", left: "70%", icon: CooperateIcon, title: "Cooperate" },
    { id: 6, top: "52%", left: "82%", icon: AutoMobileIcon, title: "Auto Mobile Industry" },
    { id: 7, top: "14%", left: "78%", icon: EventIcon, title: "Event Management" },
];

// Excellence Gallery Data
import ExcellenceImg01 from "../assets/images/HomeImgs/ExcellenceImg01.svg";
import ExcellenceImg02 from "../assets/images/HomeImgs/ExcellenceImg02.svg";
import ExcellenceImg03 from "../assets/images/HomeImgs/ExcellenceImg03.svg";
import ExcellenceImg04 from "../assets/images/HomeImgs/ExcellenceImg04.svg";
import ExcellenceImg05 from "../assets/images/HomeImgs/ExcellenceImg05.svg";

export const excellenceGallery = [
    {
        src: ExcellenceImg01,
        text: "10+ Years of experience in social media marketing",
    },
    {
        src: ExcellenceImg02,
        text: "10+ Years of experience in social media marketing",
    },
    {
        src: ExcellenceImg03,
        text: "10+ Years of experience in social media marketing",
    },
    {
        src: ExcellenceImg04,
        text: "10+ Years of experience in social media marketing",
    },
    {
        src: ExcellenceImg05,
        text: "10+ Years of experience in social media marketing",
    },
];

// Services Grid Data
import DigitalMarketingImg from "../assets/images/HomeImgs/DigitalMarketingImg.svg";

export const servicesHeader = {
    title: `Our Services`,
    description: `For years, we have delivered personalised solutions, ensuring every project is carried 
                out with precision and excellence. We are committed to providing innovative and effective strategies 
                that drive success and help businesses grow.`,
};

export const servicesGrid = [
    {
        id: 1,
        title: "Digital Marketing",
        image: DigitalMarketingImg,
        description:
            "As digital specialists, we craft data-driven marketing strategies that elevate brand visibility, amplify engagement, and fuel higher conversions.",
    },
    {
        id: 2,
        title: "SEO",
        image: DigitalMarketingImg,
        description:
            "We fine-tune websites with cutting-edge SEO techniques, boosting rankings, driving organic traffic, and securing sustained digital dominance.",
    },
    {
        id: 3,
        title: "WordPress",
        image: DigitalMarketingImg,
        description:
            "As a trusted WordPress development company, we engineer responsive, high-performance websites with seamless functionality and intuitive user experiences.",
    },
    {
        id: 4,
        title: "Shopify",
        image: DigitalMarketingImg,
        description:
            "Our experts construct scalable, conversion-driven Shopify stores with bespoke designs, robust integrations, and optimised performance.",
    },
    {
        id: 5,
        title: "Content Writing",
        image: DigitalMarketingImg,
        description:
            "We produce compelling, SEO-optimised content tailored for websites, blogs, and marketing campaigns, reinforcing brand narratives and strengthening audience engagement.",
    },
    {
        id: 6,
        title: "App Development",
        image: DigitalMarketingImg,
        description:
            "As seasoned developers, we architect secure, high-calibre mobile and web applications tailored to meet precise business objectives.",
    },
    {
        id: 7,
        title: "Microservices",
        image: DigitalMarketingImg,
        description:
            "We craft and deploy scalable microservices architectures, ensuring agile, efficient, and independent service delivery for peak system performance.",
    },
    {
        id: 8,
        title: "Graphic Designing",
        image: DigitalMarketingImg,
        description:
            "Our creative experts curate striking graphic designs, spanning branding, UX/UI, and marketing materials, forging a bold and memorable visual presence.",
    },
];

// Technologies Data
import ReactIcon from "../assets/images/HomeImgs/ReactIcon.svg";
import JSIcon from "../assets/images/HomeImgs/JSIcon.svg";
import DotNetIcon from "../assets/images/HomeImgs/DotNetIcon.svg";

export const technologiesHeader = {
    title: `Technologies`,
    description: `At TechSolutionsPro, we harness a suite of advanced technologies to orchestrate projects 
                at every stage. Explore some of the key technologies we expertly deploy at TSP!`,
};

export const technologies = [
    { name: "React JS", image: ReactIcon },
    { name: "Java Script", image: JSIcon },
    { name: "Dot Net", image: DotNetIcon },
    { name: "Java Script", image: JSIcon },
    { name: "React JS", image: ReactIcon },
    { name: "React JS", image: ReactIcon },
    { name: "Java Script", image: JSIcon },
    { name: "Dot Net", image: DotNetIcon },
    { name: "Java Script", image: JSIcon },
    { name: "React JS", image: ReactIcon },
];

// Testimonials Data
import TestimonialImg01 from "../assets/images/HomeImgs/TestimonialImg01.png";

export const testimonialsHeader = {
    heading: `See what people say about Tech Solutions Pro`,
    description: `Discover what our clients have to say about their experience with our services 
                throughout the project. These customer reviews will help you make an informed decision 
                when choosing us over other software development companies.`,
    ratingText: `Exceeding Expectations, Delivering Excellence`,
};

export const testimonials = [
    {
        id: 1,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 4.5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 2,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 3,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 3.5,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        id: 4,
        image: TestimonialImg01,
        name: "Elisa Grant",
        role: "Legacy Solutions Engineer",
        rating: 4,
        review:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
];

// Awards & Certifications Data
export const awardsCertificationsHeader = {
    title: `Awards & Certifications`,
    description: `We uphold exceptional standards, delivering high-quality products while ensuring full 
                transparency. Our commitment to excellence makes our clients an integral part of the 
                development journey.`,
};

// Location Data
export const locationHeader = {
    title: `Our Location`,
    description: `We maintain unwavering quality and open communication at every step, fostering 
                collaboration and keeping our clients actively involved throughout the process.`,
};

// Registered Data
import PSEBIcon from "../assets/images/HomeImgs/RegisteredIcons/Icon01-PSEB.svg";
import SECPIcon from "../assets/images/HomeImgs/RegisteredIcons/Icon02-SECP.svg";
import DunBradstreetIcon from "../assets/images/HomeImgs/RegisteredIcons/Icon03-DunBradstreet.svg";
import ICCIIcon from "../assets/images/HomeImgs/RegisteredIcons/Icon04-ICCI.svg";
import FBRIcon from "../assets/images/HomeImgs/RegisteredIcons/Icon05-FBR.svg";

export const registeredHeader = {
    title: `Registered With`,
    description: `Proudly registered with multiple government authorities to ensure 
                compliance, transparency, and trust.`,
};

export const topLogos = [
    { id: "1", icon: PSEBIcon, altText: "PSEB Logo" },
    { id: "2", icon: SECPIcon, altText: "SECP Logo" },
    { id: "3", icon: DunBradstreetIcon, altText: "Dun and Bradstreet Logo" },
];

export const bottomLogos = [
    { id: "1", icon: ICCIIcon, altText: "ICCI Logo" },
    { id: "2", icon: FBRIcon, altText: "FBR Logo" },
];

// Project Inquiry Form Data
export const projectInquiryForm = {
    title: `Tell us about your project`,
    step01: `An expert will contact you after analyzing your requirments.`,
    step02: `An expert will contact you after analyzing your requirments.`,
    step03: `An expert will contact you after analyzing your requirments.`,
};
