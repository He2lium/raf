'use client'

import audit from '@/public/audit.png'
import styles from './audit.module.css';
import {MotionImage} from "@/app/_components/motion-image/motion-image";

export const Audit = () => {
    return (
        <section className={styles['audit-wrapper']}>
            <div className={`container ${styles['container']}`}>
                <div className={styles.audit} id={'for-who'}>
                    <div className={styles['img-wrapper']}>
                        <MotionImage
                            src={audit}
                            alt='audit'
                            animate={{rotate: [3, -3, 3]}}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className='title-1'>Кому подойдет?</h2>
                        <div className={styles.variants}>
                            <p className={styles.var}>Риелторам</p>
                            <p className={`${styles.var} ${styles.active}`}>
                                Тем, кто ищет себя
                            </p>
                            <p className={styles.var}>Кто в поисках работы “Развитологом”</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
