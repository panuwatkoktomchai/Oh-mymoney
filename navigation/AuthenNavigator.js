import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const authentication = createStackNavigator({
  Login: { screen: LoginScreen},
  Regis: { screen: RegisterScreen},
});

export default authentication
