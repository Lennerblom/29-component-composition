'use strict';
import React, {Component, Fragment} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import NoteList from '../note-list/note-list';
import NoteForm from '../note-create-form/note-create';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }

    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    };

  createNote(note) {
    const notes = [...this.state.notes, note];
    this.setState({notes})
  }

  updateNote(note) {
    const notes = this.state.notes.filter(n => n.id !== note.id);
    notes.push(note);
    this.setState({notes});
  }

  removeNote(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  render() {
    return (
      <BrowserRouter>
  <Fragment>
    <main>
    <h2>Note Lab 29</h2>
    <NoteForm onSubmit={this.createNote}/>
    <NoteList notes={this.state.notes} onRemove={this.removeNote} onUpdate={this.updateNote}/>
    </main>
  </Fragment>
  </BrowserRouter>
    );
  }
}