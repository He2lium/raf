import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import Image from "next/image";
import logo from "@/public/logo.png";

export const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <nav className={styles['footer']}>
                <Link href='/' className={'logo'}>
                    <Image src={logo} alt={'лого РАФ'} width={60} height={60}/>
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
                        <Link href='/contacts' className={styles['link']}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles['footer-documents']}>
                <div className={styles['footer-documents__col']}>
                    <a target={'_blank'} href={'/user-agreement.pdf'}>Пользовательское соглашение</a>
                    <a target={'_blank'} href={'/oferta.pdf'}>Публичная оферта</a>
                </div>
                <div className={styles['footer-documents__col']}>
                    <a target={'_blank'} href={'/privacy.pdf'}>Политика защиты персональных данных</a>
                    <a target={'_blank'} href={'/personal-data.pdf'}>Согласие на обработку персональных данных</a>
                </div>
            </div>
            <div className={styles['footer-appendix']}>
                <span>© Раф Знает, 2024</span>
                <a href={'https://reiterovich.online'} target={'_blank'}>Сайт разработан Reiterovich & Lab</a>
            </div>
        </footer>
    );
};
