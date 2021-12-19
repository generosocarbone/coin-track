/*
  <CoinResume>
    Total spent
    of Which fees     <NewCoinButton />

  </CoinResume>
*/
import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {styles} from '../styles'
import BigText from "./BigText";
import SmallText from "./SmallText";

const CoinTransactionResume = ({spent, fees}) => {
  return(
    <View style={styles.columns}>
      <View style={styles.container}>
        <BigText text={`Total: € ${spent}`} />
        <SmallText text={`Fees: € ${fees}`} />
      </View>
      <View style={styles.centering}>
        <TouchableOpacity
          onPress={() => console.log('Nuova transazione')}
        >
            <SmallText text={'Nuova transazione'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoinTransactionResume
