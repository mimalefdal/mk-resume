import React, { Component } from "react";
import SectionComponent from "./components/SectionComponent";
import NavigationBar from "./components/NavigationBar";

import themes from "./styles/themes.json";

import "./styles/SectionComponents.css";
import "./styles/NavigationBar.css";
import "./App.css";

class App extends Component {
  state = {
    theme_navBar: themes.theme_1,
    theme1: themes.theme_1,
    theme2: themes.theme_2,
    theme3: themes.theme_3
  };

  changeTheme = prvTheme => {
    console.log("count of themes", Object.keys(themes).length);
    console.log("prvtheme Code", prvTheme.code);
    switch (prvTheme.code) {
      case "1":
        this.setState({
          theme_navBar: themes.theme_2,
          theme1: themes.theme_2,
          theme2: themes.theme_3,
          theme3: themes.theme_1
        });
        break;
      case "2":
        this.setState({
          theme_navBar: themes.theme_3,
          theme1: themes.theme_3,
          theme2: themes.theme_1,
          theme3: themes.theme_2
        });
        break;
      case "3":
        this.setState({
          theme_navBar: themes.theme_1,
          theme1: themes.theme_1,
          theme2: themes.theme_2,
          theme3: themes.theme_3
        });
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <NavigationBar
          theme={this.state.theme_navBar}
          changeTheme={this.changeTheme}
        />
        <SectionComponent
          theme={this.state.theme1}
          type="PersonalInfo"
          next="About"
        />
        <SectionComponent
          theme={this.state.theme2}
          type="About"
          next="Skills"
        />
        <SectionComponent
          theme={this.state.theme3}
          type="Skills"
          next="PersonalInfo"
        />
      </div>
    );
  }
}

export default App;

export const ChangeTheme = prvTheme => {
  console.log("from ChangeTheme", this);
  this.setState({ theme: { "--bkg-color": "red" } });
};
