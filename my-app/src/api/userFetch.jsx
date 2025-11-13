import { users } from "./mock/db"

//peticiones al back

export const getUsers = () => {
    return users
}

export const getUsersById = (id) => {
    let userAux = users.find(user => user.id === idParam)
    return userAux
}