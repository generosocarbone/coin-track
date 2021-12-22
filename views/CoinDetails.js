/*
  In this page it will be shown the transaction of a selected coin
*/
import React from 'react'
import {SafeAreaView, View} from 'react-native'
import CoinTransactionList from '../components/CoinTransactionList'
import CoinTransactionResume from '../components/CoinTransactionResume'
import {styles} from '../styles'
import {useRoute} from "@react-navigation/native";
import BigText from "../components/BigText";

const coins = []

const CoinDetails = () => {

  const route = useRoute()

  console.log(route.params.coin)
  let {name, tag, spent, fees} = route.params.coin

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.centeringRow}>
        <BigText text={`${name} (${tag})`} />
      </View>
      <CoinTransactionList coins={coins} />
      <CoinTransactionResume spent={spent} fees={fees} />
    </SafeAreaView>
  )
}

export default CoinDetails
