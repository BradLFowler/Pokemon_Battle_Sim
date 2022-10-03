import React from "react";
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const Header = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color="transparent">
            <Toolbar>
                <Typography variant='h3' component="div" color="white" sx={{ flexGrow: 1}}>Pokemon Battle Simulator</Typography>
                {props.loggedIn ? 
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    component={Link}
                    to="/user"
                    color="primary"
                    >
                    <AccountCircle color='info' fontSize='inherit'/>
                    </IconButton> :
                    <></>
                }
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header