export interface body_res_interface {
    userId:number,
}
export interface userLogged {
    _id:string,
    userName:string,
    password:string,
    creatAt:string,
    profilePhoto:string,
    status:string,
    desription:string,
    friends:string[],
    __v:number,
    socketId:string,
}