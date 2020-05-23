import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Image } from 'react-native';
// imports
import { height, width } from '~/app/window';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import Button from '~/components/Button';
import Info from '~/components/Info';
import { primaryColor } from '~/app/colors';

import { InputCenter as Input } from '~/components/inputs';
import { TabButton as Tab } from '~/components/tabs';

type Props = {
   navigation: NavigationProp<never>
};

const infoProps = {
   values: {
      nexpoFee: "R$0,00",
      percentage: "0.5%",
      priority: "Média"
   }, total: {
      value: "R$0,00",
      textColor: "white",
   }
}

class DepositScreen extends Component<Props> {

   state = {};

   render() {

      const { navigation } = this.props;

      return (
         <ScrollView showsVerticalScrollIndicator={false}>

            <Tab />

            <View style={{
               height: (height / 100) * 55
            }}>
               <Input style={{ flex: 1 }} />

               <Info {...infoProps} />

            </View>

            <View style={{ alignItems: "center", marginTop: 30 }}>
               <Button label="Continuar" 
                  styleButton={styles.buttonNext} colors="none" />
            </View>

         </ScrollView>
      );
   }
}

export default DepositScreen;

const styles = StyleSheet.create({
   container: {
   },
   buttonNext: {
      borderColor: primaryColor,
      borderWidth: 1,
      width: width * 450
   }
});


/*
wallet:
   submit
   buy
   sell

exchange
   deposit

deposit

*/