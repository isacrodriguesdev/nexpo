import React from 'react';
import { View, StyleSheet } from 'react-native';
// imports
// types
// components
import Button from '../../components/Button';
import { primaryColors } from '~/app/colors';
import { width } from '~/app/window';
import { FontAwesome } from '~/app/icon';

type Props = {};

export default (props: Props) => {

   return (
      <View style={{ justifyContent: "center", }}>
         <View style={{ marginVertical: 15 }}>
            <Button label="BTC"
               colors={primaryColors}
               styleButton={{width: width * 200, height: 28, paddingHorizontal: 0, paddingVertical: 0}}
               renderIcon={<FontAwesome name="undo-alt" color="white" />} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {}
});