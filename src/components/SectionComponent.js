import React, { Component } from "react";
import arrowDown from "../assets/arrow-down.svg";
import data from "../data/ownerInfo.json";
import SkillCard from "./SkillCard";

import { SocialIcon } from "react-social-icons";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import SnowStorm from "react-snowstorm";

class SectionComponent extends Component {
  constructor(props) {
    super(props);

    // this._ChangeTheme = this.props.ChangeTheme;
  }

  render() {
    return (
      <ReactScrollWheelHandler
        upHandler={() => scroll.scrollMore(-window.innerHeight)}
        downHandler={() => {
          scroll.scrollMore(window.innerHeight);
        }}
      >
        <Element name={this.props.type}>
          <div className="body" style={this.props.theme}>
            {this.props.type === "PersonalInfo" && (
              <div style={{ verticalAlign: "middle", margin: "auto" }}>
                <SnowStorm excludeMobile={false} />
                <div className="greeting" style={{}} onClick={() => {}}>
                  Hi! I'm {data.PersonalInfo.name}
                </div>
                <div className="mainJobTitles">
                  {data.PersonalInfo.mainTitles}
                </div>
                <div className="linksDiv">
                  {Object.keys(data.PersonalInfo.mediaLinks).map(key => {
                    console.log(data.PersonalInfo.mediaLinks[key]);
                    return (
                      <SocialIcon
                        className="links"
                        url={data.PersonalInfo.mediaLinks[key]}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {this.props.type === "About" && (
              <div style={{ verticalAlign: "middle", margin: "auto" }}>
                <div className="aboutBody">
                  <p className="about">About</p>
                  <p className="aboutTitle">{data.About.title}</p>
                  <p className="aboutDetail">{data.About.detail}</p>
                </div>
              </div>
            )}

            {this.props.type === "Skills" && (
              <div className="skillsBody">
                <p className="mySkills">My Skills</p>
                <div className="skillCardsBody">
                  {Object.keys(data.Skills).map(key => {
                    let skilItem = data.Skills[key];
                    return <SkillCard skilItem={skilItem} />;
                  })}
                </div>
              </div>
            )}
            <Link to={this.props.next} smooth={true}>
              <img src={arrowDown} className="scrollicon" />
            </Link>
          </div>
        </Element>
      </ReactScrollWheelHandler>
    );
  }
}

export default SectionComponent;
