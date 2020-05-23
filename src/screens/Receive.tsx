import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
// imports
import font from '@app/font';
import { height } from '@app/window';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Button from '~/components/Button';
import QRCode from '~/screens/receive/QRCode';

type Props = {
   navigation: NavigationProp<never>
};

class ReceiveScreen extends Component<Props> {

   state = {};

   render() {

      const { } = this.props;

      return (
         <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.container}>

               <View style={[styles.imageCurrencyContainer, styles.itemContainer]}>
                  <Image
                     source={require("~/assets/images/icons/btc.png")}
                     style={{ width: 60, height: 60 }}
                  />
               </View>

               <QRCode style={styles.itemContainer} />

               <View style={[styles.codeHashContainer, styles.itemContainer]}>
                  <TouchableWithoutFeedback>
                     <Text style={styles.codeHashText}>
                        0x782c93e1c530a283ef738a58b5671a8fc2d8153f
                     </Text>
                  </TouchableWithoutFeedback>
               </View>

               <View style={[styles.buttonShareContainer, styles.itemContainer]}>
                  <Button label="Compartilhar"
                     styleButton={{ paddingHorizontal: 30 }}
                     styleButtonText={{ fontSize: 13 }}
                  />
               </View>

            </View>

         </ScrollView>
      );
   }
}

export default ReceiveScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // justifyContent: "space-between", 
   },
   itemContainer: {
      marginVertical: (height / 100) * 4
   },
   imageCurrencyContainer: {
      alignItems: "center"
   },
   codeHashContainer: {
      paddingHorizontal: 10,
      paddingVertical: 14,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "space-between"
   },
   codeHashText: {
      color: "rgba(255,255,255,0.5)",
      fontFamily: font.MontserratMedium,
      fontSize: 14,
      textAlign: "center"
   },
   buttonShareContainer: {
      alignItems: "center",
      justifyContent: "flex-end"
   }
});