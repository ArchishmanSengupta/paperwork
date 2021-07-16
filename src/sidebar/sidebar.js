import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider,Button} from '@material-ui/core';
import SidebarItemComponent from '../sidebaritems/sidebaritems';
import sidebaritems from '../sidebaritems/sidebaritems';


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
            onClick={this.newNoteBtnClick}
            className={classes.newNoteBtn}>
            {this.state.addNote ? 'Cancel' : '+ New Note'} 
        </Button>
        {
            this.state.addNote ?
            <div>
                <input type='text' className={classes.newNoteInput}
                placeholder='Untitled'
                onKeyUp={((e)=> this.updateTitle(e.target.value))}>
                </input>
                <Button 
                className={classes.newNoteBtnClick}
                onClick={this.newNote}>
                    SUBMIT NOTE
                </Button>
            </div>
            :null
        }

        {/* Takes all the notes from props and map those to actual elements */}

        <List>
            {
                notes.map((_note, _index) => {
                    return (
                        <div key={_index}>
                            <SidebarItemComponent
                                _note={_note}
                                _index={_index}
                                selectNoteIndex={selectNoteIndex}
                                selectNote={this.selectNote}
                                deleteNote={this.deleteNote}>
                            </SidebarItemComponent>
                            <Divider>
                                
                            </Divider>
                        </div>
                    )
                })
        }
        </List>
        
        </div>
        );
    }

    // If newNote is tru, change it to false i.e cancel & vice versa.
    // The title:null makes sure that it doesn't get updated to the title of new note.

    newNoteBtnClick =() => {
        this.setState({title: null,addNote:!this.state.addNote}); 
    }
    // Simply updates the title

    updateTitle=(txt) => {
        this.setState({title: txt})
    }

    // Submit btn onClick save state
    newNote=()=>{
        console.log(this.state);
    }

    // select and delete a particular node
    selectNote=()=> console.log('select note');
    deleteNote =()=> console.log('delete note');
}
export default withStyles(styles)(SidebarComponent);