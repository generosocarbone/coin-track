/*
  <FirstPage>
    <CoinList>
    <CointResume>
  </FirstPage>
*/
import React from 'react'
import {View} from 'react-native'
import CoinTransactionList from '../components/CoinTransactionList'
import CoinTransactionResume from '../components/CoinTransactionResume'
import {styles} from '../styles'

const coins = []

const CoinDetails = () => {
  return(
    <View style={styles.container}>
      <CoinTransactionList coins={coins} />
      <CoinTransactionResume spent={'0.00'} fees={'0.00'} />
    </View>
  )
}

export default CoinDetails
