import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';
// imports
import LinearGradient from 'react-native-linear-gradient';
import font from '@app/font';
import { width } from '~/app/window';
import { primaryColors, secundaryColors } from '~/app/colors';
// types

type ColorPosition = {
   x: number,
   y: number
}

type Props = {
   styleButton?: ViewStyle[] | ViewStyle,
   styleButtonText?: TextStyle,
   label: string,
   renderIcon?: JSX.Element,
   colors?: string[] | string,
   start?: ColorPosition,
   end?: ColorPosition,
   event?: TouchableOpacityProps,
   // width?: number | string,
   // height?: number | string
};

export default (props: Props) => {

   const start = { x: 0, y: 2 };
   const end = { x: 1, y: 0 };

   const setColors = () => {

      if (!props.colors)
         return primaryColors
      else if (props.colors === "none")
         return ["transparent", "transparent"];
      else 
         return [...props.colors]
   }

   return (
      <TouchableOpacity {...props.event}>
         <LinearGradient
            colors={setColors()}
            start={props.start || start}
            end={props.end || end}
            style={[
               // { width: props.width || width * 420, height: props.height || 50 },
               styles.button, props.styleButton,
            ]}>

            {
               props.renderIcon ?
                  <View style={styles.buttonIcon}>
                     <Text>{props.renderIcon}</Text>
                  </View>
                  : null
            }

            <Text style={[styles.buttonText, props.styleButtonText]}>
               {props.label}
            </Text>
         </LinearGradient>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   button: {
      elevation: 1,
      paddingHorizontal: 20,
      paddingVertical: 11,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
   },
   buttonText: {
      fontSize: 13,
      color: "white",
      textTransform: "uppercase",
      fontFamily: font.MontserratSemiBold
   },
   buttonIcon: {
      marginRight: 5
   }
});