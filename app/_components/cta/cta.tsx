'use client'

import {useState} from 'react';
import styles from './cta.module.css';
import {useForm} from "react-hook-form";
import {FeedbackDto} from "@/app/_types/feedback.types";
import toast from "react-hot-toast";
import {sendFeedback} from "@/app/_actions/sendFeedback";
import {InvisibleSmartCaptcha} from "@/app/_components";
import {MotionImage} from "@/app/_components/motion-image/motion-image";
import {telegram} from "@/app/_const/urls";

export const Cta = () => {
    const [visible, setVisible] = useState(false)
    const [key, setKey] = useState(Math.random() * 10000)
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: {isSubmitting},
    } = useForm<FeedbackDto>()

    const onSubmit = () => {
        setVisible(true)
    }

    const onCaptchaSuccess = async (token: string) => {
        const data = getValues()

        try {
            await sendFeedback({...data, _captcha: token})
            toast.success('Запрос успешно отправлен!')
            reset()
        } catch {
            toast.error('Произошла ошибка. Попробуйте еще раз')
        }
        setKey((prev) => prev + 1)
        setVisible(false)
    }

    const loading = isSubmitting || visible

    return (
        <section className='container'>
            <div className={styles['cta']} id={'feedback'}>
                <div className={styles['col']}>
                    <h2 className={`title-1 ${styles['cta-title']}`}>Есть вопросы?</h2>
                    <h3 className={`${styles['cta-subtitle']} title-3`}>
                        Подробно Вас проконсультируем
                    </h3>
                    <div className={styles['cta-btns']}>
                        <a
                            target={'_blank'}
                            href={telegram}
                            className={`${styles['cta-btn']} ${styles['cta-btn__tg']}`}
                        >
                            <svg
                                width='36'
                                height='36'
                                viewBox='0 0 36 36'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M25.7674 11.3385C26.6276 11.0264 27.0546 10.9141 27.2912 10.8739C27.2929 10.9495 27.2912 11.0109 27.2873 11.0511C26.9499 14.5959 25.4719 23.3169 24.7127 27.375C24.5351 28.3253 24.3987 28.7777 23.4809 28.2386C22.8768 27.8835 22.3301 27.4368 21.7444 27.0528C19.8231 25.7933 17.0729 23.9175 17.2988 24.0304C15.4073 22.7839 16.199 22.0206 17.255 21.0027C17.426 20.8379 17.6038 20.6665 17.7783 20.4852C17.8562 20.4043 18.2372 20.0499 18.7745 19.5505C20.4977 17.9484 23.8278 14.8524 23.9119 14.4941C23.9257 14.4354 23.9385 14.2163 23.8082 14.1006C23.6781 13.9849 23.4861 14.0244 23.3474 14.0559C23.1509 14.1005 20.0211 16.1692 13.958 20.262C13.0696 20.872 12.2649 21.1694 11.544 21.1537L11.5504 21.1569C10.6007 20.822 9.65373 20.5336 8.70173 20.2437C8.07631 20.0531 7.44874 19.8619 6.81685 19.6565C6.66231 19.6064 6.51152 19.5586 6.36981 19.5141C12.936 16.6537 17.3094 14.7703 19.5008 13.8588C22.6839 12.5349 24.5719 11.7723 25.7674 11.3385ZM29.2812 8.54154C28.9137 8.2433 28.5097 8.10642 28.2291 8.03938C27.9393 7.97015 27.6638 7.94787 27.455 7.95156C26.764 7.96373 26.0218 8.16025 24.7779 8.61161C23.509 9.07206 21.5592 9.86083 18.3867 11.1803C16.1502 12.1106 11.6974 14.0287 5.03948 16.9294C4.45468 17.1632 3.91859 17.4285 3.49503 17.743C3.10392 18.0335 2.55643 18.5532 2.45628 19.3522C2.38062 19.9556 2.55656 20.5126 2.91337 20.9512C3.224 21.333 3.62196 21.5649 3.92502 21.7117C4.37489 21.9295 4.98018 22.1193 5.51214 22.2861C6.34343 22.5466 7.17279 22.8127 8.00586 23.0677C10.5849 23.8572 12.708 24.507 15.044 26.0464C16.7575 27.1755 18.4378 28.3539 20.1541 29.4789C20.7801 29.8892 21.3652 30.3601 22.0116 30.7397C22.7175 31.1546 23.615 31.5328 24.7075 31.4322C26.3586 31.2803 27.2175 29.7614 27.5642 27.9083C28.3215 23.8605 29.8237 15.0185 30.1751 11.3259C30.221 10.844 30.1673 10.3038 30.1226 10.0429C30.0767 9.77434 29.9361 9.07302 29.2812 8.54154Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </a>
                    </div>
                    <div className={styles['image-wrapper']}>
                        <MotionImage
                            src='/cta.png'
                            alt='cta'
                            fill
                            animate={{rotate: [5, -5, 5]}}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
                <div className={styles['col']}>
                    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles['form-field']}>
                            <input disabled={loading} required type='text' placeholder='Имя' {...register('name', {
                                required: true,
                                minLength: 1,
                                maxLength: 64
                            })}/>
                        </div>
                        <div className={styles['form-field']}>
                            <input disabled={loading} required type='text' placeholder='Номер телефона' {...register('phone', {
                                required: true,
                                minLength: 4,
                                maxLength: 20
                            })}/>
                        </div>
                        <div className={styles['form-action']}>
                            <button disabled={loading} type={'submit'} className={styles['form-btn']}>Задать вопрос</button>
                            <p className={styles['form-policy']}>
                                Нажимая кнопку “Задать вопрос” вы соглашаетесь с политикой
                                конфиденциальности
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <InvisibleSmartCaptcha
                key={key}
                visible={visible}
                onSuccess={onCaptchaSuccess}
            />
        </section>
    );
};
