import React from 'react';
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DrawerList from './components/DrawerList';
import WhiteCard from './components/WhiteCard';

const windowHeight = Dimensions.get('window').height;

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class InboxScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

class searchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>search</Text>
      </View>
    );
  }
}

class profileScreen extends React.Component {

  state = {
    isModalVisible: false
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'whiteSmoke' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => {
            this.setState({
              isModalVisible: false
            })
          }}
        >
          <View style={styles.modalView}>
            <DrawerList />
          </View>
        </Modal>

        <ImageBackground source={require('./images/woman.jpg')} style={{ backgroundColor: 'red', width: '100%', height: 300, }}>
          <View style={{ position: 'absolute', left: 20, top: 20, justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.setState({ isModalVisible: true })}>
              <Image source={require('./images/menu.png')} style={{ height: 25, width: 25, tintColor: 'white', marginRight: 15 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'white' }}>Profile</Text>
          </View>
          <View style={{ position: 'absolute', left: 20, bottom: 25, justifyContent: 'center', }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'left' }}>Edwina</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/pin.png')} style={{ height: 15, width: 15, tintColor: 'white', marginRight: 5 }} />
              <Text style={{ fontSize: 18, color: 'white', textAlign: 'left' }}>Bangalore,India</Text>
            </View>
          </View>
        </ImageBackground>

        <ScrollView style={{ width: '100%', backgroundColor: 'white' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
          <WhiteCard />
          <WhiteCard />
        </ScrollView>
      </View>
    );
  }
}


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}








const TabNavigator = createBottomTabNavigator({
  INBOX: {
    screen: InboxScreen, navigationOptions: {
      title: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/inbox.png')}
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  SEARCH: {
    screen: searchScreen, navigationOptions: {
      title: 'SEARCH',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/loupe.png')}
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  REFER: {
    screen: profileScreen, navigationOptions: {
      title: 'REFER',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/refer.png')}
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  PROFILE: {
    screen: profileScreen, navigationOptions: {
      title: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/user.png')}
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  MORE: {
    screen: SettingsScreen, navigationOptions: {
      title: 'MORE',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/menu.png')}
          style={{ width: 20, height: 20, tintColor: tintColor }}
        />
      )
    }
  },
  // PROFILE: profileScreen,
  // MORE: SettingsScreen,
}, {
  initialRouteName: 'PROFILE',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'whitesmoke',
      borderTopWidth: 0,
      height: 60,
      paddingVertical: 10
    }
  }
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: '100%'
  },
  modalView: {
    backgroundColor: "white",
    height: windowHeight,
    width: '70%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default createAppContainer(TabNavigator);