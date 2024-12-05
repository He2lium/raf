import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <nav className={styles['footer']}>
                <Link href='/' className={'logo'}>
                    lOGO
                </Link>
                <ul className={styles['menu']}>
                    <li className={styles['item']}>
                        <Link href='#for-who' className={styles['link']}>
                            Кому подойдет?
                        </Link>
                    </li>
                    <li className={styles['item']}>
                        <Link href='#faq' className={styles['link']}>
                            Вопрос - ответ
                        </Link>
                    </li>
                    <li className={styles['item']}>
                        <Link href='#tariffs' className={styles['link']}>
                            Тарифы
                        </Link>
                    </li>
                    <li className={styles['item']}>
                        <Link href='#documents' className={styles['link']}>
                            Шаблоны договоров
                        </Link>
                    </li>
                    <li className={styles['item']}>
                        <Link href='#contacts' className={styles['link']}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};
