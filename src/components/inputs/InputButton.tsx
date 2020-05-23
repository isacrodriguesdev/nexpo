import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import font from '~/app/font';
// imports
// types
// components
import Button from '~/components/Button';
import { FontAwesome } from '~/app/icon';

type Props = {};

export default (props: Props) => {

   return (
      <>
      <Text style={{
         color: "rgba(255,255,255,0.4)",
         fontSize: 15,
         fontFamily: font.UbuntuRegular,
         marginBottom: 5
      }}>Quantidade</Text>
      <View style={styles.container}>

         {/* <TextInput style={[styles.inputTotal, { color: "white", fontFamily: font.PoppinsRegular, fontSize: 40 }]}
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor={"rgba(255,255,255,0.99)"} /> */}

         <View style={styles.inputContainer}>

            {/* <Text style={[styles.inputTotal]}>R$</Text> */}
            <TextInput style={[styles.inputTotal]}
               placeholder="0,00"
               placeholderTextColor="rgba(255,255,255,0.99)"
               keyboardType="numeric"
            />

         </View>

         <Button label="BRL" styleButton={{
            borderRadius: 10,
            height: 55,
            paddingHorizontal: 30
         }} styleButtonText={{
            fontSize: 16
         }}
            renderIcon={<FontAwesome name="undo-alt" color="white" size={14} />} 
         />

      </View>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
   },
   inputContainer: {
      flexDirection: "row",
       alignItems: "center", 
       flex: 1,
       backgroundColor: "rgba(255,255,255,.07)", 
       paddingHorizontal: 10,
       borderRadius: 10, marginRight: 7,
       height: 55
   },
   inputTotal: {
      color: "white",
      fontSize: 28,
      fontFamily: font.QuicksandRegular,
      flex: 1
   },
});