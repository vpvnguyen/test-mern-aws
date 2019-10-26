import React from 'react';
import axios from 'axios'; 
import AddBusiness from '../../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../../BusinessPortal/Dashboard/Dashboard'; 

// material-ui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// styling
const useStyles = makeStyles(theme => ({
    btnSpacing: {
        margin: theme.spacing(3, 0, 2),
    }
}));

// events
const handleLogInClicks = () => {
    console.log('login');
    // route to auth
    window.open("http://localhost:5000/auth/google", "_self");
};

const handleDashboardClicks = () => {
    console.log('dashboard');
    // route to auth
    window.open("http://localhost:5000/auth/google", "_self");
};


// render components
export default function BusinessSignIn(props) {
    const classes = useStyles();
    if (props.authenticated && props.user[0].user_type === 'businessuser') {
        return (
            <Router>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    className={classes.btnSpacing}
                    onClick={() => this.handleDashboardClick()}
                >
                    <Link to='/dashboard' >Business Dashboard</Link>
                </Button>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
            
        )
    } else if (props.authenticated === false ) {
        return (
            <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.btnSpacing}
                onClick={handleLogInClicks}
            >
                Login in with Google
            </Button>
        )
    } else if (props.authenticated) {
        return (
            <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.btnSpacing}
                onClick={() => props.handleClaimClick()}
            >
                Claim a business
            </Button>
        )
    }
}
