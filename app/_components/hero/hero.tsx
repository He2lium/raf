'use client'

import Image from 'next/image';
import hero from '@/public/hero.png'

import {motion} from 'framer-motion';
import styles from './hero.module.css';
import HeroTitle from "@/app/_components/hero/hero-title";

export const Hero = () => {
    return (
        <div className='container'>
            <section className={styles.hero}>
                <HeroTitle/>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <div className={styles['blocks-sm']}>
                            <motion.div
                                className={`${styles.block} ${styles['block-sm']}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 5}}}
                            >
                                <svg
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M24.5898 2.04599C26.6071 1.78214 28.2696 3.44463 28.0057 5.46197C27.6201 8.41072 26.5612 13.4201 23.5668 16.6486C22.6141 17.6759 21.4633 18.625 20.2798 19.4683L20.6256 21.8889C20.723 22.5705 20.4937 23.2582 20.0069 23.745L16.0294 27.7225C14.7548 28.9972 12.572 28.2696 12.3171 26.4851L11.7867 22.7728L11.7883 22.7725C11.4497 22.6086 11.1356 22.3869 10.862 22.1133L7.93843 19.1897C7.66482 18.9161 7.44309 18.602 7.27915 18.2633L7.27892 18.265L3.56661 17.7347C1.78212 17.4797 1.05454 15.297 2.32917 14.0224L6.30664 10.0449C6.79351 9.55801 7.48119 9.32879 8.1628 9.42616L10.5834 9.77196C11.4267 8.58848 12.3758 7.43766 13.4031 6.48491C16.6317 3.49053 21.641 2.43165 24.5898 2.04599ZM5.42279 19.3256C5.7889 19.6917 5.78891 20.2853 5.42279 20.6515L3.65502 22.4192C3.2889 22.7853 2.69531 22.7853 2.32919 22.4192C1.96308 22.0531 1.96308 21.4595 2.32919 21.0934L4.09696 19.3256C4.46308 18.9595 5.05667 18.9595 5.42279 19.3256ZM8.07444 21.9773C8.44055 22.3434 8.44056 22.937 8.07444 23.3031L4.5389 26.8386C4.17279 27.2048 3.5792 27.2048 3.21308 26.8386C2.84696 26.4725 2.84696 25.8789 3.21308 25.5128L6.74861 21.9773C7.11473 21.6112 7.70832 21.6112 8.07444 21.9773ZM10.7261 24.6289C11.0922 24.995 11.0922 25.5886 10.7261 25.9548L8.95832 27.7225C8.5922 28.0886 7.99861 28.0886 7.6325 27.7225C7.26638 27.3564 7.26638 26.7628 7.6325 26.3967L9.40026 24.6289C9.76638 24.2628 10.36 24.2628 10.7261 24.6289ZM17.1338 12.9174C16.1575 11.9411 16.1575 10.3581 17.1338 9.38183C18.1102 8.40552 19.6931 8.40552 20.6694 9.38183C21.6457 10.3581 21.6457 11.9411 20.6694 12.9174C19.6931 13.8937 18.1102 13.8937 17.1338 12.9174Z'
                                        fill='currentColor'
                                    />
                                </svg>
                                <h4 className={styles['block-title']}>Быстро</h4>
                            </motion.div>
                            <motion.div
                                className={`${styles.block} ${styles['block-sm']}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 5.5}}}
                            >
                                <svg
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M1.5625 8.75C1.5625 4.78045 4.78045 1.5625 8.75 1.5625H21.25C25.2195 1.5625 28.4375 4.78045 28.4375 8.75V21.25C28.4375 25.2195 25.2195 28.4375 21.25 28.4375H8.75C4.78045 28.4375 1.5625 25.2195 1.5625 21.25V8.75ZM13.7121 17.5379C14.0782 17.904 14.6718 17.904 15.0379 17.5379L20.0379 12.5379C20.404 12.1718 20.404 11.5782 20.0379 11.2121C19.6718 10.846 19.0782 10.846 18.7121 11.2121L14.375 15.5492L12.5379 13.7121C12.1718 13.346 11.5782 13.346 11.2121 13.7121C10.846 14.0782 10.846 14.6718 11.2121 15.0379L13.7121 17.5379Z'
                                        fill='currentColor'
                                    />
                                </svg>

                                <h4 className={styles['block-title']}>Легко</h4>
                            </motion.div>
                            <motion.div
                                className={`${styles.block} ${styles['block-sm']}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 6}}}
                            >
                                <svg
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M8.74951 7.49992C5.29773 7.49992 2.49951 10.2981 2.49951 13.7499V21.2499C2.49951 24.7017 5.29773 27.4999 8.74951 27.4999H21.2495C24.5965 27.4999 27.329 24.869 27.4918 21.5624H21.8745C19.6308 21.5624 17.812 19.7436 17.812 17.4999C17.812 15.2563 19.6308 13.4374 21.8745 13.4374H27.4918C27.329 10.1308 24.5965 7.49992 21.2495 7.49992H8.74951ZM21.8745 15.3124H27.4995V19.6874H21.8745C20.6664 19.6874 19.687 18.708 19.687 17.4999C19.687 16.2918 20.6664 15.3124 21.8745 15.3124ZM7.4995 20.9374C6.98174 20.9374 6.562 21.3572 6.562 21.8749C6.562 22.3927 6.98174 22.8124 7.4995 22.8124H14.9995C15.5173 22.8124 15.937 22.3927 15.937 21.8749C15.937 21.3572 15.5173 20.9374 14.9995 20.9374H7.4995ZM21.8745 16.5624C21.3567 16.5624 20.937 16.9822 20.937 17.4999C20.937 18.0177 21.3567 18.4374 21.8745 18.4374H22.1245C22.6423 18.4374 23.062 18.0177 23.062 17.4999C23.062 16.9822 22.6423 16.5624 22.1245 16.5624H21.8745Z'
                                        fill='currentColor'
                                    />
                                    <path
                                        d='M24.3594 6.24115C23.458 3.75193 20.8253 2.14487 18.0513 2.716L7.30044 4.92941C5.05496 5.39172 3.23573 6.872 2.28418 8.82868C3.76851 6.8815 6.11241 5.62487 8.74982 5.62487H21.2498C22.3513 5.62487 23.4015 5.84404 24.3594 6.24115Z'
                                        fill='currentColor'
                                    />
                                </svg>

                                <h4 className={styles['block-title']}>В результат</h4>
                            </motion.div>
                        </div>
                        <motion.div
                            className={`${styles.block}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 5}}}
                        >
                            <p>
                                Наша команда стремится не просто передать вам теоретические
                                знания, а научить вас применять их на практике.
                            </p>
                            <p>
                                Мы начнем с того, что простым и понятным языком объясняем
                                основные понятия. А затем наглядно демонстрируем, как всё это
                                работает.
                            </p>
                            <p>
                                Если вы устали от жилой недвижимости - этот курс для Вас. Начните работать со
                                стабильными клиентами и понятными задачами. Больше никаких погружений в чужие проблемы,
                                только бизнес.
                            </p>
                            <div className={styles['button-wrapper']}>
                                <a href='#tariffs' className={styles.button}>
                                    Посмотреть тарифы
                                </a>
                                <Image
                                    src='/hero-button.png'
                                    alt='smile'
                                    width={60}
                                    height={66}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.column}>
                        <motion.div
                            className={`${styles.block} ${styles.image}`}
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 5}}}
                        >
                            <div className={styles['image-shadow']}>
                                <div/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
