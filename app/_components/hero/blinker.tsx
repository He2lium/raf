'use client'

import {motion, Variants} from "framer-motion";
import styles from './blinker.module.css'

const cursorVariants: Variants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

export default function CursorBlinker() {
    return (
        <motion.span
            variants={cursorVariants}
            animate="blinking"
            className={styles.blinker}
        />
    );
}
