export type FeedbackDto = {
    name: string;
    phone: string;
}

export type WithCaptcha<T> = T & { _captcha: string }