import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider,Buttons} from '@material-ui/core';
import SidebarItemComponent from '../sidebaritems/sidebaritems';


class SidebarComponent extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (<div> Sidebar</div>);
    }
}
export default withStyles(styles)(SidebarComponent);