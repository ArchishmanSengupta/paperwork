import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider,Button} from '@material-ui/core';
import SidebarItemComponent from '../sidebaritems/sidebaritems';


class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state={
            addNote: false,
            title: null
        };
    }
    render(){
        const { notes, classes, selectNoteIndex }=this.props;
        return (
        <div className={classes.sidebarContainer}> 
        <Button 
            onClick={this.addNoteBtnClick}
            className={classes.addNoteBtn}>
                Add Note
        </Button>

        </div>
        );
    }
    addNoteBtnClick =() => {
        console.log('new note add');
    }
}
export default withStyles(styles)(SidebarComponent);