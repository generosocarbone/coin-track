/*
  <CoinResume>
    Total spent
    of Which fees     <NewCoinButton />

  </CoinResume>
*/
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from '../stles'

const CoinResume = ({spent, fees}) => {
  return(
    <View style={styles.columns}>
      <View style={styles.container}>
        <Text>€ {spent}</Text>
        <Text>€ {fees}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => console.log('Nuova moneta')}
        />
          <Text>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoinResume
