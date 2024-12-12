'use client'

import styles from "@/app/_components/intro/intro.module.css";
import Image from "next/image";

export default function FollowUp() {
    return (
        <div className={'container'}>
            <div className={styles.footer}>
                <div className={styles.call}>
                    <h4 className={styles['call-title']}>
                        Хотите стать экспертом в недвижимости? <br/> Запишитесь на наш
                        курс!
                    </h4>
                    <div className={styles['button-wrapper']}>
                        <a href='#tariffs' className={styles['call-button']}>
                            Посмотреть тарифы
                        </a>
                        <div className={styles['smile-wrapper']}>
                            <Image src='/hero-button.png' alt='smile' fill/>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src='/intro.png' alt='intro' width={254} height={320}/>
                </div>
            </div>
        </div>
    )
}