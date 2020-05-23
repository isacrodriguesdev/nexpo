import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
// imports
import { height, width } from '@app/window';
import { primaryColor } from '@app/colors';
// types
import { NavigationProp } from '@react-navigation/native';
// components
import { TabCurrency as Tab } from '~/components/tabs';
import { InputCenter as Input } from '~/components/inputs';
import { InputHash, ButtonCurrency } from '~/screens/submit/index';
import Info from '~/components/Info';
import Button from '~/components/Button';


type Props = {
   navigation: NavigationProp<never>
};

class SubmitScreen extends Component<Props> {

   state = {
      heightView: 0
   };

   render() {

      const { } = this.props;

      return (
         <ScrollView style={[styles.container]} 
            onLayout={({nativeEvent}) => {
               this.setState({heightView: nativeEvent.layout.height})
            }}>

            <Tab />
            <InputHash />
            <ButtonCurrency />
            <Input style={{height: this.state.heightView / 4}} />
            <Info values={{
               networkFee: "R$0,90",
               nexpoFee: "R$0,70",
               priority: "Média",
               percentage: "0.8%"
            }} total={{
               value: "0.335",
               cost: "R$50,33",
               textColor: "white"
            }} />

            <View style={styles.buttonSendContainer}>
               <Button label="Enviar"
                  styleButton={{
                     width: width * 450,
                     paddingVertical: 13,
                     borderWidth: 1, borderColor: primaryColor
                  }} colors="none" />
            </View>

         </ScrollView>
      );
   }
}

export default SubmitScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   buttonSendContainer: {
      alignItems: "center",
      justifyContent: "center",
      bottom: 0,
      marginTop: 25
   }
});