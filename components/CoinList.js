/*
  <CoinList>
    <CointItem />
    <CointItem />
    <CointItem />
    ...
    <CointItem />
  </CoinList>
*/
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import CoinItem from './CoinItem'
import {styles} from '../styles'
import BigText from "./BigText";
import SmallText from "./SmallText";
import { useNavigation } from '@react-navigation/native';

const CoinList = ({coins = []}) => {

  const navigation = useNavigation()

  if(coins === undefined || coins.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <BigText text={`Nessuna moneta inserita`} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('New Coin')}
          >
            <SmallText text={`Nuova moneta`} />
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
            coin => <CoinItem
              navigation={navigation}
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

export default CoinList
