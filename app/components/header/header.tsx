'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.classList.toggle('opened');
	};
	return (
		<header className={`${styles['header-wrapper']} header`}>
			<div className='container'>
				<div className={`${styles.header}`}>
					<nav className={styles.navbar}>
						<Link href='/' className={'logo'}>
							lOGO
						</Link>

						<ul className={`${styles.navmenu} ${isOpen ? styles.active : ''}`}>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Кому подойдет?
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Легкий старт
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Вопрос - ответ
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Программа курса
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Тарифы
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link href='#!' className={styles.navlink}>
									Контакты
								</Link>
							</li>
						</ul>

						<button
							className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
							onClick={toggleMenu}
						>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
							<span className={styles.bar}></span>
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
};
