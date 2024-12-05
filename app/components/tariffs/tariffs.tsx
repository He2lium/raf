'use client'

import React, {useMemo, useState} from 'react';
import Image from 'next/image';

import styles from './tariffs.module.css';

const documents = [
    "1. Типовые договоры. Особенности, виды.",
    "2. Типовые документы на объект Коммерческая недвижимости.",
    "3. Агентские договоры, варианты работы."
]

const modules = {
    1: {
        title: "Коммерческая Недвижимость и ее особенности",
        points: [
            "1.1. В чем отличие коммерческой недвижимости от жилой.",
            "1.2. Виды коммерческой  недвижимости. Классификация объектов.",
            "1.3. Характеристики коммерческой недвижимости.",
            "1.4. Назначение объектов по целевому использованию.",
            "1.5. Составление фото/видео материалов (умение).",
            "1.6. Составление презентации на объект коммерческой недвижимости (умение).",
            "1.7. Размещение объекта  на специализированных площадках."
        ],
    },
    2: {
        title: "Работа с объектами по их реализации — аренда",
        points: [
            "2.1. Оценка объекта по действующему профилю.",
            "2.2. Разбор запросов Арендаторов — как для них подбирать объекты.",
            "2.3. Как выявить техническое задание  Арендатора.",
            "2.4. Подбор объектов / работка по заявки Арендатора.",
            "2.5. Как работать с сетевыми компаниями по объектам. Регламент коммуникации с сетевыми Арендаторами, развитологами.",
            "2.6. План работ по объекту (ремонт, каникулы).",
        ],
    },
    3: {
        title: "Работа с документами",
        points: documents.map((document, index) => `3.${document}`)
    }
}

export const Tariffs = () => {
    const [active, setActive] = useState<1 | 2 | 3>(1)
    const firstCol = useMemo(() => {
        const points = modules[active].points
        const length = points.length

        return points.slice(0, Math.floor(length / 2) + 1)
    }, [active])

    const secondCol = useMemo(() => {
        const points = modules[active].points
        const length = points.length

        return points.slice(Math.floor(length / 2) + 1)
    }, [active])

    return (
        <section className='container'>
            <div className={styles['tariffs']} id={'tariffs'}>
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
                            {[1, 2, 3].map((item) => (
                                <div key={item} onClick={() => setActive(item as 1 | 2 | 3)}
                                     className={`${styles['module']} ${active === item ? styles['module-active'] : ''}`}>
                                    Модуль {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles['image-wrapper']}>
                        <Image src='/tariffs.png' alt='tariffs' fill/>
                    </div>
                </div>
                <div className={styles['list']}>
                    <h3 className={styles['list-title']}>{modules[active].title}</h3>
                    <div className={styles['list-col']}>
                        {firstCol.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                    <div className={styles['list-col']}>
                        {secondCol.map((item, i) => (
                            <p key={i + 10}>{item}</p>
                        ))}
                    </div>
                    {active === 3 && <a href={'#documents'} className={styles['list-button']}>Купить отдельно</a>}
                </div>
                <div className={`${styles['modules-wrapper']} ${styles['modules-wrapper-flex']}`}>
                    <article className={`${styles['card']}`}>
                        <p className={styles['card-subtitle']} id={'documents'}>Документы</p>
                        <h3 className={`${styles['card-title']} title-2`}>
                            Шаблоны всех типовых документов
                        </h3>
                        <div className={styles['card-price']}>
                            <a href='#' className={styles['card-btn']}>
                                Купить
                            </a>
                            <div className={styles['card-prices']}>
                                <span className={styles['card-old-price']}>3 490 ₽</span>
                                <span className={styles['card-new-price']}>990 ₽</span>
                            </div>
                        </div>
                    </article>
                    <div className={styles['list-mini']}>
                        <div className={styles['list-col']}>
                            {documents.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                            <p className={styles['list-notation']}>Для работы с коммерческой недвижимостью.<br/>Подтверждены
                                многолетней практикой</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
