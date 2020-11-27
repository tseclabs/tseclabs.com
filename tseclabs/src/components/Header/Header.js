import React from 'react'
import "./Header.css"
import logo from '../../tseclabs.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Route, Link } from "react-router-dom";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header">
            <AppBar position="static" className="menu_bar">
                <Toolbar>
                    <Button className="about" color="inherit">Learn</Button>
                    <Button className="about" color="inherit">About</Button>
                    <Button className="about" color="inherit">Contact</Button>
                    <Button color="inherit" 
                        aria-controls="simple-menu" aria-haspopup="true" 
                        onClick={handleClick}>
                            Services
                            <ArrowDropDownIcon />
                    </Button>
                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                        <Link to="/services/labs" className="links">
                            <MenuItem onClick={handleClose}>Labs</MenuItem>
                        </Link>
                        <MenuItem onClick={handleClose}>Coaching</MenuItem>
                        <MenuItem onClick={handleClose}>Consulting</MenuItem>

                    </Menu>
                    
                    {/* Button below uses filler accounts.google.com update with Auth */}
                    <div className="header_right">
                        <Button className="signup" color="inherit" href="https://register.tseclabs.com/">Register</Button>
                        <Button color="inherit" href="https://subscriber.tseclabs.com/">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
