import React, { Component } from "react";
import "./App.css";
import "./Srinakharinwirot-Regular.ttf";
import LogoSwu from "./LogoSwu.png";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
// import Main from './Main'
import axios from "axios";
import env from "./config";
// import jwt_decode from "jwt-decode";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // let loggedIn = false

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm = async e => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    if (username !== "" && password !== "") {
      await axios
        .post(`${env.urltest}/login`, {
          username: username,
          password: password
        })
        .then(user => {
          // const decoded = jwt_decode(user)
          // console.log(decoded)
          if (user.status === 200) {
            alert("Login สำเร็จ");
            localStorage.setItem("token", user);
            // const decoded = jwt_decode(user.data);
            // console.log(decoded);
            this.setState({
              loggedIn: true
            });
          }
        })
        .catch(err => {
          console.log(err);
          alert("Username หรือ Password ไม่ถูกต้อง");
        });
    } else {
      alert("โปรดกรอก Username และ Password");
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/Main" />;
    }
    return (
      <div>
        <div className="Background">
          <div className="Body">
            <div>
              {" "}
              <text style={{ color: "#da2129" }}>SWU </text>
              <text style={{ color: "#f4b1df" }}>BUS </text>
              <text style={{ color: "#606265" }}>M</text>
            </div>
            <img src={LogoSwu} class="Logo" alt="Logo" />
            <div className="Header">Srinakharinwirot University</div>
            <div className="Text">มหาวิทยาลัยศรีนครินทรวิโรฒ</div>
            <div className="Login">
              <form onSubmit={this.submitForm}>
                Username{" "}
                <input
                  style={{ borderRadius: 5 }}
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <br />
                Password{" "}
                <input
                  style={{ borderRadius: 5 }}
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <br />
                <tb class="TextApp"> for Admin </tb>
                <br />
                <Button
                  variant="outline-secondary"
                  style={{ borderRadius: 5 }}
                  type="submit"
                  onClick={() => this.onSubmit}
                >
                  Login
                </Button>
                <Credit />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Credit extends Component {
  render() {
    return (
      <div style={{ fontSize: "9px", marginTop: "12px" }}>
        <div>- by -</div>
        <div>- Computer Engineering SWU -</div>
      </div>
    );
  }
}
