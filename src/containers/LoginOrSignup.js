import { connect } from "react-redux";

import LoginOrSignup from "../components/LoginOrSignup";
import { fetchPokemon, setPoke1, setPoke2 } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        poke1: state.poke1,
        poke2: state.poke2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemon: () => dispatch(fetchPokemon()),
        setPoke1: (poke1) => dispatch(setPoke1(poke1)),
        setPoke2: (poke2) => dispatch(setPoke2(poke2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginOrSignup)