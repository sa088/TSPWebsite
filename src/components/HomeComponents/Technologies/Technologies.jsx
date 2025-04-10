import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReactIcon from "../../../assets/images/HomeImgs/ReactIcon.svg";
import JSIcon from "../../../assets/images/HomeImgs/JSIcon.svg";
import DotNetIcon from "../../../assets/images/HomeImgs/DotNetIcon.svg";

const Technologies = () => {
    const technologies = [
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

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const firstRowVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 10,
                bounce: 0.7
            }
        })
    };

    const secondRowVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 10,
                bounce: 0.7
            }
        })
    };

    return (
        <div className="text-center p-10 overflow-x-hidden">
            <h2 className="text-[#0F4C8F] text-[32px] font-[700] mb-3">
                Technologies
            </h2>
            <p className="text-[18px] font-[600] mb-10">
                We ensure high-quality products and maintain transparency throughout the
                development journey, making our clients an active part of the process.
            </p>

            <div className="max-w-[1540px] mx-auto">
                <motion.div
                    ref={ref}
                    className="grid grid-cols-5 gap-8 w-full"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {technologies.slice(0, 5).map((tech, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={firstRowVariants}
                            className="flex flex-col items-center justify-center bg-white rounded-[20px] shadow-[4px_4px_8px_-1px_rgba(0,0,0,0.25)] p-4 hover:shadow-[6px_6px_8px_-8px_rgba(0,0,0,0.25)] hover:scale-105 duration-100"
                        >
                            <div className="flex items-center justify-center mb-2">
                                <img
                                    src={tech.image}
                                    alt={`${tech.name} icon`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className="text-[18px] font-[500]">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-5 gap-8 w-full mt-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {technologies.slice(5).map((tech, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={secondRowVariants}
                            className="flex flex-col items-center justify-center bg-white rounded-[20px] shadow-[4px_4px_8px_-1px_rgba(0,0,0,0.25)] p-4 hover:shadow-[6px_6px_8px_-8px_rgba(0,0,0,0.25)] hover:scale-105 duration-100"
                        >
                            <div className="flex items-center justify-center mb-2">
                                <img
                                    src={tech.image}
                                    alt={`${tech.name} icon`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className="text-[18px] font-[500]">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;