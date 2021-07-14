import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helper'
import BorderColoration from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (<div>
            Editor Test
            </div>);
    }
}
export default withStyles(styles)(EditorComponent);     // takes agrs stles, Styles is a function in which we will be using in the styles.js file