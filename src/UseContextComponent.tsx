import { useContext, useState } from "react"
import UserContext, { UserState } from "./Store";


function ConsumerContext() {
    const user = useContext<UserState>(UserContext)
    return (
        <div>
            <div>{user.first}</div>
            <div>{user.last}</div>
        </div>
    )
}


function UseContextComponent() {
    const [user, setUser] = useState<UserState>({
        first: 'Hamim',
        last: 'Tamim'
    })
    return (
        <UserContext.Provider value={user}>
            <ConsumerContext />
            <button
                onClick={() =>
                    setUser({
                        first: "eveen",
                        last: "bomn"
                    })
                }
            >Change context</button>
        </UserContext.Provider >
    )
}

export default UseContextComponent;