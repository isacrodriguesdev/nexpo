import React from 'react';
import { View, StyleSheet, Image, StyleProp, ViewStyle } from 'react-native';
import { width } from '~/app/window';
// imports
// types
// components

type Props = {
   style?: StyleProp<ViewStyle>
};

export default (props: Props) => {

   return (
      <View style={[styles.container, props.style]}>
         <View style={styles.qrcodeBackground}>
            <Image source={require("~/assets/images/code.png")}
               style={{
                  width: width * 550,
                  height: width * 550
               }} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center"
   },
   qrcodeBackground: {
      backgroundColor: "white", 
      padding: 10, 
      borderRadius: 20, 
      elevation: 3
   }
});