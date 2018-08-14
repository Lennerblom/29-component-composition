import React, {Component, Fragment} from 'react';

export default class NoteUpdateForm extends Component {
constructor(props) {
  super(props);
  this.state = {
    id: this.props.note.id,
    editing: this.props.note.editing,
    completed: this.props.note.completed,
    content: this.props.note.content,
    title: this.props.note.title
  };
}
   onSubmit = event => {
    event.preventDefault();
    this.props.onUpdate({...this.state });
    this.setState({
      title: '',
      content: ''
    });
  };
  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
    console.log('Here', this.state);
  };

  cancelUpdate = () => {
    this.setState(this.state);
  }
 
  render() {
      return(

        <Fragment>

            <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" value = {this.state.title}/>
        <textarea name="content" placeholder="content" value = {this.state.content}/>
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" value = {this.state.editing}/>
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" value = {this.state.completed}/>
        </label>
        <button>Update Note</button>
        <button onAbort={() => this.cancelUpdate}>Cancel Update</button>
      </form>
        </Fragment>
      );
  }
}