import { connect } from 'react-redux';

import Login from '../components/Login';
import { setLoggedIn, setMoves1, setMoves2 } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        poke1: state.poke1,
        poke2: state.poke2,
        moves1: state.moves1,
        moves2: state.moves2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (loggedIn) => dispatch(setLoggedIn(loggedIn)),
        setMoves1: (moves1) => dispatch(setMoves1(moves1)),
        setMoves2: (moves2) => dispatch(setMoves2(moves2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)