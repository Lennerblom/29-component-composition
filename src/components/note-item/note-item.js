import React from 'react';
import NoteUpdateForm from '../note-update-form/note-update-form';


// export default props => (
//     <li>
//         <li onDoubleclick={() => {<NoteUpdateForm note={props.note} onUpdate={props.onUpdate} />}}>update by double clicking</li>
//         <h2>{props.note.title}</h2>
//         <p>{props.note.content}</p>
//         <button onClick={() => props.onRemove(props.note.id)}>Delete Note</button>
        
//     </li>
// );

export default class NoteItem extends React.Component {
constructor(props){
    super(props);
}

    render() {
        function updateForm() {
            return (<NoteUpdateForm note={this.props.note} onUpdate={this.props.onUpdate} />);
        }

        return(
            <React.Fragment>
                <li onDoubleClick={updateForm}>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.content}</p>
                <NoteUpdateForm note={this.props.note} onUpdate={this.props.onUpdate} />
                <button onClick={() => this.props.onRemove(this.props.note.id)}>Delete Note</button>
                </li>
            </React.Fragment>

        );
    }
}

