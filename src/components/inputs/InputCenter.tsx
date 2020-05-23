import React from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import font from '~/app/font';
// imports
// types
// components

type Props = {
   style?: StyleProp<ViewStyle>
};

export default (props: Props) => {

   return (
      <View style={[styles.container, props.style]}>
         {/* <TextInput style={[styles.inputTotal, { color: "white", fontFamily: font.PoppinsRegular, fontSize: 40 }]}
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor={"rgba(255,255,255,0.99)"} /> */}

         <View style={{ flexDirection: "row", alignItems: "center" }}>

            {/* <Text style={[styles.inputTotal]}>R$</Text> */}
            <TextInput style={[styles.inputTotal]}
               placeholder="R$0,00"
               placeholderTextColor="rgba(255,255,255,0.99)"
               keyboardType="numeric"
            />
         </View>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flex: 1,
      // borderWidth: 1
   },
   inputTotal: {
      color: "white",
      fontSize: 45,
      fontFamily: font.QuicksandLight,
      flex: 1,
      textAlign: "center",
      // borderWidth: 1
   },
});