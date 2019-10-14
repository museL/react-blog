import { resolve } from "path";
import use from "../api/use"
export const increment = () => ({ 
    type: "INC",
    payload:{
        promise: use.login()
    }
})

// export const loginSubmit = (user)  => ({ 
//     type: "LOGIN",
//     payload:{
//         promise: use.login(user)
//     }
// })



export const loginSubmit = (token)  => ({ 
    type: "LOGIN",
    token
})