import { user, token, isAuth } from "./store";

export function getTokenFromLocal() {
    console.log("getting token from local")
    const storageToken: any = localStorage.getItem("token");
    return storageToken;
}

export function getToken(){
    console.log("getting token")
    return token;
}