import {FeedbackDto} from "@/app/_types/feedback.types";

export const generateHTML = (data: FeedbackDto) => {
    return `<h1 style="font-size: 20px">Пользователь отправил запрос на обратную связь</h1>
           <div style="margin-bottom: 16px">Имя: ${data.name}</div>
           <div style="margin-bottom: 16px">Указанный номер телефона: ${data.phone}</div>
           <div><a href="https://rafznaet.ru" target="_blank">rafznaet.ru</a></div>
    `
}
