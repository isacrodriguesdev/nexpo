import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Fontisto } from '~/app/icon';
// imports
// types
// components

type Props = {};

export default (props: Props) => {

   return (
      <View style={styles.inputHashContainer}>
         <TextInput
            placeholder="Endereço bitcoin"
            placeholderTextColor="rgba(255,255,255,0.3)"
            style={styles.inputHash} />
         <Fontisto name="qrcode" style={styles.inputHashIconQrCode} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {},
   inputHashContainer: {
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 2,
      backgroundColor: "rgba(0,0,10,.3)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      // elevation: 2
   },
   inputHash: {
      color: "white"
   },
   inputHashIconQrCode: {
      color: "rgba(255,255,255,0.99)",
      fontSize: 25
   },
});