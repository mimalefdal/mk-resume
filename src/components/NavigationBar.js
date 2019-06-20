import React, { Component } from "react";
import magicwand from "../assets/magic-wand.svg";
import { Link } from "react-scroll";

class NavigationBar extends Component {
  render() {
    return (
      <div className="navBody" style={this.props.theme}>
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "25px"
            }}
          >
            <div
              style={{
                justifyContent: "center",
                maxheight: "100%",
                cursor: "pointer"
              }}
              onClick={() => this.props.changeTheme(this.props.theme)}
            >
              <img src={magicwand} style={{ height: "3vh" }} />
              <p style={{ fontSize: "1vh", margin: "0" }}>Click Me</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 5,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "25px"
            }}
          >
            <Link to="Skills" smooth={true}>
              <p
                style={{
                  fontSize: "2.5vh",
                  cursor: "pointer",
                  textAlign: "right",
                  marginRight: "10px"
                }}
              >
                My Skills
              </p>
            </Link>
            <Link to="About" smooth={true}>
              <p
                style={{
                  fontSize: "2.5vh",
                  cursor: "pointer",
                  textAlign: "right",
                  marginRight: "10px"
                }}
              >
                About me
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
