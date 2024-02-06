import { userLogged } from "./users.interface"

export interface Imessage {
    userSendMessageId:string,
    userReceiveMessageId:string,
    message:string
}
export interface IchattingData extends userLogged  {
    message:string,
    socketId:string,
}