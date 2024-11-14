import React from 'react';
import Image from 'next/image';

import styles from './audit.module.css';

export const Audit = () => {
	return (
		<section className={styles['audit-wrapper']}>
			<div className={`container ${styles['container']}`}>
				<div className={styles.audit}>
					<div className={styles['img-wrapper']}>
						<Image src='/audit.png' alt='audit' fill />
					</div>
					<div className={styles.content}>
						<h2 className='title-1'>Кому подойдет?</h2>
						<div className={styles.variants}>
							<p className={styles.var}>Риелторам</p>
							<p className={`${styles.var} ${styles.active}`}>
								Тем, кто ищет себя
							</p>
							<p className={styles.var}>Кто в поисках работы “Развитологом”</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
