import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

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
            <Button
              title="Send Email"
              buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
              icon={<Icon
                name='envelope-o'
                type='font-awesome'
                color='#fff'
                iconStyle={{ marginRight: 10 }}
              />}
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}
