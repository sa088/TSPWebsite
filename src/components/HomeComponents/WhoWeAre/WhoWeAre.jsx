import React from "react";
import styles from "./WhoWeAre.module.scss";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhoWeAreImg from "../../../assets/images/HomeImgs/WhoWeAreImg.svg";
import HoverGrid from "@/components/common/HoverGrid/HoverGrid";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    };

    return (
        <section className={cn(styles.whoWeAre, "pt-10 pb-7 md:pt-15 md:pb-12")}>
            <div className="flex flex-col lg:flex-row gap-y-10">

                {/* Left Section (Image) */}
                <div className={cn(styles.imageContainer, "w-full lg:w-1/4")}>
                    <img src={WhoWeAreImg} alt="Team Meeting Img" className="w-full" />
                </div>

                {/* Right Section (Text) */}
                <div className={cn(styles.textContainer, "w-full lg:w-2/4 pb-5 pe-5 lg:px-10")}>
                    <div>
                        <p className={styles.sectionTitle}>Who We Are</p>
                    </div>
                    <div>
                        <h2 className="text-[#388ECA]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </h2>
                        <p className="mt-4 text-[12px] md:text-[14px] font-[500]">
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </p>
                        <Button className={styles.getToKnowbutton} onClick={handleContactClick}>
                            Get to Know Us
                            <span className={styles.customIcon}>
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="8" y="4" width="7" height="7" fill="currentColor" />
                                        <rect x="15" y="11" width="7" height="7" fill="currentColor" />
                                        <rect x="8" y="18" width="7" height="7" fill="currentColor" />
                                    </g>
                                </svg>
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Decorative Squares */}
                <div className="flex justify-center lg:justify-end px-5 lg:p-8 w-full lg:w-1/4">
                    <HoverGrid />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;