/*
  <CoinItem>
    Name (Tag)
    TotalSpent (Fees)
  </CoinItem>
*/
import React from 'react'
import {Text, View} from 'react-native'
import {styles} from '../styles'

const CoinItem = ({name = 'Name', tag = 'TAG', spent = '0.00', fees = '0.00'}) => {
  return(
    <View
      style={styles.colums}
    >
      <View
        style={styles.container}
      >
        <Text>{name} ({tag})</Text>
        <Text>€ {spent} (€ {fees})</Text>
      <View>
      <View>
        <Text> Apri </Text>
      </View>
    <View>
  );
}

export default CoinItem
