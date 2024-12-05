import React from 'react';
import Image from 'next/image';
import styles from './end-banner.module.css';

export const EndBanner = () => {
	return (
		<section className={styles['end-banner-wrapper']}>
			<div className='container'>
				<div className={styles['end-banner']}>
					<h2 className={styles['title']}>
						Еще ждешь? <br /> А сделки нет!
					</h2>
					<p className={styles['subtitle']}>
						Стань лушчим агентом по недвижимости в мире!
					</p>
					<a href='#tariffs' className={styles['btn']}>
						Выбрать курс!
					</a>
					<div className={styles['img-wrapper']}>
						<Image src='/end-banner.png' alt='Еще ждешь? А сделки нет!' fill />
					</div>
				</div>
			</div>
		</section>
	);
};
