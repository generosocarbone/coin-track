/*
  <CoinItem>
    Name (Tag)
    TotalSpent (Fees)
  </CoinItem>
*/
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from '../styles'
import SmallText from "./SmallText";
import BigText from "./BigText";

const CoinTransactionItem = ({name = 'Name', tag = 'TAG', spent = '0.00', fees = '0.00'}) => {
  return(
    <TouchableOpacity
      style={styles.columns}
    >
      <View
        style={styles.columnItem}
      >
        <BigText text={`${name} (${tag})`} />
        <SmallText text={`€ ${spent} (€ ${fees})`} />
      </View>
      <View style={styles.centering}>
        <SmallText text={`Edit`} />
      </View>
    </TouchableOpacity>
  );
}

export default CoinTransactionItem
