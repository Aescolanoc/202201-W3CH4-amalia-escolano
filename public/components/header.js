import { Component } from "./component.js";

export class Header extends Component {
  template;
  constructor(title = "My Series") {
    super();

    this.template = `
    <h1 class="main-title">My Series</h1>
  `;
  }
}
