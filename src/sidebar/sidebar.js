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
            {this.state.newNote ? 'Cancel' : '+ New Note'} 
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

    // If newNote is tru, change it to false i.e cancel & vice versa.
    // The title:null makes sure that it doesn't get updated to the title of new note.

    newNoteBtnClick =() => {
        this.setState({title: null,newNote:!this.state.newNote}); 
    }
    updateTitle=(txt) => {
        console.log('Your Text: ',txt);
    }
}
export default withStyles(styles)(SidebarComponent);