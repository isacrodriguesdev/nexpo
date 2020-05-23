import React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import font from '~/app/font';
import { width } from '~/app/window';
// imports
// types
// components

type Total = {
   value: string,
   cost?: string,
   textColor?: string
};

type Info = {
   networkFee?: string,
   nexpoFee: string,
   priority: string,
   percentage?: string,
};

type Props = {
   style?: StyleProp<ViewStyle>,
   values: Info,
   total: Total
};

export default (props: Props) => {

   const networkFee = (
      <View style={styles.txInfoContainer}>
         <Text style={styles.txInfoLabelText}>Taxa da Rede</Text>
         <Text style={styles.txInfoValueText}>{props.values.networkFee}</Text>
      </View>
   );

   const cost = (
      <View style={{ alignItems: "flex-end" }}>
         <Text style={{ fontSize: 17, color: "rgba(255,255,255,.4)", fontFamily: font.QuicksandMedium }}>
            {props.total.cost}
         </Text>
      </View>
   );

   return (
      <View style={styles.container}>

         {props.values.networkFee ? networkFee : null}

         <View style={styles.txInfoContainer}>
            <Text style={styles.txInfoLabelText}>Taxa NEXPO</Text>
            <Text style={styles.txInfoLabelText}>{props.values.percentage}</Text>
            <Text style={styles.txInfoValueText}>{props.values.nexpoFee}</Text>
         </View>

         <View style={styles.txInfoContainer}>
            <Text style={styles.txInfoLabelText}>Prioridade</Text>
            <Text style={styles.txInfoValueText}>{props.values.priority}</Text>
         </View>

         <View style={[styles.txInfoContainer, { marginTop: 10 }]}>

            <Text style={[styles.txInfoLabelText, { fontSize: 22 }]}>
               Total
             </Text>

            <View style={{alignItems: "flex-end"}}>

               <Text style={[styles.txInfoValueText, { color: "white" },
               { color: props.total.textColor, fontSize: 22 }]}>
                  {props.total.value}
               </Text>

               {props.total.cost ? cost : null}

            </View>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      justifyContent: "center",
   },
   txInfoContainer: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginVertical: 3,
      width: "82%"
   },
   txInfoLabelText: {
      color: "rgba(255,255,255,.4)",
      fontSize: 15,
      // textTransform: "uppercase",
      fontFamily: font.QuicksandMedium
   },
   txInfoValueText: {
      color: "white",
      fontFamily: font.QuicksandMedium,
      fontSize: 15
   },
   txInfoSymbolText: {
      color: "white",
      fontFamily: font.PoppinsMedium,
      fontSize: 15
   },
});