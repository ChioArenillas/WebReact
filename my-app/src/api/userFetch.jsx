import Password from "@/components/Password"
import { users } from "./mock/db"

//peticiones al back

export const getUsers = () => {
    return users.map(user => {
        return {
            id: user.id,
            nombre: user.nombre,
            password: user.password
        }
    })
}

export const getUsersById = (idParam) => {
    let userAux = users.find(user => user.id == idParam)
    return userAux
}