import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import {Divider,Button} from '@material-ui/core';
import SidebarItemComponent from '../sidebaritems/sidebarItems';


class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state={
            addNote: false,
            title: null
        };
    }
    /*
    Explanation of the render function:

    We check if the notes!=null then we execute the if statement,
    otherwise if notes==null we return an empty div.
    
    Now in App.js , 
    when it first renders the SidebarComponents
    notes is going to be null as notes is null inside of the state by default.

    Now when componentDidMount goes through & successfully retrieves the sidebar
    and sets this.setState({notes :notes}), SidebarComponents is going to re-render
    with notes not being null and then it will then comeback to render statement 
    here (Sidebar.js)

    */
    
    render(){
        const { notes, classes, selectedNoteIndex }=this.props;
        if(notes) {
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
                        <input 
                        type='text' 
                        className={classes.newNoteInput}
                        placeholder='Untitled'
                        onKeyUp={(e)=> this.updateTitle(e.target.value)}>
                        </input>
                        <Button 
                        className={classes.newNoteSubmitBtn}
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
                                        selectedNoteIndex={selectedNoteIndex}
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
        } else{
            return (
                <div></div>
            );
        }
        // End of HUGE-If statement and Explanation
    }

    // If newNote is true, change it to false i.e cancel & vice versa.
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
      this.props.newNote(this.state.title);
      this.setState({
         title: null,addNote: false
      });
    }

    // select and delete a particular node
    selectNote=(n,i)=> this.props.selectNote(n,i);
    deleteNote =(note)=>this.props.deleteNote(note);
}
export default withStyles(styles)(SidebarComponent);