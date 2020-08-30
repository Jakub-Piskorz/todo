import React from "react";
import { List, Button, Divider } from "semantic-ui-react";
import API from "./api";

const Row = (params) => {
  const remove = () => {
    API.delete(params.id);
    setTimeout(() => params.onChange({ update: true }), 100);
  };

  return (
    <List.Item>
      <Button style={{ float: "right" }} onClick={remove}>
        Remove
      </Button>

      <List.Icon name="marker" />
      <List.Content>
        <List.Header as="a">{params.line1}</List.Header>
        <List.Description>{params.line2}</List.Description>
      </List.Content>
      {params.last !== true && <Divider />}
    </List.Item>
  );
};

export default Row;
