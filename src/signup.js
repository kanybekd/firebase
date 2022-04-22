import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "./context/userAuthenticate"

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUp } = useUserAuth()
    const navigate = useNavigate()

    const handleSignUp = async () => {
        try {
            await signUp(email, password)
            setError("")
            navigate("/")

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
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSignUp} >sign up</button>
            <h4>or have already account? <br /> <Link to="/">log in</Link> </h4>
        </div>
    )
}
export default Signup;