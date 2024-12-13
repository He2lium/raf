import styles from './page.module.css'
import {email, phone} from "@/app/_const/urls";

export default function Page() {
    return <div className={'container'}>
        <div className={styles['contacts-wrapper']}>
            <h1 className={'title-2'}>Контакты</h1>
            <div className={styles['contacts']}>
                <div className={styles['field']}>
                    <span className={styles.label}>Юридическое лицо:</span>
                    <span className={styles.value}>ООО «АВК-ГРУПП»</span>
                </div>
                <div className={styles['field']}>
                    <span className={styles.label}>ИНН:</span>
                    <span className={styles.value}>9728019660</span>
                </div>
                <div className={styles['field']}>
                    <span className={styles.label}>ОГРН:</span>
                    <span className={styles.value}>1207700438648</span>
                </div>
                <div className={styles['field']}>
                    <span className={styles.label}>Контактный телефон (доступен и в Telegram!):</span>
                    <a href={phone} className={styles.value}>+7 903 489 80 95</a>
                </div>
                <div className={styles['field']}>
                    <span className={styles.label}>Адрес электронной почты:</span>
                    <a href={email} className={styles.value}>info@rafznaet.ru</a>
                </div>
            </div>
        </div>
    </div>
}