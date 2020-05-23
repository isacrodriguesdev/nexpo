import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { font } from '@app/index';
import { secundaryColors, primaryColor } from '@app/colors';
// imports
// types
// components
import Button from '~/components/Button';
import { SimpleLineIcons } from '~/app/icon';

type CurrencyData = {
   name: string,
   prefix: string,
   total: number,
   cost: string,
   icon: any,
   color: string
}

type Props = {
   data: CurrencyData,
};

export default (props: Props) => {

   const data = props.data;
   const [open, setOpen] = useState(false);

   return (
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
         <View style={styles.container}>
            <View style={[styles.tabTopContainer]}>
               <View style={{ flexDirection: "row", alignItems: "center", }}>
                  <Image source={data.icon} style={styles.currencyImage} />
                  <View style={{ marginLeft: 10 }}>
                     <Text style={styles.currencyName}>{data.name}</Text>
                     <Text style={styles.currencyPrefix}>{data.prefix}</Text>
                  </View>
               </View>

               <View style={{ justifyContent: "center" }}>
                  <Text style={styles.currencyTotal}>{data.total.toFixed(8)}</Text>
                  <Text style={styles.currencyPrice}>R${data.cost}</Text>
               </View>
            </View>

            {/* emprego na Oi */}

            <View style={[styles.tabBottomContainer, {
               paddingVertical: !open ? styles.container.paddingTop : 10
            }]}>

               {
                  !open ? <View style={styles.tabBottomMarketInfo}>
                     <Text style={styles.tabBottomCurrencyPriceText}>R$25.895,05</Text>
                     <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={styles.tabBottomPercetageText}>+2.5%</Text>
                        <SimpleLineIcons name="arrow-down"
                           color="rgba(255,255,255,.5)" style={{ marginRight: 5 }} />
                     </View>
                  </View>
                     :
                     <View style={styles.tabBottomButtonsContainer}>
                        <View style={styles.buttonBuyAndSellContainer}>

                           <Button label="Vender" colors="none"
                              styleButtonText={{
                                 fontSize: 11,
                                 color: "rgba(255,255,255,.7)"
                              }}
                              styleButton={[styles.buttonBuyAndSell, { marginRight: 5 }]} />

                           <Button label="Comprar" colors="none"
                              styleButtonText={{
                                 fontSize: 11,
                                 color: "rgba(255,255,255,.7)"
                              }}
                              styleButton={[styles.buttonBuyAndSell, { marginLeft: 5 }]} />

                        </View>
                        <Button label="Carteira"
                           styleButton={styles.buttonOpenWallet} />
                     </View>
               }
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,.055)",
      marginBottom: 10,
      paddingHorizontal: 12,
      paddingTop: 15,
      borderRadius: 15,
   },
   currencyImage: {
      height: 43,
      width: 43
   },
   currencyName: {
      color: "white",
      fontFamily: font.QuicksandMedium,
      fontSize: 16
   },
   currencyPrefix: {
      color: "rgba(245,245,255,0.5)",
      fontFamily: font.QuicksandMedium,
   },
   currencyTotal: {
      color: "white",
      fontFamily: font.QuicksandSemiBold,
      fontSize: 18
   },
   currencyPrice: {
      color: "rgba(245,240,245,0.5)",
      fontFamily: font.QuicksandMedium,
      fontSize: 16,
      textAlign: "right"
   },
   buttonBuyAndSellContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   buttonBuyAndSell: {
      paddingHorizontal: 15,
      paddingVertical: 9,
      elevation: 0,
      borderColor: "rgba(255,255,255,.1)",
      borderWidth: 1
   },
   buttonOpenWallet: {
      paddingHorizontal: 15,
      borderRadius: 5,
      flex: 2
   },
   tabTopContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%"
   },
   tabBottomContainer: {
      marginTop: 15,
      borderTopWidth: 1,
      borderTopColor: "rgba(255,255,255,.05)",
      width: "100%",
      // paddingTop: 15
   },
   tabBottomButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   tabBottomPercetageText: {
      color: primaryColor,
      marginRight: 15,
      fontFamily: font.QuicksandMedium,
      fontSize: 15,
   },
   tabBottomCurrencyPriceText: {
      color: "rgba(255,255,255,.99)",
      fontFamily: font.QuicksandMedium,
      fontSize: 15,
   },
   tabBottomMarketInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
   },
});