import React from "react";
import { ReactDOM, render } from "react-dom";
import { Button, Header, Segment, Divider, Footer } from "semantic-ui-react";
import TodoList from "./components/todo-list";
import Row from "./components/row";
import EditRow from "./components/edit-row";
import API from "./components/api";
import "./style.css";

render(
  <main>
    <Header
      as="h1"
      content="To do list"
      subheader="Add, remove and edit your list."
    />
    <Divider hidden />
    <div id="todo"></div>
    <TodoList />
    <footer />
  </main>,
  document.querySelector("#root")
);
