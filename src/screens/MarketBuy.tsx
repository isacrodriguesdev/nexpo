import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
// imports
import { width, height } from '@app/window';
import { font } from '@app/index';
import { primaryColor } from '@app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import { InputButton as Input } from '~/components/inputs';
import { TabCurrency as Tab } from '~/components/tabs';
import Info from '~/components/Info';
import Button from '~/components/Button';

type Props = {
   navigation: NavigationProp<never>
};

class BuyScreen extends Component<Props> {

   state = {};

   render() {

      const { } = this.state;
      const { navigation } = this.props;

      return (
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
               <Tab />
               <Input />

               <View style={{ marginTop: 25 }}>
                  <Text style={{
                     color: "rgba(255,255,255, 0.4)",
                     textTransform: "uppercase"
                  }}>Ultimo Preço</Text>
                  <Text style={{
                     color: primaryColor,
                     fontFamily: font.QuicksandSemiBold,
                     fontSize: 17
                  }}>R$42.248,08</Text>
               </View>

               <View style={styles.infoContainer}>
                  <Info values={{
                     networkFee: "R$0,00",
                     nexpoFee: "R$0,00",
                     priority: "Baixa",
                     percentage: "0.5%"
                  }} total={{
                     value: "+0.00",
                     cost: "R$0,00",
                     textColor: "#FEA910"
                  }} />
               </View>

               <View style={{
                  alignItems: "center",
                  marginTop: (height / 100) * 18
               }}>
                  <Button label="Comprar"
                     styleButton={{
                        width: width * 450,
                        paddingVertical: 13,
                        borderWidth: 1, 
                        borderColor: primaryColor,
                        borderRadius: 8
                     }} colors="none" />
               </View>
            </View>


         </ScrollView>
      );
   }
}

export default BuyScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   infoContainer: {
      marginTop: 25
   }
});