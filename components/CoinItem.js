/*
  <CoinItem>
    Name (Tag)
    TotalSpent (Fees)
  </CoinItem>
*/
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {styles} from '../styles'
import SmallText from "./SmallText";
import BigText from "./BigText";

const CoinItem = ({navigation, name = 'Name', tag = 'TAG', spent = '0.00', fees = '0.00'}) => {
  return(
    <TouchableOpacity
      style={styles.columns}
      onPress={() => navigation.navigate('Coin Details')}
    >
      <View
        style={styles.columnItem}
      >
        <BigText text={`${name} (${tag})`} />
        <SmallText text={`€ ${spent} (€ ${fees})`} />
      </View>
      <View style={styles.centering}>
        <SmallText text={`Open`} />
      </View>
    </TouchableOpacity>
  );
}

export default CoinItem
