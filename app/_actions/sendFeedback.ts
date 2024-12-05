'use server'

import { createTransport } from 'nodemailer'
import {validateCaptcha} from "@/app/_actions/validateCaptcha";
import {FeedbackDto} from "@/app/_types/feedback.types";
import {CONNECT, PAYLOAD} from "@/app/_const/connect";
import {generateHTML} from "@/app/_helpers/generateHTML";

export const sendFeedback = async (
    data: FeedbackDto & { _captcha: string },
) => {
    const { _captcha, ...body } = data

    const isValid = await validateCaptcha(_captcha)

    if (isValid) {
        await createTransport({ ...CONNECT, secure: true }).sendMail({
            ...PAYLOAD,
            html: generateHTML(body),
        })
    } else {
        throw new Error('captcha is invalid')
    }
}
