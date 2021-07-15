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
            newNote: false,
            title: null
        };
    }
    render(){
        const { notes, classes, selectNoteIndex }=this.props;
        return (
        <div className={classes.sidebarContainer}> 
        <Button 
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}>
                + New Note
        </Button>
        {
            this.state.newNote ?
            <div>
                <input type='text' className={classes.newNoteInput}
                placeholder='Untitled'
                onKeyUp={((e)=> this.updateTitle(e.target.value))}>
                    </input> </div>
            :null
        }

        </div>
        );
    }
    newNoteBtnClick =() => {
        this.setState({title: null,newNote:!this.state.newNote});
    }
    updateTitle=(txt) => {
        console.log('Your Text: ',txt);
    }
}
export default withStyles(styles)(SidebarComponent);