import React, { useState } from "react";
import { Segment, TextArea, Form, Button, Divider } from "semantic-ui-react";
import API from "./api";

const EditRow = (props) => {
  const updateLine1 = (e) => {
    props.onChange({ newValue1: event.target.value });
  };
  const updateLine2 = (e) => {
    props.onChange({ newValue2: event.target.value });
  };
  const updateList = () => {
    props.onChange({ update: true, newValue1: "", newValue2: "" });
  };
  const add = () => {
    API.add(props.line1, props.line2).then(API.list().then(updateList));
  };

  return (
    <Form line1={props.line1} line2={props.line2}>
      <Divider hidden />
      <TextArea
        placeholder="Title"
        style={{ height: "42px", marginBottom: "12px" }}
        value={props.line1}
        onChange={updateLine1}
      />
      <TextArea
        placeholder="Info"
        style={{ height: "70px", marginBottom: "12px" }}
        value={props.line2}
        onChange={updateLine2}
      />
      <Button primary onClick={add}>
        Add
      </Button>
    </Form>
  );
};

export default EditRow;
