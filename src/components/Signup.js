import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "../App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https://poke-battle-backend.herokuapp.com/auth/signup", {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res, "succesful")
        })
        .catch((err) => {
            console.log(err)
        })

        navigate("/login")
    }

    return (
        <Box width="35%" component="form" className="formContainer" onSubmit={handleSubmit}>
            <h1 style={{ color: "white", textAlign: "center" }}>Signup</h1>
            <TextField 
                className="textField" 
                required 
                variant="outlined" 
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField 
                className="textField" 
                type="password"
                required 
                variant="outlined" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit" className="submit">Submit</Button>
        </Box>
    )
}

export default Signup