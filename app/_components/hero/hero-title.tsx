'use client'

import {animate, motion, useMotionValue, useTransform} from 'framer-motion'
import styles from "@/app/_components/hero/title.module.css";
import CursorBlinker from "@/app/_components/hero/blinker";
import {useEffect} from "react";

const baseText = "Научись зарабатывать \n на коммерческой недвижимости"

export default function HeroTitle() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            duration: 6,
            ease: "easeOut",
        });
        return controls.stop;
    }, []);

    return (
        <div className={styles['title-wrapper']}>
            <h1 className={styles.title}>
                <motion.span>
                    {displayText}
                </motion.span>
                <CursorBlinker/>
            </h1>
        </div>
    )
}