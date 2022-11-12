interface userAuthenticateProps{
email:string
password:string
}
export function ValidateUser(data:userAuthenticateProps){
    const email="dh"
    const pass="123"
    if(data.email==email && data.password==pass)return true
    else return false
}