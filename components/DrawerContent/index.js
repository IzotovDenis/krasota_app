import React from 'react'

import { NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { getFontSize } from '../../lib/Helper'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const win = Dimensions.get("window")

class DrawerContent extends React.Component {
  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return <ScrollView>
<View style={styles.menu} >
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('../../img/logo.png')}  resizeMode={'stretch'} style={{width: 150, height: 101, justifyContent: 'center'} } />
        </View>
          <View style={styles.buttonGroup}>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={()=> this.navigateToScreen('Login')}>
                <View style={[styles.btnWrapper, styles.btnSignInWrapper]}>
                  <Text style={[styles.btnText, styles.btnSignInText]}> ВОЙТИ </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={()=> this.setState({menuShown: false})}>
                <View style={[styles.btnWrapper, styles.btnSignUpWrapper]}>
                  <Text style={[styles.btnText, styles.btnSignUpText]}> РЕГИСТРАЦИЯ </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.menuBlock}>
          <View style={styles.menuContainer}>
            <View style={styles.menuIcon}>
              <Icon name="bag" size={20} color="#fff" />
            </View>
            <TouchableOpacity onPress={()=> this.navigateToScreen('Cart')}>
              <View>
                <Text style={styles.menuText}>Моя корзина</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.menuContainer}>
            <Icon name="star" size={20} color="#fff" />
            <Text style={styles.menuText}>Избранное</Text>
          </View>
        </View>
        <View style={styles.menuBlock}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Каталог</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Новинки</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Акции</Text>
        </View>
        </View>
        <View style={styles.menuBlock}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Главная</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Способы оплаты</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Помощь</Text>
          </View>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>О нас</Text>
        </View>
        </View>
      </ScrollView>
        </View>
  </ScrollView> 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItem: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex:1
  },
  footer: {
    backgroundColor: "white",
    height: 60,
    width: win.width,
    position: 'absolute',
    bottom: 0,
  },
  buttonBuy: {
    borderColor: '#2b384b',
    borderWidth: 2,
    backgroundColor: "#fff",
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150
  },
  buttonBuyLabel: {
    color: "#2b384b" 
  },
menuText: {
    color: '#fff',
    fontSize: getFontSize(12),
    fontWeight: "400",
    paddingLeft: 10
  },
  menuContainer: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 3,
    alignItems:'center',
    flexDirection: 'row',
    width: "100%"
  },
  menuBlock: {
    paddingTop: 10
  },
  logoContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonGroup: {
    padding: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  btnWrapper: {
    borderWidth: 2, 
    padding: 8, 
    borderColor: "#fff",
    paddingLeft: 12,
    paddingRight: 12
  },
  btnSignInWrapper: {
    backgroundColor: "#fff",
  },
  btnSignUpWrapper: {
    backgroundColor: "#2b384b"
  },
  btnText: {
    fontSize: 14, 
    fontWeight: "500"
  },
  btnSignInText: {
    color:"#2b384b"
  },
  btnSignUpText: {
    color: "#fff"
  },
  menu: {
    maxWidth: 300,
    width: 300,
    paddingTop: 40,
    paddingLeft: 10,
    height: win.height,
    backgroundColor: '#2b384b'
  },
  signUpButtonText: {
    fontFamily: 'bold',
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: 50,
    height: 45,
  },
});


export default DrawerContent