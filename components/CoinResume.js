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
import { useNavigation } from '@react-navigation/native';

// se non passo navigation come props a CoinResume e clicco sul tasto 'Nuova moneta'
// l'applicazione va in eccezione. Perché? Probabilmente perché CoinResume non fa
// parte dello StackNavigator e per questo non ha il navigation.
// Per sopperire a questa mancanza si può usare l'hook useNavigation
const CoinResume = ({spent, fees}) => {

  const navigation = useNavigation();

  return(
    <View style={styles.columns}>
      <View style={styles.container}>
        <BigText text={`Total: € ${spent}`} />
        <SmallText text={`Fees: € ${fees}`} />
      </View>
      <View style={styles.centering}>
        <TouchableOpacity
          onPress={() => navigation.navigate('New Coin')}
        >
            <SmallText text={'Nuova moneta'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoinResume
