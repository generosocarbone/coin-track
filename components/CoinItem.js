/*
  <CoinItem>
    Name (Tag)
    TotalSpent (Fees)
  </CoinItem>
*/
import React from 'react'
import {Text, View} from 'react-native'

const CoinItem = ({name = 'Name', tag = 'TAG', spent = '0.00', fees = '0.00'}) => {
  return(
    <View>
      <Text>{name} ({tag})</Text>
      <Text>€ {spent} (€ {fees})</Text>
    <View>
  );
}

export default CoinItem
