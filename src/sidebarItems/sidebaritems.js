import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeHTMLTags} from '../helper';

class SidebarItemComponent extends React.Component {
    
    render(){
        const {_index, _note,classes,selectNoteIndex}=this.props;

        return (
            <div key={_index}>
                <ListItem className={classes.listItem}
                selected={selectNoteIndex ===_index} // this is actually our loop _index in sidebar.js under <List>
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
                </ListItem> 
            </div>
        );
    }
}
export default withStyles(styles)(SidebarItemComponent);
