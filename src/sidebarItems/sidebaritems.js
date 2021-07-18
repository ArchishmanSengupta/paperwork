import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeHTMLTags} from '../helper';
import styles from './styles';

class SidebarItemComponent extends React.Component {
    
    render(){
        const {_index, _note,classes,selectedNoteIndex}=this.props;

        return (
            <div key={_index}>
                <ListItem 
                    className={classes.listItem}
                    selected={selectedNoteIndex ===_index} // this is actually our loop _index in sidebar.js under <List>
                    alignItems='flex-start'>
                        <div 
                        className={classes.textSection}
                        onClick={() => this.selectNote(_note,_index)}> {/* takes the note and it's index*/}
                        <ListItemText
                        primary={_note.title}

                        // Limits string to 30 characters, adds "..." at end
                        // Adding the helper function as in React Quill Firebase changes the string to HTML tags

                        secondary={removeHTMLTags(_note.body.substring(0,30))+ '...'}>
                        </ListItemText>
                        </div>
                            <DeleteIcon onClick={() => this.deleteNote(_note)} 
                            className ={classes.deleteIcon}></DeleteIcon>
                </ListItem> 
            </div> 
        );
    }
    
    selectNote=(n,i) => this.props.selectNote(n,i);
    deleteNote=(note) => 
    {
        // back ticks allows string and we can add js to that string
        if(window.confirm(`Do you want to delete: ${note.title}`)){
            this.props.deleteNote(note);
        }
    }
}
export default withStyles(styles)(SidebarItemComponent);
