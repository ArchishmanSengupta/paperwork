import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state={
            text: '',
            title:'',
            id:''
        };
    }
    // Lifecycle event

    // first mount sets the state of the note when the note is selected
    componentDidMount=()=> {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id,
        });
    }

    // this functions when the component is updated
    componentDidUpdate=()=>{
        if(this.props.selectedNote.id != this.state.id){ // if the id of the note is different to what it is displaying then {}
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id,
            });
        }
    }

    render(){
        const {classes} =this.props;
        return ( 

            //as we update the state it will update the ReactQuill

            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                    <input className={classes.titleInput}
                    placeholder='Untitled'
                    value={this.state.title ? this.state.title: ''}
                    onChange={(e)=>this.updateTitle(e.target.value)}>
                    </input>

            <ReactQuill
            value={this.state.text}
            onChange={this.updateBody}>          
            </ReactQuill>
            </div>
            );
    }

    // 1. Function that updates the body

    updateBody=async(val) => {
        await this.setState({text:val});
        this.update();
    };

    // 2. Updates the title

    updateTitle=async(val) => {
        await this.setState({title:val});
        this.update();
    }

    // 3. calling the debounce function - helper.js

    update=debounce(()=>{
        this.props.noteUpdate(this.state.id,{
            title: this.state.title,
            body: this.state.text,
        })
    },2000);
}
export default withStyles(styles)(EditorComponent);     // takes agrs styles, Styles is a function in which we will be using in the styles.js file