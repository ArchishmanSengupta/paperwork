import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeHTMLTags} from '../helper';

class SidebarItemComponent extends React.component(){
    constructor(){
        super();
    }
    render(){
        return (<div> SibarItems </div>);
    }
}
export default withStyles(styles)(SidebarItemComponent);
