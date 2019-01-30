import { validateTokenAction } from '../actions/authAction'
import axios from 'axios'

export async function verifyToken(){
    let token = localStorage['persist:auth']
    token = token ? JSON.parse(token) : undefined
    if(token && token['authenticated'] && await validateTokenAction(token['authenticated'])){
        console.log('como entrou?');
        implementHeaderToken(token)
    } else{
        localStorage.clear()
    }
}

export function implementHeaderToken(token){
    axios.defaults.headers.common['authorization'] = token
}
