import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import PublicData from './PublicData';
import GeneralSettings from './GeneralSettings';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root__: {
        // flexGrow: 1,
        display: 'flex',
        height: 'auto',
        flexWrap: 'wrap',

    },
    theTabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    section_: {
        padding: '3.5rem 0'
    }
}));

export default function Index() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className={classes.section_}>
            <Container maxWidth="xl">
                <div className="wrapper">
                    <div className={`${classes.root__} wrapper_body`}>
                        <div className="tab_site_wrapper">
                            <Tabs
                                orientation="vertical"
                                // variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                className={classes.theTabs}>

                                <Tab label="Public Details" {...a11yProps(0)} />
                                <Tab label="Genaral Settings" {...a11yProps(1)} />

                            </Tabs>
                        </div>
                        <div className="user_info_container">
                            <TabPanel value={value} index={0}>
                                <PublicData />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <GeneralSettings />
                            </TabPanel>

                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
