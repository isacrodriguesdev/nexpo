import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import font from '~/app/font';
// imports
// types
// components

type Props = {
};

export default (props: Props) => {

   const currency = (
      <View>
         <Text style={styles.titleTotalWalletText}>Carteira</Text>
         <View style={{
            flexDirection: "row", alignItems: "center", bottom: 2
         }}>
            <Image
               source={require("~/assets/images/icons/btc.png")}
               style={{ width: 22, height: 22, marginRight: 5 }}
            />
            <Text style={[styles.totalWalletText, {
               color: "rgba(255, 185, 32, .99)"
            }]}>
               {0.23780000}
            </Text>
         </View>
      </View>
   );

   return (
      <View style={styles.container}>

         { currency }

         <View>
            <Text style={styles.titleTotalWalletText}>Saldo</Text>
            <Text style={[styles.balanceText, { bottom: 4 }]}>
            <Text style={{ fontFamily: font.QuicksandMedium }}>R$</Text>
               0,00
            </Text>
         </View>


      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 12,
   },
   titleTotalWalletText: {
      color: "rgba(255,255,255,.4)",
      fontFamily: font.PoppinsRegular,
      fontSize: 14, marginBottom: 2
   },
   totalWalletText: {
      fontFamily: font.PoppinsMedium,
      fontSize: 16, top: 2
   },
   balanceText: {
      color: "white",
      fontSize: 19,
      fontFamily: font.PoppinsRegular,
   }
});