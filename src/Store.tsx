import { createContext } from "react"

const initialState = {
    first: "Jubair",
    last: "Tolon"
}
export type UserState = typeof initialState

const UserContext = createContext<typeof initialState>(initialState);
export default UserContext;
