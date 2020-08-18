import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
        >
            <pre>
                {children}
            </pre>
        </div>
    )
}

const CodeTabs = (props) => {
    const { children } = props;
    const [tabValue, setTabValue] = useState(0);
    return (
        <>
            <AppBar position="static" style={{ margin: '20px 0' }} color="transparent">
                <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
                    <Tab label="HTML" id="simple-tab-0" />
                    <Tab label="CSS" id="simple-tab-1" />
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                {children[0]}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {children[1]}
            </TabPanel>
        </>
    )
}

export default CodeTabs;