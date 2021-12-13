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
import CoinItem from './CoinItem'
import {styles} from '../styles'

const CoinList = ({coins = []}) => {
  if(coins === undefined || coins.length === 0) {
    return (
      <View  style={styles.container}>
        <View style={styles.container}>
          <Text>
            Nessuna moneta inserita
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => console.log('Nuova moneta')}
          />
            <Text>
              Nuova moneta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return(
      <View>
        {
          coins.map(
            coin => <CointItem
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
