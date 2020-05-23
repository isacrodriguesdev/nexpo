import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, FlatList } from 'react-native';
// imports
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from '@app/window';
import { screen } from '@app/index';
import font from '@app/font';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Button from '~/components/Button';
import { FontAwesome } from '~/app/icon';

type Props = {
   navigation: NavigationProp<never>
};

const coins = [
   {
      name: "Bitcoin",
      icon: require("~/assets/images/icons/btc.png"),
      total: 0.25780010,
      color: "#f2a733",
      prefix: "BTC"
   },
   {
      name: "Ethereum",
      icon: require("~/assets/images/icons/eth.png"),
      total: 78.10460000,
      color: "#454d8e",
      prefix: "ETH"
   },
   {
      name: "Litecoin",
      prefix: "LTC",
      color: "#A7A7A7",
      total: 2.67000000,
      icon: require("~/assets/images/icons/ltc.png")
   },
   {
      name: "Basic Attention Token",
      prefix: "BAT",
      color: "#C4303C",
      price: "4,78",
      balance: "0,00",
      total: 0.30000000,
      icon: require("~/assets/images/icons/bat.png")
   },
];

const historic = [
   {
      id: "0",
      type: "Enviado",
      icon: "arrow-up",
      total: 0.489058800,
      price: "R$508,97",
      date: "mar 20 as 10:28"
   },
   {
      id: "1",
      type: "Recebido",
      icon: "arrow-down",
      total: 0.019058800,
      price: "R$50,97",
      date: "mar 20 as 08:20"
   }
];

class WalletScreen extends Component<Props> {

   state = coins[0];

   totalCurrency(): JSX.Element {

      return (
         <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={[styles.totalCurrencyText, {
               color: this.state.color
            }]}>{this.state.total.toFixed(8)}
            </Text>
         </View>
      );
   }

   historic(item: any) {

      const isReceivedGreen = (color?: string) => {
         return item.total === "Recebido" ? "#2FE48F" : "white" || color;
      }

      const isReceivedCoinColor = (color?: string) => {
         return item.total === "Recebido" ? this.state.color : "white" || color;
      }

      const total = item.total.toFixed(8);

      return (
         <View style={styles.historic}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
               <FontAwesome name={item.icon} color="white" />
               <View style={styles.typeAndValueContainer}>
                  <Text style={[styles.typeText, {
                     color: isReceivedGreen()
                  }]}>{item.type}</Text>
                  <Text style={[styles.valueText]}>{item.price}</Text>
               </View>
            </View>

            <View style={styles.typeAndValueContainer}>
               <Text style={[styles.historicTotalCurrencyText]}>{total}</Text>
               <Text style={styles.historicDateText}>{item.date}</Text>
            </View>
         </View>
      );
   }

   render() {

      const buttonColorText = "rgba(245,245,255,.8)";
      const coin = this.state;
      const { navigate } = this.props.navigation;

      return (
         <ScrollView style={styles.container}>
            <View style={styles.header}>

               <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
               }}>
                  <View style={styles.coinNameAndPrice}>
                     <View style={styles.coinName}>
                        <Image source={coin.icon} style={{ width: 44, height: 44 }} />
                        <View style={{ marginLeft: 5 }}>
                           <Text style={styles.coinNameText}>{coin.name}</Text>
                           {this.totalCurrency()}
                        </View>
                     </View>
                  </View>

                  {/*  */}
               </View>

               <View style={styles.coinTotalPriceContainer}>
                  <Text style={[styles.coinTotalPriceText, {}]}>
                     R$0,58
                  </Text>
               </View>

               <View style={styles.buttonsContainer}>

                  <Button label="Receber"
                     event={{ onPress: () => navigate(screen.receive) }}
                     colors="none"
                     styleButtonText={{ color: buttonColorText }}
                     styleButton={[styles.button, { marginRight: 10 }]}
                     renderIcon={
                        <FontAwesome name="arrow-down"
                           color={buttonColorText} />
                     } />

                  <Button label="Enviar"
                     event={{ onPress: () => navigate(screen.submit) }}
                     colors="none"
                     styleButtonText={{ color: buttonColorText }}
                     styleButton={[styles.button, { marginLeft: 10 }]} renderIcon={
                        <FontAwesome name="arrow-up"
                           color={buttonColorText} />
                     } />

               </View>

            </View>

            <Text style={styles.titleHistoric}>
               Historico
            </Text>

            <View style={styles.historicContainer}>

               <FlatList
                  horizontal={false}
                  data={historic}
                  renderItem={({ item }) => this.historic(item)}
               />

            </View>

         </ScrollView>
      );
   }
}

export default WalletScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   header: {
      // flex: 1,
      justifyContent: "space-between",
      paddingTop: 20,
      paddingBottom: 5,
      height: height / 3
   },
   coinNameAndPrice: {
      // flexDirection: "row",
      alignItems: "flex-start",
      // justifyContent: "space-between"
   },
   coinName: {
      flexDirection: "row",
      alignItems: "center"
   },
   coinNameText: {
      fontFamily: font.QuicksandSemiBold,
      color: "rgba(255,255,255,0.99)",
      fontSize: 16
   },
   coinTotalPriceContainer: {
      justifyContent: "center",
      alignItems: "center"
   },
   totalCurrencyText: {
      color: "rgba(255,255,255,0.4)",
      fontSize: 16,
      fontFamily: font.MontserratSemiBold
   },
   coinTotalPriceText: {
      fontSize: 32,
      fontFamily: font.MontserratRegular,
      color: "rgba(255,255,255,0.99)",
   },
   button: {
      elevation: 0,
      // borderWidth: 1,
      backgroundColor: "rgba(255,255,255,.07)",
      // borderColor: "#7D35CF",
      width: (width) * 400
   },
   buttonsContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
   },
   titleHistoric: {
      marginTop: 20,
      marginBottom: 20,
      color: "rgba(255,255,255,.5)",
      fontFamily: font.QuicksandSemiBold,
      textTransform: "uppercase",
      fontSize: 13
   },
   historicContainer: {
      // alignItems: "center",
      // backgroundColor: "white",
      flex: 1,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      // elevation: 10
   },
   historic: {
      width: "100%",
      paddingHorizontal: 15,
      paddingVertical: 15,
      marginBottom: 5,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "rgba(0,0,0,0.2)"
   },
   typeAndValueContainer: {
      bottom: 6,
      marginLeft: 10
   },
   typeText: {
      fontFamily: font.QuicksandSemiBold,
      fontSize: 16,
      color: "rgba(250,250,255,.99)",
   },
   valueText: {
      fontFamily: font.QuicksandMedium,
      color: "rgba(250,250,255,.5)",
      fontSize: 15,
      textAlign: "left"
   },
   historicTotalCurrencyText: {
      fontFamily: font.QuicksandSemiBold,
      fontSize: 16,
      color: "rgba(250,250,255,.99)",
      textAlign: "right"
   },
   historicDateText: {
      color: "rgba(250,250,255,.5)",
      fontFamily: font.QuicksandMedium,
   }
});