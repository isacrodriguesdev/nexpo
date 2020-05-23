import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// imports
import screen from '@app/screen';
import { paddingHorizontal } from '@app/window';
import { backgroundColor, primaryColor } from '@app/colors';
// screens
import Home from '~/screens/Home';
import Wallet from '~/screens/Wallet';
import Receive from '~/screens/Receive';
import Submit from '~/screens/Submit';
import Desposit from '~/screens/Deposit';
import MarketBuy from '~/screens/MarketBuy';
// components
import Header from '~/components/Header';

const { Navigator, Screen } = createStackNavigator();

const screenStyle: StyleProp<ViewStyle> = {
  backgroundColor, paddingHorizontal
}

export default () => {

  return (
    <NavigationContainer theme={{ colors: { background: "#fff" } }}>
      <Navigator
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: false,
        }}
        initialRouteName={
          screen.home
        }
        headerMode="screen">

        <Screen name="home" component={Home} options={{
          header: () => null,
          cardStyle: {
            backgroundColor: backgroundColor,
            paddingHorizontal: 15,
            paddingVertical: 7
          }
        }} />
        <Screen name="wallet" component={Wallet} options={{
          header: () => null,
          cardStyle: [{ ...screenStyle }]
        }} />

        <Screen name="receive" component={Receive} options={{
          header: (props) => <Header title="Receber" {...props} />,
          cardStyle: [{ ...screenStyle }]
        }} />

        <Screen name="submit" component={Submit} options={{
          header: (props) => <Header title="Enviar" {...props} />,
          cardStyle: [{ ...screenStyle }],

        }} />

        <Screen name="deposit" component={Desposit} options={{
          header: (props) => <Header title="Depositar" {...props} />,
          cardStyle: [{ ...screenStyle }]
        }} />

        <Screen name="marketbuy" component={MarketBuy} options={{
          header: (props) => <Header title="Comprar" {...props} />,
          cardStyle: [{ ...screenStyle }]
        }} />

      </Navigator>
    </NavigationContainer>
  )
}
