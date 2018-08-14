import React from "react";
import { shallow } from "enzyme";
//import renderer from "react-test-renderer";

import App from './app';
import NoteForm from '../note-create-form/note-create'
import NoteList from '../note-list/note-list';

describe("App", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should have form", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(NoteForm)).toExist();
    expect(wrapper.find(NoteList)).toExist();
  });
});
