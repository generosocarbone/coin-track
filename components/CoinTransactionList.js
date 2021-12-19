/*
  <CoinTransactionList>
    <CointItem />
    <CointItem />
    <CointItem />
    ...
    <CointItem />
  </CoinTransactionList>
*/
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import CoinTransactionItem from './CoinTransactionItem'
import {styles} from '../styles'
import BigText from "./BigText";
import SmallText from "./BigText";

const CoinTransactionList = ({coins = []}) => {
  if(coins === undefined || coins.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <BigText text={`Nessuna transazione inserita`} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => console.log('Nuova moneta')}
          >
            <SmallText text={`Nuova transazione`} />
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return(
      <View style={styles.container}
      >
        {
          coins.map(
            coin => <CoinTransactionItem
              key={coin.tag}
              name={coin.name}
              tag={coin.tag}
              spent={coin.spent}
              fees={coin.fees}
            />
          )
        }
      </View>
    )
  }
}

export default CoinTransactionList
