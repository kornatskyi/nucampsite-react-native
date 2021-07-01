import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

export default class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };
  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card title="Contact information" wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>
              {"1 Nucamp Way \nSeattle,WA 98001 \nU.S.A."}
            </Text>
            <Text>{"Phone: 1-206-555-1234 Email: \ncampsites@nucamp.co"}</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}
