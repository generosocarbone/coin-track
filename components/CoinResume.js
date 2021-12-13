/*
  <CoinResume>
    Total spent
    of Which fees     <NewCoinButton />

  </CoinResume>
*/
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

const CoinResume = ({spent, fees}) => {
  return(
    <View>
      <View>
        <Text>€ {spent}</Text>
        <Text>€ {fees}</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('Nuova moneta')}
      />
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CoinResume
