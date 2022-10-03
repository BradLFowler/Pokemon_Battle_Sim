import { connect } from "react-redux";

import Home from "../components/Home";

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        poke1: state.poke1,
        poke2: state.poke2,
        moves1: state.moves1,
        moves2: state.moves2
    }
}

export default connect(mapStateToProps) (Home)