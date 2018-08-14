import React from 'react';
import NoteItem from '../note-item/note-item';

export default props => (
    <ol>
    {props.notes.map(note => <NoteItem key={note.id} note={note} {...props} onUpdate={props.onUpdate}/>)}
    </ol>
);

