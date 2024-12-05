'use server'

export const validateCaptcha = async (token?: string | null) => {
    if (!token)
        throw new Error('token is not provided, check header [X-YC-SMART-CAPTCHA]')

    const response = await fetch(
        `https://smartcaptcha.yandexcloud.net/validate?token=${token}&secret=${process.env.YSC_PRIVATE_KEY}`,
        {
            method: 'GET',
        },
    )
    const json = await response.json()

    return json.status !== 'failed'
}
