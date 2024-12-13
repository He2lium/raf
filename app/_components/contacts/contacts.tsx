import Image from 'next/image';
import styles from './contacts.module.css';

export const Contacts = () => {
	return (
		<section className='container'>
			<div className={styles['contacts']} id={'contacts'}>
				<h2 className='title-1'>Контакты</h2>
				<div className={styles['info']}>
					<a className={styles['tel']} href='tel:+79281092221'>
						+7 928 109-22-21
					</a>
					<a className={`${styles['social']} ${styles['social-tg']}`} href='#!'>
						<Image src='/icons/tg.svg' alt='telegram' width={59} height={60} />
					</a>
					<a className={`${styles['social']} ${styles['social-wa']}`} href='#!'>
						<Image src='/icons/wa.svg' alt='whatsapp' width={59} height={60} />
					</a>
				</div>
			</div>
		</section>
	);
};
