import Password from "@/components/Password"
import { users } from "./mock/db"

//peticiones al back

export const getUsers = () => {
    return users.map(user => {
        return {
            id: user.id,
            nombre: user.nombre,
            apellidos: user.apellidos,
            password: user.password
        }
    })
}

export const getUsersById = (idParam) => {
    let userAux = users.find(user => user.id == idParam)
    return userAux
}

export const modifyPassword = (idUser, newPassword) => {
    users.map(user => {
        if (user.id == idUser){
            user.password = newPassword
        }
    })
}

export const deleteUserById = (idUser) => {
    let userAux = users.findIndex(u => u.id == idUser)
    users.splice(userAux, 1)
}

export const addUser = (id, nombre, apellidos, password) => {
    users.push({
        id: id,
        nombre, nombre,
        apellidos: apellidos,
        password: password
    })
}

