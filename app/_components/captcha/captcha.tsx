import {
    InvisibleSmartCaptcha as YInvisibleSmartCaptcha,
    InvisibleSmartCaptchaProps,
} from '@yandex/smart-captcha'

type Props = Omit<InvisibleSmartCaptchaProps, 'sitekey'>

export function InvisibleSmartCaptcha(props: Props) {
    return (
        <div className={'absolute'}>
            <YInvisibleSmartCaptcha
                hideShield
                sitekey={`${process.env.NEXT_PUBLIC_YSC_PUBLIC_KEY}`}
                {...props}
            />
        </div>
    )
}
