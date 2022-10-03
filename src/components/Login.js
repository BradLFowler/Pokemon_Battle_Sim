import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "../App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = (props) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allMoves1, setAllMoves1] = useState([])
    const [allMoves2, setAllMoves2] = useState([])

    const arrOfPoke1 = [props.poke1]
    const arrOfPoke2 = [props.poke2]
    const data1 = []
    const data2 = []

    const fetchMoves1 = async (url) => {
        await axios.get(url)
        .then((res) => {
            data1.push(res.data)
        })
    }

    const fetchMoves2 = async (url) => {
        await axios.get(url)
        .then((res) => {
            data2.push(res.data)
        })
    }

    const getPokeMoves = () => {
        if(props.poke1) {
            props.poke1.moves.forEach(moveset1 => fetchMoves1(moveset1.move.url))
        }

        setAllMoves1(data1)

        if(props.poke2) {
            props.poke2.moves.forEach(moveset2 => fetchMoves2(moveset2.move.url))
        }

        setAllMoves2(data2)
        
    }

    useEffect(() => {
        getPokeMoves()
    }, [arrOfPoke1[0], arrOfPoke2[0]])

    const getDMGMoves = () => {
        // const filteredMoves1 = props.allMoves1.filter(move => move.power !== null)
        // console.log(filteredMoves1)
    }

    useEffect(() => {
        getDMGMoves()
    }, [allMoves1, allMoves2])

    const handleSubmit = (e) => {
        e.preventDefault()

        props.setLoggedIn(true)
        navigate("/home")
    }

    return (
        <Box width="35%" component="form" className="formContainer" onSubmit={handleSubmit}>
            <h1 style={{ color: "white", textAlign: "center" }}>Login</h1>
            {console.log(allMoves1)}
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

export default Login