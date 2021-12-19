/*
  <FirstPage>
    <CoinList>
    <CointResume>
  </FirstPage>
*/
import React from 'react'
import {View} from 'react-native'
import CoinList from '../components/CoinList'
import CoinResume from '../components/CoinResume'
import {styles} from '../styles'

const coins = [
  {name: 'Bitcoin', tag: 'BTC', spent: '0.00', fees: '0.00'},
  {name: 'Algorand', tag: 'ALGO', spent: '0.00', fees: '0.00'},
  {name: 'IoTex', tag: 'IOTX', spent: '0.00', fees: '0.00'},
]

const FirstPage = ({navigation}) => {
  return(
    <View style={styles.container}>
      <CoinList coins={coins} navigation={navigation} />
      <CoinResume spent={'0.00'} fees={'0.00'} />
    </View>
  )
}

export default FirstPage
