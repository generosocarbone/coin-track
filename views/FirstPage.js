/*
  <FirstPage>
    <CoinList>
    <CointResume>
  </FirstPage>
*/
import React from 'react'
import {SafeAreaView} from 'react-native'
import CoinList from '../components/CoinList'
import CoinResume from '../components/CoinResume'
import {styles} from '../styles'
import {connect} from "react-redux";

const xxx = [
  {name: 'Bitcoin', tag: 'BTC', spent: '0.00', fees: '0.00'},
  {name: 'Algorand', tag: 'ALGO', spent: '0.00', fees: '0.00'},
  {name: 'IoTeX', tag: 'IOTX', spent: '0.00', fees: '0.00'},
]

const FirstPage = ({coins}) => {
  return(
    <SafeAreaView style={styles.container}>
      <CoinList coins={coins} />
      <CoinResume spent={'0.00'} fees={'0.00'} />
    </SafeAreaView>
  )
}

const mapStateToProps = ({coins}) => {
  return {
    coins: coins.map(c => ({
      ...c,
      ...(c.calculateSpent())
    }))
  }
}

export default connect(mapStateToProps)(FirstPage)
