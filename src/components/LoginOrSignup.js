import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../App.css"

const LoginOrSignup = (props) => {
    const [pokemon1, setPokemon1] = useState([])
    const [pokemon2, setPokemon2] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            return await props.fetchPokemon()
        }
        fetchData()
    }, [])

    const getTwoPokemon = async () => {

        if(props.pokemon.length > 0) {
            const poke1 = await props.pokemon[Math.floor(Math.random() * props.pokemon.length)]
            const poke2 = await props.pokemon[Math.floor(Math.random() * props.pokemon.length)]

            setPokemon1(poke1)
            setPokemon2(poke2)
        }
    }

    useEffect(() => {
        getTwoPokemon()
    }, [props.pokemon])

    const getPokemonData = async () => {
        if(props.pokemon.length > 0) {
            await axios.get(pokemon1.url)
            .then((res) => {
                props.setPoke1(res.data)
            })

            await axios.get(pokemon2.url)
            .then((response) => {
                props.setPoke2(response.data)
            })
        }
    }

    useEffect(() => {
        getPokemonData()
    }, [pokemon1, pokemon2])

    return (
        <div className="LSContainer">
            <div className="lContainer">
                <img className="pokeballImg" src="../pokeball.png"/>
                <button name="lButton" className="lButton">
                    <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Login</Link>
                </button>
            </div>
            <div className="sContainer">
                <img className="pokeballImg" src="../pokeball.png"/>
                <button name="sButton" className="sButton">
                    <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>Signup</Link>
                </button>
            </div>
        </div>
    )
}

export default LoginOrSignup