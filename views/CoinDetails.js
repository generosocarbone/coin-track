/*
  In this page it will be shown the transaction of a selected coin
*/
import React from 'react'
import {SafeAreaView} from 'react-native'
import CoinTransactionList from '../components/CoinTransactionList'
import CoinTransactionResume from '../components/CoinTransactionResume'
import {styles} from '../styles'

const coins = []

const CoinDetails = () => {
  return(
    <SafeAreaView style={styles.container}>
      <CoinTransactionList coins={coins} />
      <CoinTransactionResume spent={'0.00'} fees={'0.00'} />
    </SafeAreaView>
  )
}

export default CoinDetails
