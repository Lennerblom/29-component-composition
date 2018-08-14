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
    this.state = {
        view: 'normal'
    }
    this.updateView = this.updateView.bind(this);
    this.normalView = this.normalView.bind(this);
}
updateView() {
    this.setState({view: 'edit'});
}
normalView() {
    this.setState({view: 'normal'})
}
    render() {

        if(this.state.view === 'edit') {
            
          return (
            <React.Fragment>
          <NoteUpdateForm note={this.props.note} onUpdate={this.props.onUpdate} {...this.normalView} />
          <li onDoubleClick={this.updateView}>
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.content}</p>
          <button onClick={() => this.normalView(this.props.note.id)}>return to normal view</button>
          </li>
          </React.Fragment>
          );
        } 
        else {
          return(
            <React.Fragment>
                <li onDoubleClick={this.updateView}>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.content}</p>
                <button onClick={() => this.props.onRemove(this.props.note.id)}>Delete Note</button>
                </li>
            </React.Fragment>
          );
        }
    }
}

