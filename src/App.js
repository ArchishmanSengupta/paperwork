
import './App.css';
import React from 'react';
import "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';

//const firebase = require('firebase');
require("firebase/firestore");
class App extends React.Component {
  constructor(){
    // super() will call the constructor of its parent class. 
    // This is required when you need to access some variables from the parent class.
    super(); 
    this.state={
      selectNoteIndex:null,
      selectedNode:null,
      notes:null,
    }
  }

  render() {
    return(
      <div>HMMMMM</div>
    );
  }

  //Lifecycle hook: we want our App component to get called before
  //when the component is loaded immediately 

  componentDidMount=() => {
    firebase
    .firestore()
    .collection('notes')                    // Table in a db
    .onSnapshot(serverUpdate=>{             // function will be automatically called when notes is updated
      const notes = serverUpdate   
      .docs                                 // prop of serverUpdate obj that is getting passed
      .map(_doc => {
        const data=_doc.data();             //grabs data from the docs
        data['id']=_doc.id;             
        return data;
      });
      console.log(notes);
      this.setState({notes:notes});          // mapping notes state with const notes line 36
    });
  }
}

export default App;
