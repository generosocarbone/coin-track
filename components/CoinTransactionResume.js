/*
  <CoinResume>
    Total spent
    of Which fees     <NewCoinButton />

  </CoinResume>
*/
import React from 'react'
import {View} from 'react-native'
import {styles} from '../styles'
import BigText from "./BigText";
import SmallText from "./SmallText";
import CoinButton from "./CoinButton";

const CoinTransactionResume = ({spent, fees}) => {
  return(
    <View style={styles.columns}>
      <View style={styles.container}>
        <BigText text={`Total: € ${spent}`} />
        <SmallText text={`Fees: € ${fees}`} />
      </View>
      <View style={styles.centering}>
        <CoinButton
          press={() => console.log('Nuova transazione')}
          text='Nuova transazione'
        />
      </View>
    </View>
  )
}

export default CoinTransactionResume
