import React from "react";
import styled from "styled-components";
import Card from "./app/components/Card";
import {ScrollView, SafeAreaView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {NotificationIcon} from "./app/icons";
import Logo from "./app/components/Logo";


export default class App extends React.Component {
  render() {
    return (
        <Container>
            <SafeAreaView>
                <TitleBar>
                    <Title>Welcome back,</Title>
                    <Name>dude</Name>
                    <Avatar source={require("./assets/avatar.jpg")} />
                    <NotificationIcon
                        style={{ position: "absolute", right: 20, top: 5 }}
                    />
                </TitleBar>
                <ScrollView style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} horizontal={true}>
                    {logos.map((logo, index) => (
                        <Logo
                            key={index}
                            image={logo.image}
                            text={logo.text}
                        />
                    ))
                    }
                </ScrollView>
                <Subtitle>
                    Continue Learning
                </Subtitle>
                <ScrollView horizontal={true}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            image={card.image}
                            caption={card.caption}
                            logo={card.logo}
                            subtitle={card.subtitle}
                        />
                    ))
                    }
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const logos = [
    {
        image: require("./assets/logo-framerx.png"),
        text: "Framer X"
    },
    {
        image: require("./assets/logo-figma.png"),
        text: "Figma"
    },
    {
        image: require("./assets/logo-studio.png"),
        text: "Studio"
    },
    {
        image: require("./assets/logo-react.png"),
        text: "React"
    },
    {
        image: require("./assets/logo-swift.png"),
        text: "Swift"
    },
    {
        image: require("./assets/logo-sketch.png"),
        text: "Sketch"
    }
];

const cards = [
    {
        title: "React Native for Designers",
        image: require("./assets/background11.jpg"),
        subtitle: "React Native",
        caption: "1 of 12 sections",
        logo: require("./assets/logo-react.png")
    },
    {
        title: "Styled Components",
        image: require("./assets/background12.jpg"),
        subtitle: "React Native",
        caption: "2 of 12 sections",
        logo: require("./assets/logo-react.png")
    },
    {
        title: "Props and Icons",
        image: require("./assets/background13.jpg"),
        subtitle: "React Native",
        caption: "3 of 12 sections",
        logo: require("./assets/logo-react.png")
    },
    {
        title: "Static Data and Loop",
        image: require("./assets/background14.jpg"),
        subtitle: "React Native",
        caption: "4 of 12 sections",
        logo: require("./assets/logo-react.png")
    }
];
