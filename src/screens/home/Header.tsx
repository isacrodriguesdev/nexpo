import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// imports
import LinearGradient from 'react-native-linear-gradient';
import { SimpleLineIcons } from "@app/icon";
import font from '@app/font';
import { screen } from '@app/index';
import { width, height } from '@app/window';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Button from '~/components/Button';

type Props = {
   navigation: NavigationProp<any>
};

export default (props: Props) => {

   const [balance, setBalance] = useState("0,00");

   return (
      <LinearGradient style={styles.header}
         colors={["transparent", "transparent"]}
         start={{ x: 2, y: 1 }} end={{ x: 0, y: 1 }}>

         <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 3 }}>
            <Text style={styles.appNameText}>Nexpo</Text>
            <SimpleLineIcons name="settings"
               color="rgba(255,255,255,0.4)"
               size={21} style={{marginTop: 5}} />
         </View>

         <View style={{ marginLeft: width * 100 }}>
            <Text style={styles.titleBalanceText}>Saldo total</Text>
            <View style={{
               flexDirection: "row", alignItems: "flex-end",
               bottom: 4
            }}>
               <Text style={styles.balanceSymbolText}>R$</Text>
               <Text style={styles.balanceText}>
                  {balance}
               </Text>
            </View>
         </View>

         <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <Button label="Retirar" styleButton={{
               elevation: 0,
               backgroundColor: "transparent",
               borderColor: "rgba(255,255,255,0.1)",
               borderWidth: 1,
               width: (width * 500) - 35
            }} colors="none" event={{
               onPress: () => null
            }} />
            <Button label="Adicionar" styleButton={{
               elevation: 10, 
               width: (width * 500) - 35
            }} event={{
               onPress: () => props.navigation.navigate(screen.deposit)
            }} />
         </View>

      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   container: {},
   header: {
      height: (height / 100) * 30,
      width: "100%",
      justifyContent: "space-between",
   },
   appNameText: {
      fontSize: 20,
      color: "#2FE48F",
      textTransform: "uppercase",
      fontFamily: font.QuicksandBold
   },
   titleBalanceText: {
      color: "rgba(255,255,255,0.4)",
      fontFamily: font.QuicksandSemiBold,
      textTransform: "uppercase",
      fontSize: 13, marginBottom: 4
   },
   balanceText: {
      color: "white",
      fontSize: 27,
      fontFamily: font.MontserratSemiBold,
   },
   balanceSymbolText: {
      color: "white",
      fontSize: 27,
      fontFamily: font.QuicksandSemiBold,
      // bottom: 2
   }
});