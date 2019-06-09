import React from "react";
import {
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import Swiper from "react-native-deck-swiper";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default class ChooseExpert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        {/* <Text style={styles.text}>
          {card} - {index}
        </Text> */}
        <View style={{ paddingLeft: 15, paddingHorizontal: 15 }}>
          <View style={styles.onlineWr}>
            <Image
              style={styles.online}
              source={require("../assets/images/online.png")}
            />
            <Text style={styles.onlineStatus}> Online Now</Text>
          </View>
          <View style={styles.profileWr}>
            <View style={styles.avatar}>
              <Text> Image </Text>
            </View>
            <View>
              <Text style={styles.name}>Kim Jacobs</Text>
              <Text style={styles.title}>Registered Nurse</Text>
              <Text style={styles.title}> Stars</Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionTxt}>
              Kim has 10 years of experience in women's healthcare. She
              graduated from UCF College of Nursing
            </Text>
          </View>
          <View style={styles.specialtiesWr}>
            <Text style={styles.specialtiesHeader}>Specialties</Text>
            <View style={styles.specList}>
              <Text style={styles.spec}>Period</Text>
              <Text style={styles.spec}>Pregnancy</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.cancelAndFilter}>
          <TouchableOpacity>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/images/filter.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionT}>
            Is it normal to spot between my periods?
          </Text>
        </View>
        <View style={styles.cards}>
          <Swiper
            useViewOverflow={Platform.OS === "ios"}
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={() => this.onSwiped("general")}
            onSwipedLeft={() => this.onSwiped("left")}
            onSwipedRight={() => this.onSwiped("right")}
            onSwipedTop={() => this.onSwiped("top")}
            onSwipedBottom={() => this.onSwiped("bottom")}
            onTapCard={this.swipeLeft}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            cardVerticalMargin={80}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            stackSeparation={15}
            overlayLabels={{
              bottom: {
                title: "BLEAH",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }
                }
              },
              left: {
                title: "NOPE",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: "LIKE",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              },
              top: {
                title: "SUPER LIKE",
                style: {
                  label: {
                    backgroundColor: "black",
                    borderColor: "black",
                    color: "white",
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }
                }
              }
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          >
            {/* <Button
              onPress={() => this.swiper.swipeBack()}
              title="Swipe Back"
            /> */}
          </Swiper>
        </View>
        <View style={styles.decisions}>
          {/* <TouchableOpacity style={styles.decisionButton1}>
            <Text style={styles.text1}>NEXT</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.decisionButton1}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text style={styles.text1}>ASK THIS EXPERT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff"
  },
  cancelAndFilter: {
    flex: 0.5,
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  question: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  questionT: {
    fontSize: 18,
    color: "#333333"
  },
  cards: {
    flex: 4.5,
    backgroundColor: "pink"
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    height: 370,
    width: 280,
    alignSelf: "center",
    bottom: 60,
    flexDirection: "column"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent"
  },
  decisions: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  cancel: {
    fontSize: 17,
    color: "#00267d"
  },
  swiper: {
    backgroundColor: "grey"
  },
  decisionButton1: {
    width: 170,
    height: 50,
    borderRadius: 20,
    borderColor: "#00267d",
    borderWidth: 1,
    color: "#00267d",
    justifyContent: "center",
    alignItems: "center"
  },
  decisionButton2: {
    backgroundColor: "#00267d",
    width: 170,
    height: 50,
    borderRadius: 20,
    borderColor: "#00267d",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text1: {
    color: "#00267d",
    fontWeight: "400",
    fontSize: 18
  },
  text2: {
    color: "white",
    fontWeight: "400",
    fontSize: 18
  },
  avatar: {
    backgroundColor: "pink",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  onlineWr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5
  },
  onlineStatus: {
    color: "#50da68",
    fontSize: 10
  },
  profileWr: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },
  descriptionTxt: {
    fontFamily: "nunito-light",
    fontSize: 14
  },
  name: {
    fontFamily: "montserrat-semibold",
    fontSize: 20
  },
  title: {
    fontFamily: "nunito-light",
    fontSize: 12,
    paddingTop: 4
  },
  specialtiesWr: {
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 5
  },
  specialtiesHeader: {
    fontFamily: "montserrat-semibold",
    fontSize: 16
  },
  specList: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 20
  },
  spec: {
    fontFamily: "nunito",
    paddingRight: 20
  }
});
