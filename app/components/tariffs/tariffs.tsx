import React from 'react';
import Image from 'next/image';

import styles from './tariffs.module.css';

export const Tariffs = () => {
	return (
		<section className='container'>
			<div className={styles['tariffs']}>
				<div className={styles['row-1']}>
					<h2 className='title-1'>Тарифы</h2>
					<div className={styles['modules-wrapper']}>
						<article className={styles['card']}>
							<p className={styles['card-subtitle']}>Твой старт</p>
							<h3 className={`${styles['card-title']} title-2`}>
								Коммерческая недвижимость
							</h3>
							<div className={styles['card-price']}>
								<a href='#' className={styles['card-btn']}>
									Купить
								</a>
								<div className={styles['card-prices']}>
									<span className={styles['card-old-price']}>49 378 ₽</span>
									<span className={styles['card-new-price']}>32 478 ₽</span>
								</div>
							</div>
						</article>
						<div className={styles['modules']}>
							<a
								href='#'
								className={`${styles['module']} ${styles['module-active']}`}
							>
								Модуль 1
							</a>
							<a href='#' className={styles['module']}>
								Модуль 2
							</a>
							<a href='#' className={styles['module']}>
								Модуль 3
							</a>
						</div>
					</div>
					<div className={styles['image-wrapper']}>
						<Image src='/tariffs.png' alt='tariffs' fill />
					</div>
				</div>
				<div className={styles['list']}>
					<div className={styles['list-col']}>
						<p>1.1. В чем отличие коммерческой недвижимости от жилой</p>
						<p>1.2. Виды коммерческой недвижимости. Классификация объектов</p>
						<p>1.3. Характеристики коммерческой недвижимости</p>
						<p>1.4. Назначение объектов по целевому использованию</p>
					</div>
					<div className={styles['list-col']}>
						<p>1.5. Составление фото/видео материалов (умение)</p>
						<p>
							1.6. Составление презентации на объект коммерческой недвижимости
							(умение)
						</p>
						<p>1.7. Размещение объекта на специализированных площадках</p>
					</div>
				</div>
			</div>
		</section>
	);
};
