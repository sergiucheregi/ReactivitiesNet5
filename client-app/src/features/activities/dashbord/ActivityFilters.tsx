import { Header, Menu } from "semantic-ui-react";
import React from 'react';
import Calendar from "react-calendar";

export default function ActivityFilters() {
    return(
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 28}}>
                <Header icon='filter' attached color='teal' content='Filters'/>
                <Menu.Item content='All activities'/>
                <Menu.Item content="I'm going"/>
                <Menu.Item content="I'm hosting"/>
            </Menu>
            <Header icon='filter' attached color='teal' content='Filters'/>
            <Calendar />
        </>
    )
}