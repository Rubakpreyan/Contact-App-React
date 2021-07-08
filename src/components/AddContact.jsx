import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All details are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div style={{ marginTop: "6rem" }} className="ui main">
        <h2 style={{ fontSize: "2.2rem" }}>Add contact</h2>
        <form
          style={{ marginTop: "2rem" }}
          className="ui form"
          onSubmit={this.add}
        >
          <div className="field">
            <label style={{ marginBottom: "1.2rem" }} htmlFor="">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label style={{ marginBottom: "1.2rem" }} htmlFor="">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
          <h2>Contact list</h2>
        </form>
      </div>
    );
  }
}
