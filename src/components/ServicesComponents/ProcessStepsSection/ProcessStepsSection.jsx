import React, { useState, useEffect } from "react";
import styles from "./ProcessStepsSection.module.scss";
import ServicesProcessIcon from "../../../assets/images/ServicesSolutionsImgs/ServicesProcessIcon.svg";
import ServicesFlowCube01 from "../../../assets/images/ServicesSolutionsImgs/ServicesFlowCube01.svg";
import ServicesFlowCube02 from "../../../assets/images/ServicesSolutionsImgs/ServicesFlowCube02.svg";
import ServicesFlowCube03 from "../../../assets/images/ServicesSolutionsImgs/ServicesFlowCube03.svg";
import ServicesFlowCube04 from "../../../assets/images/ServicesSolutionsImgs/ServicesFlowCube04.svg";

const ProcessStepsSection = ({ title, description, steps }) => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % 4);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const flowSteps = [
        { id: 1, icon: ServicesFlowCube01 },
        { id: 2, icon: ServicesFlowCube02 },
        { id: 3, icon: ServicesFlowCube03 },
        { id: 4, icon: ServicesFlowCube04 },
    ];

    return (
        <div className={styles.processStepsContainer}>
            <div className="text-center mb-5 md:mb-10">
                <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-[600] mb-4">
                    {title}
                </h2>
                <p className="text-[16px] md:text-[18px] lg:text-[22px] font-[600] text-[#4A4A4A]">
                    {description}
                </p>
            </div>

            <div className="flex flex-col flex-nowrap gap-8 md:gap-10 overflow-x-auto p-5">
                <div className="flex gap-10 lg:gap-15">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${styles.stepContainer} ${index === activeStep ? styles.active : ""}`}
                            onMouseEnter={() => setActiveStep(index)}
                        >
                            <div className={styles.step}>
                                <div className={styles.iconContainer}>
                                    <img src={ServicesProcessIcon} alt="Services Process Icon" />
                                </div>
                                <h2 className="text-[18px] font-[600] mb-3">{step.title}</h2>
                                <p className="text-[14px] font-[500] text-[#4A4A4A]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.progressWrapper}>
                    {flowSteps.map((step, index) => (
                        <div
                            className={`${styles.stepItem} ${index === activeStep ? styles.active : ""}`}
                            key={step.id}
                            onMouseEnter={() => setActiveStep(index)}
                        >
                            <img
                                src={step.icon}
                                alt={`Step ${step.id}`}
                                className={styles.stepIcon}
                            />
                            {index !== flowSteps.length - 1 && (
                                <div className={styles.connector}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessStepsSection;