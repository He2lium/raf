import React from 'react';
import styles from './faq.module.css';

const faqs = [
	{
		id: 1,
		question: 'Какая  программа  курса?',
		answer: [
			'Вы можете выбрать один из 3-х видов курсов:  “Твой старт: Коммерческая недвижимость” , “Жилая недвижимость”,  “Мастер продаж”. ',
			'Можете приобрести любую программу на выбор или все сразу.',
		],
	},
	{
		id: 2,
		question: 'Сколько  длится  курс?',
		answer: [
			'У нас онлайн-обучение. Вы можете пройти его в своем ритме, в любое время дня и ночи, как экстренно, так и размеренно.',
		],
	},
	{
		id: 3,
		question: 'Какая  стоимость  курса?',
		answer: [
			'Стоимость  курса  зависит  от  программы. Мы  рекомендуем  посмотреть  цены  на  сайте  курса  или  связаться  с  организаторами  для  получения  информации.',
		],
	},
	{
		id: 4,
		question: 'Какие  требования  к  поступающим  на  курс?',
		answer: [
			'Как  правило,  нет  специальных  требований  к  поступающим.  Важно  иметь  желание  учиться,  быть  коммуникабельным  и  отвечать  за  свою  работу.',
		],
	},
	{
		id: 5,
		question: 'Какая  форма  обучения  предлагается?',
		answer: [
			'Обучение  проходит в онлайн  формате.  После оплаты Вам будет предоставлен доступ к платформе курса.',
		],
	},
	{
		id: 6,
		question: 'На какой срок будет предоставлен доступ к курсу?',
		answer: ['Курс предоставляется вам навсегда.'],
	},
	{
		id: 7,
		question: 'Какие  документы  я  получу  по  окончании  курса?',
		answer: [
			'По  окончании  курса  вы  получите именной сертификат  о  прохождении  обучения. ',
		],
	},
];

export const Faq = () => {
	return (
		<section className='container'>
			<div className={styles['faq']} id={'faq'}>
				<h2 className='title-1'>Вопрос - ответ</h2>
				<div className={styles['cols']}>
					<div className={styles['col-1']}>
						{faqs.map((faq) => (
							<details key={faq.id} className={styles['faq-item']}>
								<summary className={styles['faq-question']}>
									{faq.question}
								</summary>
								<div className={styles['faq-answer']}>
									{faq.answer.map((p) => (
										<p key={p}>{p}</p>
									))}
								</div>
							</details>
						))}
					</div>
					<div className={styles['col-2']}>
						<div className={styles['faq-info']}>
							<h3 className={styles['faq-title']}>Остались вопросы?</h3>
							<p className={styles['faq-desc']}>
								Задайте свой вопрос в чате, <br /> мы ответим в течение
								нескольких минут
							</p>
							<a href='#!' className={styles['faq-link']}>
								Задать вопрос
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
