import React from 'react'
import { useUserAuth } from "./context/userAuthenticate"
import { useNavigate } from "react-router-dom"
function Home() {
    const { user, logOut } = useUserAuth()
    const navigate = useNavigate()
    const handleLogOut = async () => {
        try {
            await logOut()
            navigate("/")
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            Welcome {user.email}
            <div >
                <button onClick={handleLogOut}>

                    log out
                </button>
            </div>
        </div>
    )
}

export default Home