import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        poke1: state.poke1,
        poke2: state.poke2
    }
}

export default connect(mapStateToProps) (Header)