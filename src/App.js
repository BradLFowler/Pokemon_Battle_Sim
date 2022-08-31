import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton';

class App extends Component {
  constructor(props) {
    super(props)

    // this.state = {

    // }
  }

  render() {
    return (
      <div>
        <AppBar position='static' color="transparent">
          <Typography variant='h3' component="div" color="white">Pokemon Battle Simulator</Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                component={Link}
                to="/user"
                color="primary"
              >
                <AccountCircle fontSize='inherit'/>
              </IconButton>
        </AppBar>
      </div>
    );
  }
}

export default App;
