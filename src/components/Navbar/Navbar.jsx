import './Navbar.css'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    head_background: {
        color: ' #606688',
        background: 'white',
        boxShadow: ` 0px 2px 4px - 1px rgb(0 0 0 / 0 %), 0px 4px 5px 0px rgb(0 0 0 / 2 %), 0px 1px 10px 0px rgb(0 0 0 / 10 %)`
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.primary.light, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.light, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {

    const asidebar = React.useRef(null)
    const classes = useStyles()

    const HangleNavbar = () => {
        const sidebar = asidebar.current
        sidebar.style.width = "100%";
    }
    const closeAside = () => {
        const sidebar = asidebar.current
        sidebar.style.width = "0";
    }
    const UserClickIt = () => {
        setTimeout(() => {
            closeAside()
        }, 500);
    }
    const NavBar_Links = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'about',
            link: '/about/'
        },
        {
            name: 'blogs',
            link: '/blogs/'
        },
        {
            name: 'more',
            link: '/more/'
        },

    ]

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" className={classes.head_background}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={HangleNavbar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Mr Projects
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <aside id='full_aside_nav' className='aside_navbar__' ref={asidebar}>
                <div className="close_btn">
                    <span className="closebtn" onClick={closeAside}>&times;</span>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <ul className='ul_of_links'>
                            {NavBar_Links.map((e, index) => {
                                return <li key={`${e.name}${index}`} onClick={UserClickIt} > <a href={e.link}>{e.name}</a> </li>
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}
