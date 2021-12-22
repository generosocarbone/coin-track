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

const FirstPage = ({coins, spent, fees}) => {
  return(
    <SafeAreaView style={styles.container}>
      <CoinList coins={coins} />
      <CoinResume spent={spent} fees={fees} />
    </SafeAreaView>
  )
}

const mapStateToProps = ({coins}) => {

  const spentReducer = (previousValue, currentValue) => previousValue + currentValue;
  const feesReducer = (previousValue, currentValue) => previousValue + currentValue;

  const full = coins.map(c => c.calculateSpent())
  const spent = full.map(c => c.spent).reduce(spentReducer, 0)
  const fees = full.map(c => c.fees).reduce(feesReducer, 0)

  return {
    coins: coins.map(c => ({
      ...c,
      ...(c.calculateSpent())
    })),
    spent,
    fees,
  }
}

export default connect(mapStateToProps)(FirstPage)
