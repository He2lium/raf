'use client'

import {animate, motion, useMotionValue, useTransform} from 'framer-motion'
import styles from "@/app/_components/hero/title.module.css";
import CursorBlinker from "@/app/_components/hero/blinker";
import {useEffect} from "react";

function HeroIcon() {
    return (
        <svg className={styles['title-icon']} viewBox="0 0 339 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle initial={{opacity: 0, cx: 169.5}} animate={{cx: 43.5, opacity: 1, transition: {delay: 0.5}}} cy="43.5" r="43" stroke="#1187F6" />
            <motion.circle initial={{opacity: 0, cx: 169.5}} animate={{cx: 106.5, opacity: 1, transition: {delay: 0.5}}} cy="43.5" r="43" stroke="#1187F6" />
            <motion.circle initial={{opacity: 0}} animate={{opacity: 1}} cx="169.5" cy="43.5" r="43.5" fill="#212121" />
            <path
                d="M164.5 51.1667H168V44.0985L163.333 40.0297L158.667 44.0985V51.1667H162.167V46.5H164.5V51.1667ZM178.5 53.5H157.5C156.856 53.5 156.333 52.9777 156.333 52.3333V43.5679C156.333 43.2308 156.479 42.91 156.733 42.6885L161 38.9684V33.6667C161 33.0223 161.523 32.5 162.167 32.5H178.5C179.145 32.5 179.667 33.0223 179.667 33.6667V52.3333C179.667 52.9777 179.145 53.5 178.5 53.5ZM172.667 41.8333V44.1667H175V41.8333H172.667ZM172.667 46.5V48.8333H175V46.5H172.667ZM172.667 37.1667V39.5H175V37.1667H172.667ZM168 37.1667V39.5H170.333V37.1667H168Z"
                fill="white"/>
            <motion.circle initial={{opacity: 0, cx: 169.5}} animate={{cx: 232.5, opacity: 1, transition: {delay: 0.5}}} cy="43.5" r="43" stroke="#1187F6" />
            <motion.circle initial={{opacity: 0, cx: 169.5}} animate={{cx: 295.5, opacity: 1, transition: {delay: 0.5}}} cy="43.5" r="43" stroke="#1187F6" />
        </svg>

    )
}

const baseText = "Научись зарабатывать \n на коммерческой недвижимости"

export default function HeroTitle() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            delay: 0.5,
            duration: 3.5,
            ease: "easeOut",
        });
        return controls.stop;
    }, []);

    return (
        <div className={styles['title-wrapper']}>
            <h1 className={styles.title}>
                <HeroIcon />
                <motion.span>
                    {displayText}
                </motion.span>
                <CursorBlinker/>
            </h1>
        </div>
    )
}