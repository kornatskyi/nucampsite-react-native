import React, { Component } from "react";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View } from "react-native";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectCampsite: 0,
    };
  }
  onCampsiteSelect(campsiteId) {
    this.setState({ selectCampsite: campsiteId });
  }
  render() {
   

    return (
      <View style={{ flex: 1 }}>
        <Directory
          onPress={(campsiteId) => this.onCampsiteSelect(campsiteId)}
          campsites={this.state.campsites}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter((campsite) => {
              console.log("select campsite" , this.state.selectCampsite);
              return campsite.id === this.state.selectCampsite;
            })[0]
          }
        />
      </View>
    );
  }
}
