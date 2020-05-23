import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
// imports
import { font } from '@app/index';
// types
import { StackNavigationProp } from '@react-navigation/stack';
// components

type Props = {
   navigation: StackNavigationProp<any>,
   title: string
};

export default (props: Props) => {

   return (
      <View style={styles.container}>
         <TouchableOpacity
            style={{
               position: "absolute", 
               paddingVertical: styles.container.paddingVertical
            }}
            onPressIn={() => props.navigation.goBack() }>
            <Image source={require("~/assets/images/icons/left-arrow.png")}
               style={{ width: 20, height: 20 }} />
         </TouchableOpacity>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 14,
   },
   titleContainer: {
      alignItems: "center",
      width: "100%"
   },
   title: {
      fontSize: 14,
      textTransform: "uppercase",
      fontFamily: font.QuicksandSemiBold,
      color: "rgba(255,255,255,.5)",
   },
});