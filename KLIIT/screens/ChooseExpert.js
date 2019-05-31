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
        <Text style={styles.text}>
          {card} - {index}
        </Text>
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
          <Text>1</Text>
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
    justifyContent: "center",
    backgroundColor: "white",
    height: 350,
    width: 250,
    alignSelf: "center",
    bottom: 40
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
    backgroundColor: "grey",
    top: 100
  },
  cancel: {
    fontSize: 17,
    color: "#00267d"
  },
  swiper: {
    backgroundColor: "grey"
  }
});
