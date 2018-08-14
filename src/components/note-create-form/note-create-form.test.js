import React from "react";
import { shallow } from "enzyme";
import NoteForm from './note-create'
describe("NoteForm", () => {
  it("should render", () => {
    shallow(<NoteForm/>);
  });

  it("should have initial state", () => {
    const wrapper = shallow(<NoteForm/>);
    expect(wrapper).toHaveState({
      title: "",
      content: "",
      editing: false,
      completed: false
    });
  });

  it("should handle form changes", () => {
    const wrapper = shallow(<NoteForm/>);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "title",
        value: "new title",
        type: "text"
      }
    };
    instance.onChange(event);

    expect(wrapper.state("title")).toBe("new title");
  });

  it("should submit a new note", done => {
    const onSubmit = note => {
      expect(note.id).not.toBe("");
      done();
    };
    const wrapper = shallow(<NoteForm onSubmit={onSubmit} />);

    const event = {
      preventDefault: () => {}
    };

    wrapper.instance().onSubmit(event);
  });
});
