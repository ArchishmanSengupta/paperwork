
import './App.css';
import React from 'react';
import "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';
import 'react-quill/dist/quill.snow.css';


//const firebase = require('firebase');
require("firebase/firestore");
class App extends React.Component {
  constructor(){
    // super() will call the constructor of its parent class. 
    // This is required when you need to access some variables from the parent class.
    super(); 
    this.state={
      selectedNoteIndex:null,
      selectedNote:null,
      notes:null,
    }
  }

  render() {
    return(
      <div className="app__container">
        <SidebarComponent 
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          classes={this.state.classes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}>
        </SidebarComponent>
        {
          this.state.selectedNote ? // is the note is not selected render null else render the note
          <EditorComponent 
          selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}>
          </EditorComponent> : null
        }
      </div>
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

  selectNote=(note,index) => this.setState({selectedNoteIndex:index, selectedNote: note});
  noteUpdate=(id,noteObj)=> {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }

    // Creating new note and updating with firebase
    // newNote accepts title and body will be null
  newNote= async(title) => {
    const note={
      title: title,
      body: ''
    };

    // await a firebase call
    // we are creating this in firebase and we are waiting for it to respond
    // from the server and whatever the response is we are saving it to "newFromDB"
    const newFromDB= await firebase
    .firestore()
    .collection('notes')
    .add({
      title: note.title,
      body: note.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // We need access to the document ID which is automatically generated by firebase

    const newID= newFromDB.id;
    await this.state({
      notes: [...this.state.notes,note] // spread Operator "..."
    });

  }
}

export default App;
