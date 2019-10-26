import React, { Component } from 'react';
// reset css material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from "prop-types";
// material-ui
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Footer from '../Footer/Footer';

// components
import BusinessSignIn from './WebSignIn/BusinessSignIn.jsx';
import MobileApp from './MobileApp/MobileApp.jsx';
import withStyles from "@material-ui/core/styles/withStyles";
import AddBusiness from '../BusinessPortal/AddBusiness/AddBusinessPage/AddBusiness.jsx';

// styling; export to css
const styles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});


// render sign in page
class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            claimBusiness: false
        }
    }


    claimBusinessClick = () => {
        this.setState({
            claimBusiness: true
        });
    };

    closeForm = () => {
        this.setState({
            claimBusiness: false
        });
    };


    render(props) {
        const { classes } = this.props;
        let showForm = this.state.claimBusiness

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LocalBarIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Dat Beer App
                        </Typography>
                        <BusinessSignIn user={this.props.user} handleClaimClick={this.claimBusinessClick} authenticated={this.props.authenticated} />
                        {showForm ? <AddBusiness user={this.props.user} closeForm={this.closeForm} /> : <div></div>}
                        <p>or</p>
                        <MobileApp />
                        <Box mt={5}>
                            <Footer />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        );
    }
}


export default withStyles(styles)(Splash); 