import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

export const Banner = () => {
	return (
		<section className={styles['banner-wrapper']}>
			<div className='container'>
				<div className={styles['banner']}>
					<h2 className={`title-3 ${styles['banner-title']}`}>
						Сдам Продам инновационный сервис для работы с недвижимостью
					</h2>
					<p className={styles['banner-subtitle']}>
						Площадка для поиска, продажи и аренды объектов недвижимости
					</p>
					<div className={styles['banner-discount']}>
						<a href='#' className={styles['banner-btn']}>
							Получить скидку
						</a>
						<p className={styles['banner-discount-text']}>
							Скидка 10% на подписку
						</p>
					</div>
					<Image
						className={styles['banner-img']}
						src='/banner.png'
						alt='сервис Сдам Продам'
						width={705}
						height={123}
					/>
				</div>
			</div>
		</section>
	);
};
