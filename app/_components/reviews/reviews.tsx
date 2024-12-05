import React from 'react';
import Image from 'next/image';
import styles from './reviews.module.css';

const reviews = [
	{
		id: 1,
		name: 'Иван С.',
		avatar: '/avatarka-1.png',
		role: 'Риэлтор',
		rating: '5.0',
		desc: 'Прошел курс',
		type: 'Коммерческая недвижимость',
		text: 'Я очень доволен курсом! Материал преподносится доступно и интересно, а игровой процесс делает обучение очень увлекательным. Получил много новых знаний и уже применил их на практике. Рекомендую всем!"',
	},
	{
		id: 2,
		name: 'Екатерина К.',
		avatar: '/avatarka-2.png',
		role: 'Риэлтор',
		rating: '5.0',
		desc: 'Прошла курс',
		type: 'Коммерческая недвижимость',
		text: 'Благодаря этому курсу я освоила новую профессию и теперь уверенно чувствую себя в новой роли. Сертификат, полученный после завершения обучения, стал отличным дополнением к моему резюме. Спасибо за возможность получить качественное образование!',
	},
	{
		id: 3,
		name: 'Алексей М.',
		avatar: '/avatarka-3.png',
		role: 'Риэлтор',
		rating: '5.0',
		desc: 'Прошел курс',
		type: 'Коммерческая недвижимость',
		text: 'Отличная платформа для онлайн-обучения! Очень нравится, что можно учиться в удобном темпе, а служба поддержки всегда готова помочь с любым вопросом. Я рекомендую эту платформу всем, кто хочет получить новые знания и навыки!',
	},
];

export const Reviews = () => {
	return (
		<section className={styles['reviews-wrapper']}>
			<div className='container'>
				<div className={styles['reviews']}>
					<h2 className='title-1'>Отзывы</h2>
					<div className={styles['cards']}>
						{reviews.map((review) => (
							<article key={review.id} className={styles['card']}>
								<header className={styles['card-header']}>
									<div className={styles['card-avatar']}>
										<Image src={review.avatar} alt='name' fill />
									</div>
									<div className={styles['card-info']}>
										<h5 className={styles['card-name']}>{review.name}</h5>
										<p className={styles['card-role']}>{review.role}</p>
										<div className={styles['card-rating']}>
											{review.rating}{' '}
											<Image
												src={'/star.svg'}
												alt='star'
												width={30}
												height={30}
											/>
										</div>
									</div>
								</header>
								<main className={styles['card-action']}>
									<p className={styles['card-desc']}>{review.desc}</p>
									<a href='#!' className={styles['card-link']}>
										{review.type}
									</a>
								</main>
								<p className={styles['card-text']}>{review.text}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
