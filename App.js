import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Image,Dimensions, TouchableNativeFeedback, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { StackNavigator, DrawerNavigator, SafeAreaView, withNavigation, NavigationActions } from 'react-navigation';
import MainScreen from './screens/Main'
import GroupScreen from './screens/Group'
import SearchScreen from './screens/Search'
import LoginScreen from './screens/Login'
import CartScreen from './screens/Cart'
import ItemScreen from './screens/Item'
import OfferScreen from './screens/Offer'
import DrawerContent from './components/DrawerContent'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { getFontSize } from './lib/Helper'
import { Input, Button } from 'react-native-elements'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

const store = configureStore()

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const win = Dimensions.get("window")

const MainStack = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Group: {
      screen: GroupScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    initialRouteName: 'Main',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);



const RootStack1 = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Item: {
      screen: ItemScreen,
      navigationOptions: {
        headerMode: 'screen',
        mode: "card"
      }
    },
    Offer: {
      screen: OfferScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

const RootStack = DrawerNavigator({
  Main: {
    screen: RootStack1,
  },
  Group: {
    screen: GroupScreen
  }
},
{contentComponent: DrawerContent});


export default class App extends React.Component {
  render() {
    return <Provider store={store}>
            <RootStack {...this.props} />
          </Provider>;
  }
}
