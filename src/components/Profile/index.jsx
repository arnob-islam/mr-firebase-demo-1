import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
// import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root__: {
        // flexGrow: 1,
        display: 'flex',
        // gridTemplateColumns: 'minmax(268px,1fr) minmax(752px,936px) minmax(160px,1fr)'
        flexWrap: "noWrap",
        gap: '2rem'

    },
    tab_wrapper: {
        width: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        '& > svg': {
            color: '#777'
        }
    },
    section_: {
        padding: '3.5rem 0'
    }
}));

export default function Index({ children }) {
    const classes = useStyles();

    return (
        <section className={classes.section_}>
            <Container maxWidth="xl" style={{ padding: '0' }}>
                <div className="wrapper">
                    <div className={`${classes.root__} wrapper_body`}>
                        <div className={`${classes.tab_wrapper}`}>
                            <div className="icon_single">
                                <Link to='/public/settings/'>
                                    <SortOutlinedIcon />
                                </Link>
                            </div>
                            <div className="icon_single">
                                <Link to='/ganarel/settings/'>
                                    <TuneOutlinedIcon />
                                </Link>
                            </div>
                            <div className="icon_single">
                                {/* <Link to='/construction/'>
                                    <SettingsApplicationsOutlinedIcon />
                                </Link> */}
                            </div>
                        </div>
                        <div className="user_info_container">
                            {children}
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
