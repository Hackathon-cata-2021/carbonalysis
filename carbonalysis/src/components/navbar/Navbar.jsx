import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import carbonalysisLogo from './carbonalysisLogo.png';
import { Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
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
        marginLeft: "40px",
        fontSize: "20px"
    },
}));

export default function Navbar() {
    const classes = useStyles();
  
    return (
        <div className = {styles.navbar}>
            <AppBar position="fixed" className={classes.navbar} className = {styles.navbar}>
                <Toolbar className={classes.root} className = {styles.toolbar}>
                    <a href="/">
                        <img src={carbonalysisLogo} className={styles.logo} />
                    </a>
                    <Typography variant="h6" className={classes.title}> </Typography>
                    <nav>
                        <NavLink to="/dashboard" className={classes.link} >Dashboard</NavLink>
                        <NavLink to="/carbon-emissions" className={classes.link} >Calculate Emissions</NavLink>
                        <NavLink to="/carbon-footprint" className={classes.link}>Calculate Footprint</NavLink>
                        <NavLink to="/leaderboard" className={classes.link}>Leaderboard</NavLink>
                        <NavLink to="/login" className={classes.link}>Login</NavLink>
                    </nav>
                </Toolbar>
            </AppBar>
        </div >
    );
}
