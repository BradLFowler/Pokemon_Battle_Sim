import React, { useEffect, useState } from "react";

import "../App.css"

const Home = (props) => {

    return (
        <div className="pokeContainer">
            {console.log(props.moves1)}
            <div className="pokemon">
                <img src={props.poke1.sprites.front_default} />
                <h1 style={{ color: "white" }}>{props.poke1.name}</h1>
            </div>
            <div className="pokemon">
                <img src={props.poke2.sprites.front_default} />
                <h1 style={{ color: "white" }}>{props.poke2.name}</h1>
            </div>
        </div>
    )
}

export default Home;