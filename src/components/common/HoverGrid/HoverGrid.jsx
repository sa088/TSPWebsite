// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import styles from "./HoverGrid.module.scss";

// const HoverGrid = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const boxes = [
//         { id: 1, size: "large" },
//         { id: 2, size: "small" },
//         { id: 3, size: "medium" },
//         { id: 4, size: "small" },
//         { id: 5, size: "large" },
//         { id: 6, size: "medium" },
//     ];

//     return (
//         <div className={styles.container}>
//             {boxes.map((box, index) => (
//                 <motion.div
//                     key={box.id}
//                     className={`${styles.box} ${styles[box.size]}`}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     animate={{
//                         scale: hoveredIndex === index ? 1.5 : 1,
//                         opacity: hoveredIndex === index ? 1 : 0.7,
//                         transition: { duration: 0.3 },
//                     }}
//                     layout // Ensures smooth transition without layout shift
//                 />
//             ))}
//         </div>
//     );
// };

// export default HoverGrid;