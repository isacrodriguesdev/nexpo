import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import font from '~/app/font';
import { FontAwesome } from '~/app/icon';
import { width } from '~/app/window';
import { primaryColors } from '~/app/colors';
// imports
// types
// components
import Button from '~/components/Button';

type Props = {
};

export default (props: Props) => {

   const buttonChange = (
      <View>
         <Button label="BRL"
            colors={primaryColors}
            renderIcon={<FontAwesome name="undo-alt" color="white" />}
            styleButton={{
               width: width * 225,
               height: 38,
               borderRadius: 10
            }}
         />
      </View>
   );

   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.titleTotalWalletText}>Saldo</Text>
            <Text style={[styles.balanceText, { bottom: 4 }]}>
               <Text style={{ fontFamily: font.QuicksandMedium }}>R$</Text>
                  785,02
               </Text>
         </View>

         { buttonChange }

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