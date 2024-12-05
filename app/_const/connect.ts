export const CONNECT = {
    auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASSWORD,
    },
    port: 465,
    host: 'smtp.yandex.ru',
}

export const PAYLOAD = {
    from: {
        name: 'Rafznaet',
        address: process.env.SMTP_LOGIN as string,
    },
    to: 'johk2@yandex.ru',
    subject: 'Rafznaet - Заявка на обратную связь',
}
