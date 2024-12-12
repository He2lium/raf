import React from 'react';
import Image from 'next/image';

import styles from './intro.module.css';

export const Intro = () => {
    return (
        <section className={styles.intro}>
            <h3 className='title-2'>Как работает Сдам Продам?</h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Image
                        src='/icons/person.svg'
                        alt='person'
                        width={24}
                        height={24}
                    />
                    <h5 className={styles['card-title']}>Личный кабинет на СП</h5>
                </div>
                <div className={styles.card}>
                    <Image src='/icons/crm.svg' alt='crm' width={24} height={24}/>
                    <h5 className={styles['card-title']}>
                        У вас своя независимая CRM система
                    </h5>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/icons/discount.svg'
                        alt='discount'
                        width={24}
                        height={24}
                    />
                    <h5 className={styles['card-title']}>
                        50 бесплатных объявлений на СП
                    </h5>
                </div>
                <div className={styles.card}>
                    <Image
                        src='/icons/check-2.svg'
                        alt='check-2'
                        width={24}
                        height={24}
                    />
                    <h5 className={styles['card-title']}>
                        Пространство для удобной работы
                    </h5>
                </div>
            </div>
        </section>
    );
};
