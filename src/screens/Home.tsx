import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
// imports
// types
import { NavigationProp } from '@react-navigation/native';
// components
import { Header, Currency } from '~/screens/home/index';
import { font } from '~/app';
import { width } from '~/app/window';

const coins = [
   {
      name: "Bitcoin",
      prefix: "BTC",
      color: "#FEA910",
      cost: "9365,05",
      total: 0.23500000,
      icon: require("~/assets/images/icons/btc.png")
   },
   {
      name: "Ethereum",
      prefix: "ETH",
      color: "#464B8F",
      cost: "9365,05",
      total: 8.23500000,
      icon: require("~/assets/images/icons/eth.png")
   },
   {
      name: "Litecoin",
      prefix: "LTC",
      color: "#A7A7A7",
      price: "409,18",
      cost: "0,00",
      total: 0.00000000,
      icon: require("~/assets/images/icons/ltc.png")
   },
   {
      name: "BAT",
      prefix: "BAT",
      color: "#C4303C",
      price: "4,78",
      cost: "0,00",
      total: 0.30000000,
      icon: require("~/assets/images/icons/bat.png")
   },
]

type Props = {
   navigation: NavigationProp<any>
};

class HomeScreen extends Component<Props> {

   state = {};

   render() {

      const { navigation } = this.props;

      return (
         <ScrollView style={styles.container} 
            showsVerticalScrollIndicator={false}>
               
            <Header navigation={navigation} />
            <Text style={styles.titleCurrency}>
               Cryptomoedas
            </Text>

            {coins.map(item => <Currency data={item} key={item.name} />)}

         </ScrollView>
      );
   }
}

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   titleCurrency: {
      marginTop: 20,
      marginBottom: 20,
      color: "rgba(255,255,255,.5)",
      fontFamily: font.QuicksandSemiBold,
      textTransform: "uppercase",
      fontSize: 13
   }
});