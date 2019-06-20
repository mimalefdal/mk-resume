import React, { Component } from "react";

class SkillCard extends Component {
  render() {
    let { skilItem } = this.props;
    return (
      <div className="skillCard" style={{}}>
        <img src={skilItem.image} />

        <p>{skilItem.title}</p>
      </div>
    );
  }
}

export default SkillCard;
