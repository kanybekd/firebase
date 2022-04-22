import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "./context/userAuthenticate"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { logIn, user } = useUserAuth()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            await logIn(email, password)
            setError("")
            navigate("/home")
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div>
            <div>
                {error}
            </div>
            <div style={{ margin: "10px" }}>
                <input type="email" onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <input type="password" onChange={(event) => setPassword(event.target.value)} />
            </div>
            <button onClick={handleLogin} >log in</button>
            <p>or you do not have account ? <Link to="/signup"> Sign up </Link></p>
        </div>
    )
}

export default Login;