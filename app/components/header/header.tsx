'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		document.body.classList.toggle('opened');
	};

	const handleMenuItemClick = () => {
		setIsOpen(false);
		document.body.classList.remove('opened');
	};

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (
			menuRef.current &&
			!(menuRef.current as HTMLElement).contains(event.target as Node)
		) {
			handleMenuItemClick();
		}
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	return (
		<header className={`${styles['header-wrapper']} header`} ref={menuRef}>
			<div className='container'>
				<div className={`${styles.header}`}>
					<nav className={styles.navbar}>
						<Link href='/' className={'logo'}>
							lOGO
						</Link>

						<ul className={`${styles.navmenu} ${isOpen ? styles.active : ''}`}>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
									Кому подойдет?
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
									Легкий старт
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
									Вопрос - ответ
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
									Программа курса
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
									Тарифы
								</Link>
							</li>
							<li className={styles.navitem}>
								<Link
									href='#!'
									className={styles.navlink}
									onClick={handleMenuItemClick}
								>
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
