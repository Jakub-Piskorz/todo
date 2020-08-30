import React, { useEffect, useState, Fragment, Component } from "react";
import { render } from "react-dom";
import {
  List,
  Button,
  Divider,
  Image,
  Dimmer,
  Loader,
  Segment,
  MountNode,
} from "semantic-ui-react";
import API from "./api";
import Row from "./row";
import EditRow from "./edit-row";
import { string } from "prop-types";

function LoadingSegment() {
  return (
    <Fragment>
      <Segment loading basic>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          style={{ margin: "10px, 0", maxHeight: "37px", minWidth: "70%" }}
        />
      </Segment>
      <Segment loading basic>
        <Image
          src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
          style={{ margin: "10px, 0", maxHeight: "37px", minWidth: "70%" }}
        />
      </Segment>
      <Divider hidden />
    </Fragment>
  );
}

const TodoList = () => {
  let data = "empty";
  let Content = [];
  const [list, setList] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  const updateTimer = () => {
    setInterval(
      () =>
        API.list().then((data) => {
          setList(data);
        }),
      500
    );
  };

  useEffect(() => {
    API.list().then((data) => setList(data));
    updateTimer();
  }, []);

  const update = ({ newValue1 = null, newValue2 = null, update = null }) => {
    if (newValue1 !== null) setLine1(newValue1);
    if (newValue2 !== null) setLine2(newValue2);
    if (update === true)
      API.list()
        .then((data) => setList(data))
        .then(() => {});
  };

  return (
    <Fragment>
      {!list ? (
        <LoadingSegment />
      ) : (
        list.map((x, i) => (
          <Row
            id={x.t_id}
            line1={x.line1}
            line2={x.line2}
            last={i > list.length - 2 ? true : false}
            onChange={update}
          />
        ))
      )}
      <EditRow line1={line1} line2={line2} onChange={update} list={list} />
    </Fragment>
  );
};

export default TodoList;
