import React from 'react';
import Image from 'next/image';

import styles from './intro.module.css';

export const Intro = () => {
	return (
		<div className='container'>
			<section className={styles.intro}>
				<div className={styles['title-wrapper']}>
					<h3 className='title-2'>Как работает ЦРОН?</h3>
					<p>Центр реализации объектов недвижимости</p>
				</div>
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
						<Image src='/icons/crm.svg' alt='crm' width={24} height={24} />
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
							Рабочее пространство, где удобно работать
						</h5>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.call}>
						<h4 className={styles['call-title']}>
							Хотите стать экспертом в недвижимости? <br /> Запишитесь на наш
							курс!
						</h4>
						<div className={styles['button-wrapper']}>
							<a href='#tariffs' className={styles['call-button']}>
								Посмотреть тарифы
							</a>
							<div className={styles['smile-wrapper']}>
								<Image src='/hero-button.png' alt='smile' fill />
							</div>
						</div>
					</div>
					<div className={styles.image}>
						<Image src='/intro.png' alt='intro' width={254} height={320} />
					</div>
				</div>
			</section>
		</div>
	);
};
