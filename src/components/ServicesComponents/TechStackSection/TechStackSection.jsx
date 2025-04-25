import React from "react";
import styles from "./TechStackSection.module.scss";
import AngularIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon01-Angular.svg";
import VueIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon02-Vue.svg";
import JavaIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon03-Java.svg";
import AWSIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon04-AWS.svg";
import JSIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon05-JS.svg";
import FigmaIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon06-Figma.svg";
import ReactIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon07-React.svg";
import FlutterIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon08-Flutter.svg";
import HTML5Icon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon09-HTML5.svg";
import GithubIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon10-Github.svg";
import KubernetesIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon11-Kubernetes.svg";
import LaravelIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon12-Laravel.svg";
import DockerIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon13-Docker.svg";
import MongodbIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon14-Mongodb.svg";
import ElementUIIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon15-ElementUI.svg";
import NodejsIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon16-Nodejs.svg";
import AzureIcon from "../../../assets/images/ServicesSolutionsImgs/TechStackIcons/Icon17-Azure.svg";

const techLogos = [
    { id: 1, src: AngularIcon, alt: "Angular" },
    { id: 2, src: VueIcon, alt: "Vue.js" },
    { id: 3, src: JavaIcon, alt: "Java" },
    { id: 4, src: AWSIcon, alt: "AWS" },
    { id: 5, src: JSIcon, alt: "JavaScript" },
    { id: 6, src: FigmaIcon, alt: "Figma" },
    { id: 7, src: ReactIcon, alt: "React" },
    { id: 8, src: FlutterIcon, alt: "Flutter" },
    { id: 9, src: HTML5Icon, alt: "HTML5" },
    { id: 10, src: GithubIcon, alt: "GitHub" },
    { id: 11, src: KubernetesIcon, alt: "Kubernetes" },
    { id: 12, src: AzureIcon, alt: "Azure" },
    { id: 13, src: LaravelIcon, alt: "Laravel" },
    { id: 14, src: NodejsIcon, alt: "Node.js" },
    { id: 15, src: DockerIcon, alt: "Docker" },
    { id: 16, src: MongodbIcon, alt: "MongoDB" },
    { id: 17, src: ElementUIIcon, alt: "ElementUI" }
];

const TechStackSection = () => {
    return (
        <div className={styles.techStackContainer}>
            <div className="text-center mb-10">
                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-[600] mb-4">
                    Technology Stack for Product Development
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[22px] font-[600] text-[#4A4A4A]">
                    Our product development process is powered by a comprehensive
                    technology stack—featuring the latest tools, frameworks, and
                    programming languages. These technologies enable us to build scalable,
                    secure, and high-performing products. Discover the stack we leverage
                    below
                </p>
            </div>

            <div className={styles.techGridContainer}>
                {techLogos.map(logo => (
                    <div className={styles.techLogoCard} key={logo.id} id={`tech-card-${logo.id}`}>
                        <img src={logo.src} alt={logo.alt} className={styles.techLogo} id={`tech-logo-${logo.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackSection;