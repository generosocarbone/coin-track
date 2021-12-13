/*
  <FirstPage>
    <CoinList>
    <CointResume>
  </FirstPage>
*/
import React from 'react'
import {View} from 'react-native'
import CoinList from '../components/CoinList'
import CoinList from '../components/CoinResume'
import {styles} from '../stles'

const FirstPage = () => {
  return(
    <View style={styles.container}>
      <CoinList>
      <CoinResume>
    </View>
  )
}

export default FirstPage
