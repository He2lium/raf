'use client'

import React, {useMemo, useState} from 'react';

import styles from './tariffs.module.css';
import {MotionImage} from "@/app/_components/motion-image/motion-image";
import {useMetrica} from "next-yandex-metrica";

const documents = [
    "1. Типовые договоры. Особенности, виды.",
    "2. Типовые документы на объект коммерческой недвижимости.",
    "3. Агентские договоры, варианты работы."
]

const commerceModules = {
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
        points: documents.map((document) => `3.${document}`)
    }
}

const residentialModules = {
    1: {
        title: "Что такое жилая недвижимость: виды и характеристики",
        points: [
            "1.1. Понятие объекта недвижимости.",
            "1.2. Чем жилая недвижимость отличается от нежилой.",
            "1.3. Дополнительные виды недвижимости.",
            "1.4. Работа с продавцом."
        ]
    },
    2: {
        title: "Работа. Стратегия",
        points: [
            "2.1. Подготовка к показу объекта недвижимости.",
            "2.2. Показ объекта.",
            "2.3. Мотив. Потребность. Бонусы."
        ]
    },
    3: {
        title: "Скрипты",
        points: [
            "3.1. Скрипты приема звонка от покупателя на поиск квартиры.",
            "3.2. Скрипт для обработки сомнений клиента о необходимости личной встречи.",
            "3.3. Скрипт для обработки финансовых возражений Заказчиков/Клиентов в сделках с недвижимостью.",
            "3.4. Возможные возражения и работа с ними."
        ]
    },
    4: {
        title: "Работа с документами",
        points: [
            "4.1. Чек-лист «Подготовка к сделке с покупателем»."
        ]
    }
}

export const Tariffs = () => {
    const {reachGoal} = useMetrica()
    const [commerceActive, setCommerceActive] = useState<1 | 2 | 3>(1)
    const [residentialActive, setResidentialActive] = useState<1 | 2 | 3 | 4>(1)

    const commerceFirstCol = useMemo(() => {
        const points = commerceModules[commerceActive].points
        const length = points.length

        return points.slice(0, Math.round(length / 2))
    }, [commerceActive])

    const commerceSecondCol = useMemo(() => {
        const points = commerceModules[commerceActive].points
        const length = points.length

        return points.slice(Math.round(length / 2))
    }, [commerceActive])

    const residentialFirstCol = useMemo(() => {
        const points = residentialModules[residentialActive].points
        const length = points.length

        return points.slice(0, Math.round(length / 2))
    }, [residentialActive])

    const residentialSecondCol = useMemo(() => {
        const points = residentialModules[residentialActive].points
        const length = points.length

        return points.slice(Math.round(length / 2))
    }, [residentialActive])

    return (
        <section className='container'>
            <div className={styles['tariffs']} id={'tariffs'}>
                <div className={styles['row-1']}>
                    <h2 className='title-1'>Тарифы</h2>
                    <div className={styles['modules-wrapper']}>
                        <article className={styles['card__1']}>
                            <p className={styles['card-subtitle']}>Твой старт</p>
                            <h3 className={`${styles['card-title']} title-2`}>
                                Коммерческая недвижимость
                            </h3>
                            <div className={styles['card-price']}>
                                <a href='https://kyrs1.skillspace.ru/l/tvoj-start-commercial-nedvizimost'
                                   target={'_blank'} onClick={() => reachGoal('cta-commerce-click')}
                                   className={styles['card-btn']}>
                                    Купить
                                </a>
                                <div className={styles['card-prices']}>
                                    <span className={styles['card-old-price']}>20 000 ₽</span>
                                    <span className={styles['card-new-price']}>10 000 ₽</span>
                                </div>
                            </div>
                        </article>
                        <div className={styles['modules__1']}>
                            {[1, 2, 3].map((item) => (
                                <div key={item} onClick={() => setCommerceActive(item as 1 | 2 | 3)}
                                     className={`${styles['module']} ${commerceActive === item ? styles['module-active'] : ''}`}>
                                    Модуль {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles['image-wrapper__1']}>
                        <MotionImage
                            src='/tariffs.png'
                            alt='tariffs'
                            fill
                            animate={{rotate: [3, -3, 3]}}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
                <div className={styles['list']}>
                    <h3 className={styles['list-title']}>{commerceModules[commerceActive].title}</h3>
                    <div className={styles['list-col']}>
                        {commerceFirstCol.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                    <div className={styles['list-col']}>
                        {commerceSecondCol.map((item, i) => (
                            <p key={i + 10}>{item}</p>
                        ))}
                    </div>
                    {commerceActive === 3 &&
                        <a href={'#documents'} className={styles['list-button']}>Купить отдельно</a>}
                </div>
                <div className={`${styles['row-1']} ${styles['residential']}`}>
                    <div style={{visibility: 'hidden'}} className={'title-1'} aria-hidden={'true'}>hidden</div>
                    <div className={styles['image-wrapper__2']}>
                        <MotionImage
                            src='/tariffs-smile.png'
                            alt='tariffs'
                            fill
                            animate={{rotate: [3, -3, 3]}}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <div className={styles['modules-wrapper']}>
                        <article className={styles['card__2']}>
                            <p className={styles['card-subtitle']}>Твой старт</p>
                            <h3 className={`${styles['card-title']} title-2`}>
                                Жилая недвижимость
                            </h3>
                            <div className={styles['card-price']}>
                                <a href='https://kyrs1.skillspace.ru/l/tvoj-start-zilaa-nedvizimost-4f75ae'
                                   target={'_blank'}
                                   className={styles['card-btn']}
                                   onClick={() => reachGoal('cta-residential-click')}
                                >
                                    Купить
                                </a>
                                <div className={styles['card-prices']}>
                                    <span className={styles['card-old-price']}>20 000 ₽</span>
                                    <span className={styles['card-new-price']}>10 000 ₽</span>
                                </div>
                            </div>
                        </article>
                        <div className={styles['modules__2']}>
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} onClick={() => setResidentialActive(item as 1 | 2 | 3 | 4)}
                                     className={`${styles['module']} ${residentialActive === item ? styles['module-active'] : ''}`}>
                                    Модуль {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['list']}>
                    <h3 className={styles['list-title']}>{residentialModules[residentialActive].title}</h3>
                    <div className={styles['list-col']}>
                        {residentialFirstCol.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                    <div className={styles['list-col']}>
                        {residentialSecondCol.map((item, i) => (
                            <p key={i + 10}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className={`${styles['modules-wrapper']} ${styles['modules-wrapper-flex']}`}>
                    <article className={`${styles['card__1']}`}>
                        <p className={styles['card-subtitle']} id={'documents'}>Документы</p>
                        <h3 className={`${styles['card-title']} title-2`}>
                            Шаблоны всех типовых документов
                        </h3>
                        <div className={styles['card-price']}>
                            <a href='https://kyrs1.skillspace.ru/l/obrazcy-dokumentov-dla-raboty-733d15'
                               target={'_blank'} className={styles['card-btn']}
                               onClick={() => reachGoal('cta-documents-click')}
                            >
                                Купить
                            </a>
                            <div className={styles['card-prices']}>
                                <span className={styles['card-old-price']}>1 000 ₽</span>
                                <span className={styles['card-new-price']}>550 ₽</span>
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
