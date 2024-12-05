import React from 'react';
import Image from 'next/image';
import styles from './benefits.module.css';

export const Benefits = () => {
	return (
		<section className={styles['benefits-wrapper']}>
			<div className='container'>
				<div className={styles.intro}>
					<div className={styles['top']}>
						<div className={`${styles['row-1']}`}>
							<h2 className='title-1'>Бонусы к курсу</h2>
							<div className={styles.block}>
								<div className={styles['img-wrapper']}>
									<Image src='/cron.png' alt='црон' width={206} height={66} />
								</div>
								<h4 className={'title-3'}>
									Мы рады предоставить вам доступ к ЦРОН
								</h4>
							</div>
						</div>
						<div className={`${styles['row-2']}`}>
							<Image src='/benefits.png' alt='benefits' fill />
						</div>
					</div>
					<div className={styles.cards}>
						<div className={`${styles.card}`}>
							<h4 className={`title-3 ${styles['card-title']}`}>
								Личный кабинет на платформе «Сдам Продам»
							</h4>
							<div className={styles['img-wrapper']}>
								<Image
									src='/sdam-prodam.png'
									alt='сдам продам'
									width={201}
									height={35}
								/>
							</div>
							<p className={styles['card-text']}>
								Предоставляет доступ к обширной базе арендаторов, объектов
								недвижимости и всем сервисам площадки
							</p>
						</div>
						<div className={`${styles.card} ${styles['card-active']}`}>
							<Image
								src='/icons/users.svg'
								alt='пользователи'
								width={24}
								height={24}
							/>
							<h4 className={`title-3 ${styles['card-title']}`}>
								Рабочее место, техника, специалисты ЦРОН, первые заказы
							</h4>
						</div>
						<div className={`${styles.card} ${styles['card-active']}`}>
							<Image
								src='/icons/heart.svg'
								alt='сердце'
								width={24}
								height={24}
							/>
							<h4 className={`title-3 ${styles['card-title']}`}>
								Дружная <br /> команда и путь к успеху
							</h4>
						</div>
						<div className={`${styles.card}`}>
							<Image
								src='/icons/guard.svg'
								alt='сердце'
								width={24}
								height={24}
							/>
							<h4 className={`title-3 ${styles['card-title']}`}>
								Предложить свою кандидатуру в “Найм Агента” 
							</h4>
						</div>
						<div className={`${styles.card}`}>
							<Image
								src='/icons/docs.svg'
								alt='сердце'
								width={24}
								height={24}
							/>
							<h4 className={`title-3 ${styles['card-title']}`}>
								Юридическая помощь
							</h4>
							<p className={styles['card-text']}>
								Вопросы, касающиеся организации сделки. Готовые шаблоны всех типовых документов для закрытия сделки.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
