import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import carbonalysisLogo from './carbonalysisLogo.png';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './NavBar.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "6px",
        paddingBottom: "6px",
        backgroundColor: "white"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "black",
        padding: "5px",
        fontWeight: "400",
        marginLeft: "25px"
    }
}));

export default function Navbar() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar className={classes.root}>
                    <a href="/">
                        <img src={carbonalysisLogo} className={styles.logo} />
                    </a>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>\
                    <Router>
                        <Link to="/dashboard" className={classes.link} >Dashboard</Link>
                        <Link to="/carbon-emissions" className={classes.link} >Calculate Emissions</Link>
                        <Link to="/carbon-footprint" className={classes.link}>Calculate Footprint</Link>
                        <Link to="/leaderboard" className={classes.link}>Leaderboard</Link>
                        <Link to="/login" className={classes.link}>Login</Link>
                    </Router>

                </Toolbar>
            </AppBar>
        </div >
    );
}
