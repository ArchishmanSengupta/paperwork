import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper'
import BorderColoration from '@material-ui/icons/BorderColor';
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
    render(){
        const {classes} =this.props;
        return ( 

            //as we update the state it will update the ReactQuill

            <div classname={classes.editorContainer}>
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

    // 2. calling the helper function - helper.js

    update=debounce(()=>{
        console.log('auto saving...');

        // TODO: 

    },2000);

}
export default withStyles(styles)(EditorComponent);     // takes agrs styles, Styles is a function in which we will be using in the styles.js file