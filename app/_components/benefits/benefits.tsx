import React from 'react';
import Image from 'next/image';
import styles from './benefits.module.css';
import {Banner, Intro} from "@/app/_components";

export const Benefits = () => {
    return (
        <section className={styles['benefits-wrapper']}>
            <div className='container'>
                <div className={styles.intro}>
                    <div className={styles['top']}>
                        <h2 className='title-1'>Бонусы к курсу</h2>
                    </div>
                    <Banner/>
                    <Intro/>
                    <div className={`${styles.card}`}>
                        <div className={styles['flex']}>
                            <h4 className={`title-2 ${styles['card-title']}`}>
                                Личный кабинет<br/> на платформе «Сдам Продам»
                            </h4>
                            <div className={styles['img-wrapper']}>
                                <Image
                                    src='/sdam-prodam.png'
                                    alt='сдам продам'
                                    width={286}
                                    height={50}
                                />
                            </div>
                        </div>
                        <p className={styles['card-text']}>
                            Предоставляет доступ к обширной базе арендаторов,<br/> объектов недвижимости и всем сервисам площадки
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
