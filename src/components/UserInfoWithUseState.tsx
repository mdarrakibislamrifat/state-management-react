import { useState } from "react"




const UserInfoWithUseState = () => {

    const [user, setUser] = useState({ name: "", age: 0, hobbies: [] })
    return (
        <form action="">
            <input type="text" name="name" id="name" />
        </form>
    )
}

export default UserInfoWithUseState