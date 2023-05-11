// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { req } from "../../plugins/axios";
import { goto } from "$app/navigation";
export const prerender = true;
export const csr = true;
export const ssr = false;

export const load = async () => {
    if(!localStorage.getItem('token')) return goto('/');
    const user = await req.get('/users/@self',
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    if(user.status !== 200) {
        return goto('/');
    }
    return user.data.data
}